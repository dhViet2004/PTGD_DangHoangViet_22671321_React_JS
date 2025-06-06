import React, { useState, useEffect, useMemo } from 'react';
import { useData } from '../components/DataContext';
import Modal from '../components/Modal'
const DataTable = ({
  itemsPerPage = 5,
  avatarField = 'avatar',
  statusField = "status",
  currencyFields = [],
  dateFields = [],
  excludeFields = ['avatar'],
  nameField = 'name'
}) => {
  const { tableData, tableTitle, updateData, fetchStats, activeFilter } = useData(); // Thêm activeFilter
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({});
  useEffect(() => {
    if (!tableData || tableData.length === 0) {
      fetchStats();
    }
  }, [tableData, fetchStats]);

  const currentItems = useMemo(() => {
    if (!tableData || tableData.length === 0) {
      return [];
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return tableData.slice(indexOfFirstItem, indexOfLastItem);
  }, [tableData, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    return tableData && tableData.length > 0 ? Math.ceil(tableData.length / itemsPerPage) : 0;
  }, [tableData, itemsPerPage]);

  if (!tableData || tableData.length === 0) {
    return <div className="p-4">No data available</div>;
  }

  const columns = Object.keys(tableData[0]).filter(
    column => !excludeFields.includes(column)
  );

  const formatCurrency = (value) => {
    if (isNaN(value)) return value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch {
      return dateString;
    }
  };

  const StatusBadge = ({ status }) => {
    if (!status) return null;

    const statusLower = status.toLowerCase();
    let badgeClass = 'bg-gray-100 text-gray-800';

    if (statusLower.includes('new')) badgeClass = 'bg-blue-100 text-blue-800';
    else if (statusLower.includes('progress') || statusLower.includes('pending'))
      badgeClass = 'bg-yellow-100 text-yellow-800';
    else if (statusLower.includes('complete') || statusLower.includes('done'))
      badgeClass = 'bg-green-100 text-green-800';
    else if (statusLower.includes('cancel') || statusLower.includes('fail'))
      badgeClass = 'bg-red-100 text-red-800';

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
        {status}
      </span>
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderCellContent = (column, item) => {
    const value = item[column];

    if (column === nameField) {
      return (
        <div className="flex items-center">
          {item[avatarField] && (
            <div className="flex-shrink-0 h-10 w-10 mr-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={`http://localhost:3001${item[avatarField]}`}
                alt="Avatar"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-avatar.png';
                }}
              />
            </div>
          )}
          <div>{value}</div>
        </div>
      );
    }

    if (statusField === column) {
      return <StatusBadge status={value} />;
    }

    if (currencyFields.includes(column)) {
      return formatCurrency(value);
    }

    if (dateFields.includes(column)) {
      return formatDate(value);
    }

    return value !== null && value !== undefined ? value.toString() : '';
  };

  const formatColumnName = (column) => {
    return column
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleExport = () => {
    console.log("Export functionality to be implemented");
  };

  const handleChange = (e) => {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async (updatedUser) => {
    try {
      if (!updatedUser || !updatedUser.id) {
        throw new Error('No user ID provided for update');
      }

      const payload = { ...updatedUser };
      if (payload.avatar && payload.avatar.startsWith('http://localhost:3001')) {
        payload.avatar = payload.avatar.replace('http://localhost:3001', '');
      }
      console.log('Payload gửi đi:', payload);

      const response = await fetch(`http://localhost:3001/customers/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update user: ${errorText}`);
      }

      const updatedData = await response.json();
      updateData(tableData.map(item => item.id === updatedData.id ? updatedData : item));
      setIsModalOpen(false);
      setSelectedItem(null);
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Failed to save user. Please try again.');
    }
  };
  const handleImport = () => {
    const emptyCustomer = Object.keys(tableData[0]).reduce((acc, key) => {
      if (key !== 'id') { 
        acc[key] = '';
      }
      return acc;
    }, {});
    setNewCustomer(emptyCustomer);
    setIsImportModalOpen(true);
  };

  const handleImportChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: e.target.value
    });
  };
  const handleImportSave = async (newUser) => {
    try {
      const response = await fetch('http://localhost:3001/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Không thể tạo khách hàng mới: ${errorText}`);
      }

      const createdUser = await response.json();
      updateData([...tableData, createdUser]); 
      setIsImportModalOpen(false); 
      setNewCustomer({}); 
    } catch (error) {
      console.error('Lỗi khi nhập khách hàng:', error);
      alert('Không thể nhập khách hàng. Vui lòng thử lại.');
    }
  };
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{tableTitle}</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleImport}
            className="border border-pink-400 text-pink-400 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-pink-100 cursor-pointer transition-colors duration-200"
          >
            <img
              src="http://localhost:3001/images/Download.png"
              alt="Import Icon"
              className="w-5 h-5"
            />
            <span>Import</span>
          </button>
          <button
            onClick={handleExport}
            className="border border-pink-400 text-pink-400 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-pink-100 cursor-pointer transition-colors duration-200"
          >
            <img
              src="http://localhost:3001/images/Moveup.png"
              alt="Export Icon"
              className="w-5 h-5"
            />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {formatColumnName(column)}
                </th>
              ))}
              {activeFilter === 'customers' && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((item, index) => (
              <tr key={`row-${index}`} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={`cell-${index}-${column}`}
                    className="px-6 py-4"
                  >
                    <div className="text-sm text-gray-900">
                      {renderCellContent(column, item)}
                    </div>
                  </td>
                ))}
                {activeFilter === 'customers' && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="cursor-pointer"
                    >
                      <img src="http://localhost:3001/images/create.png" alt="Edit" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {tableData.length > itemsPerPage && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, tableData.length)} of {tableData.length} entries
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {"<"}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={`page-${number}`}
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {">"}
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          user={selectedItem}
          onChange={handleChange}
        />
      )}
      {isImportModalOpen && (
        <Modal 
          isOpen={isImportModalOpen} 
          onClose={() => setIsImportModalOpen(false)} 
          onSave={handleImportSave} 
          user={newCustomer} 
          onChange={handleImportChange}
          title="Thêm khách hàng mới" 
        />
      )}
    </div>
  );
};

export default DataTable;