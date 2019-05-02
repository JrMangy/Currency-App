import React from 'react'
import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import Backwaters from "../Components/images/india-backwaters-alleppey-kerala.jpg";
import Baga from "../Components/images/india-baga-goa.JPG";
import Golden from "../Components/images/india-golden-temple-amritsar.jpg";

class India extends React.Component {

 
    
render() {
    return(
        <div>
            <NavLink to="/"/>
            <h1>India</h1>
            <img className="slide" src={Backwaters} alt=""></img>
            <img className="slide" src={Baga} alt=""></img>
            <img className="slide" src={Golden} alt=""></img>
            {/* slideshow */}
            <h3>Languages</h3>
            <p>Hindi and English are employed at the national level, with another 22 languages officially designated for regional use.</p>
            <h3>Popular Tourist Destinations</h3>
                <ul>
                    <li>Backwaters, Alleppey, Kerala</li>
                    <li>Baga, Goa</li>
                    <li>Golden Temple, Amritsar</li>
                </ul>                
            <p>Indian Standard Time (UTC+5:30)</p>
            <br/>
            <button>Click here for timestamp in current country's timezone!</button>
        </div>
    ) //end return
} //end render
}; //end class India

export default India