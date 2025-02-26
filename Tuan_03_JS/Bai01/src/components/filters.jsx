import './filter.css'
import listFilter from '../images/list_filter.png'
function Filter() {
    return ( 
        <div className='filter'>
            <div id='filter' className="container">
                <div id="top">
                    <img src={listFilter} alt="" />
                    <h3><b>FILTERS</b></h3>
                </div>
                <div id="center">
                    <div id="type">
                        <b id='ty'>Type</b>
                        <b id='len'>^</b>
                    </div>
                    <div id='check'>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Filter;