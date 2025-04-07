import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Tạo Context với giá trị mặc định
const DataContext = createContext();

// 2. Tạo Provider component
export const DataProvider = ({ children }) => {
  const [stats, setStats] = useState({
    turnover: { current: 0, change: 0, rawData: [] },
    profit: { current: 0, change: 0, rawData: [] },
    newCustomers: { current: 0, change: 0, rawData: [] },
    loading: true,
    error: null
  });
  
  const [activeFilter, setActiveFilter] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableTitle, setTableTitle] = useState("Detailed Report");

  // Hàm fetch dữ liệu
  const fetchStats = async () => {
    try {
      const [turnoverRes, profitRes, customersRes] = await Promise.all([
        fetch('http://localhost:3001/turnover'),
        fetch('http://localhost:3001/profit'),
        fetch('http://localhost:3001/customers')
      ]);
  
      if (!turnoverRes.ok || !profitRes.ok || !customersRes.ok) {
        throw new Error('One or more API requests failed');
      }
  
      const [turnoverData, profitData, customersData] = await Promise.all([
        turnoverRes.json(),
        profitRes.json(),
        customersRes.json()
      ]);
  
      console.log('Fetched data:', { turnoverData, profitData, customersData }); // Log dữ liệu nhận được
  
      const latestTurnover = turnoverData[turnoverData.length - 1] || { amount: 0, change: 0 };
      const latestProfit = profitData[profitData.length - 1] || { amount: 0, margin: 0 };
      const prevProfit = profitData[profitData.length - 2] || latestProfit;
  
      const currentNewCustomers = customersData.filter(c => c.status === "New").length;
      const customerChange = (currentNewCustomers / customersData.length * 100).toFixed(2) || 0;
  
      setStats({
        turnover: {
          current: latestTurnover.amount,
          change: latestTurnover.change,
          rawData: turnoverData
        },
        profit: {
          current: latestProfit.amount,
          change: ((latestProfit.margin - prevProfit.margin) / prevProfit.margin * 100).toFixed(2) || 0,
          rawData: profitData
        },
        newCustomers: {
          current: currentNewCustomers,
          change: customerChange,
          rawData: customersData
        },
        loading: false,
        error: null
      });
  
      setTableData(customersData);
    } catch (error) {
      console.error('Fetch error:', error);
      setStats(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to fetch data'
      }));
    }
  };

  // Hàm định dạng tiền tệ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Hàm xử lý click filter
  const handleButtonClick = (filterType) => {
    setActiveFilter(filterType);
    switch (filterType) {
      case 'turnover':
        setTableData(stats.turnover.rawData);
        setTableTitle("Turnover Details");
        break;
      case 'profit':
        setTableData(stats.profit.rawData);
        setTableTitle("Profit Details");
        break;
      case 'customers':
        setTableData(stats.newCustomers.rawData);
        setTableTitle("Customer Details");
        break;
      default:
        setTableData(stats.newCustomers.rawData);
        setTableTitle("Detailed Report");
    }
  };

  // Hàm cập nhật dữ liệu
  const updateData = (newData) => {
    setTableData(newData); // Cập nhật tableData trực tiếp
    if (activeFilter === 'turnover') {
      setStats(prev => ({
        ...prev,
        turnover: { ...prev.turnover, rawData: newData }
      }));
    } else if (activeFilter === 'profit') {
      setStats(prev => ({
        ...prev,
        profit: { ...prev.profit, rawData: newData }
      }));
    } else if (activeFilter === 'customers') {
      setStats(prev => ({
        ...prev,
        newCustomers: { ...prev.newCustomers, rawData: newData }
      }));
    }
  };

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <DataContext.Provider
      value={{
        stats,
        activeFilter,
        tableData,
        tableTitle,
        formatCurrency,
        handleButtonClick,
        updateData,
        fetchStats
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// 3. Tạo custom hook để sử dụng context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// 4. Export Context
export default DataContext;