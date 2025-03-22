import { Link } from 'react-router-dom';
import './Header.css';
import BookTable from './BookTable';

function Header() {
    return ( 
        <header className="header">
            <nav id="header-nav">
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/menu">Thực đơn</Link></li>
                    <li><Link to="/contact">Liên hệ</Link></li>
                    <li><BookTable /></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
