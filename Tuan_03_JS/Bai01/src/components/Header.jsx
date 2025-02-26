import './Header.css'
import chefifyImage from '../images/chefify.png';
import checkPhoto from '../images/check.png'
function Header() {
    return ( 
        <>
            <div id = 'header' className ="flex-container">
                <div><img src={chefifyImage} alt="logo" /></div>
                <div>
                    <input className='myinput'/>
                   
                </div>
                <div className='mynav'>
                    <nav>
                        <ul>
                            <li><a href="">What to cook</a></li>
                            <li><a href="">Recipes</a></li>
                            <li><a href="">Ingredients</a></li>
                            <li><a href="">Occasions</a></li>
                            <li><a href="">About us</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className='profile'>
                <div className='photo'>
                <img src={checkPhoto} alt="check" />
                    <p> Your Recipe Box</p>
                </div>
                    <img src="https://i.imgur.com/A1OshFQ.jpg" alt="" /></div>

            </div>
        </>
     );
}

export default Header;