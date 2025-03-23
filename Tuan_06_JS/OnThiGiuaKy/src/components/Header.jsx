import { Link } from 'react-router-dom';
import BookTableButton from './BookTable';
function Header() {
    return (
        <header className='bg-gray-800 text-white p-4'>
            <nav className='flex justify-between items-center'>
                <ul className='flex space-x-8'>
                    <li>
                        <Link
                            to="/"
                            className='hover:bg-gray-500 px-4 py-2 rounded-xl '
                        >Trang chủ</Link>
                    </li>
                    <li>
                        <Link
                            to="/Menu"
                            className='hover:bg-gray-500 px-4 py-2 rounded-xl '
                        >Thực đơn</Link>
                    </li>
                    <li>
                        <Link
                            to="/Contact"
                            className='hover:bg-gray-500 px-4 py-2 rounded-xl '
                        >Liên hệ</Link>
                    </li>
                </ul>
                <BookTableButton/>
            </nav>
        </header>
    );
}

export default Header;