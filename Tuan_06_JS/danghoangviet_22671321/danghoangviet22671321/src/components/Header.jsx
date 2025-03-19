import './Header.css';
import BookTable from './BookTable';
function Header() {
    return ( 
        <div id='Header'>
            <nav id='header-nav'>
            <ul>
                <li><a href="#home">Trang chủ</a></li>
                <li><a href="#menu">Thực đơn</a></li>
                <li><a href="#contact">Liên hệ</a></li>
                <BookTable></BookTable>
            </ul>
        </nav>
        
        </div>
     );
}
export default Header;


