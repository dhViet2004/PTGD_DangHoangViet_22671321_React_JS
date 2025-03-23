// /src/components/BookTableButton.jsx
import { Link } from 'react-router-dom';

function BookTableButton() {
  return (
    <Link
      to="/BookTable"
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-bold"
    >
      Đặt bàn
    </Link>
  );
}

export default BookTableButton;