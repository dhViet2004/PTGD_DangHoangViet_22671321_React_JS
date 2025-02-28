import './center.css'
import Nothing from '../images/nothing.png'
import Button from './Button';
function Center() {
    return ( 
        <div className="center">
            <div className="container-center">
                <h1>Sorry, no results were found for &quot;cakescascsa&quot;</h1>
                <img src={Nothing} alt="" />
                <p>We have all your independence Day sweets covered.</p>
                <div id="button-center">
                    <Button color="#ff69b4" text="Sweet Cake " bg="#ffc9e480"/>
                    <Button color="blueviolet" text="Black Cake" bg="#e0afff80"/>
                    <Button color="#ff69b4" text="Pozoke Verde" bg="#ffc9e480"/>
                    <Button color="green" text="Heakthy food" bg="#afe7ff80"/>
                    
                </div>
            </div>
        </div>
     );
}

export default Center;