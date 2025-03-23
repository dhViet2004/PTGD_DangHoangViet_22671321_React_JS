// /src/components/MenuList.jsx
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext'; // Import OrderContext
import dataMenu from '../data/menu.json';

function MenuList() {
  const { order, handleAddToOrder, handleRemoveFromOrder } = useContext(OrderContext);

  return (
    <div className="flex gap-8 mt-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-1">
        {dataMenu.map((item) => (
          <li key={item.id} className="mb-8 p-4 border rounded-lg shadow-lg">
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-50 object-cover rounded-lg"
            />
            <h4 className="font-bold text-center">{item.name}</h4>
            <p className="text-gray-700 text-center">{item.moTa}</p>
            <h3 className="text-red-600 text-center">{item.gia} VNĐ</h3>
            <div className="flex justify-end">
              <button
                className="border px-4 py-2 rounded-lg mt-2 bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-700"
                onClick={() => handleAddToOrder(item)}
              >
                Đặt món
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-90 border p-5 rounded-lg">
        <h2 className="font-bold text-xl mb-4">Danh sách Order</h2>
        {order.length === 0 ? (
          <p>Chưa có món nào trong danh sách.</p>
        ) : (
          <ul>
            {order.map((orderItem, index) => (
              <li key={orderItem.id} className="border-b py-2 flex justify-between">
                {orderItem.name} - {orderItem.gia} VNĐ
                <button
                  className="border px-2 py-1 mx-1 rounded-lg bg-red-500 text-white cursor-pointer hover:bg-red-600"
                  onClick={() => handleRemoveFromOrder(index)}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MenuList;