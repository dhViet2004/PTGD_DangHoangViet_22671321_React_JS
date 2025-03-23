import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

function BookTable() {
  const { order } = useContext(OrderContext);

  // Tính tổng tiền
  const total = order.reduce((sum, item) => sum + (item.gia || 0), 0);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Xác nhận đặt bàn</h1>
      <h2 className="font-bold text-xl mb-2">Danh sách Order</h2>
      {order.length === 0 ? (
        <p>Chưa có món nào trong danh sách.</p>
      ) : (
        <ul className="border rounded-lg p-4">
          {order.map((orderItem, index) => (
            <li key={`${orderItem.id}-${index}`} className="border-b py-2">
              {orderItem.name} - {orderItem.gia?.toLocaleString()} VNĐ
            </li>
          ))}
          <li className="font-bold mt-2">
            Tổng tiền: {total.toLocaleString()} VNĐ
          </li>
        </ul>
      )}
    </div>
  );
}

export default BookTable;
