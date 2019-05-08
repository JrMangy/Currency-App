import React from 'react'
//import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import ForbiddenCity from "../Components/images/china-forbidden-city-beijing.JPG";
import GreatWall from "../Components/images/china-great-wall.JPG";
import Terracotta from "../Components/images/china-terracotta-warriors-xian.jpg";

class China extends React.Component {

 
    
render() {
    return(
        <div>
            <NavLink to="/"/>
            <h1>China</h1>
            <img className="slide" src={ForbiddenCity} alt="ForbiddenCity"></img>
            <img className="slide" src={GreatWall} alt="GreatWall"></img>
            <img className="slide" src={Terracotta} alt="Terracotta"></img>
            {/* slideshow */}
            <h3>Languages</h3>
            <p>official language: Modern Standard Mandarin
                other: Cantonese, Uyghur, Mongolian</p>
            <h3>Popular Tourist Destinations</h3>
                <ul className="destination">
                    <li>Forbidden City</li>
                    <li>Great Wall</li>
                    <li>Xi'an Terracotta Warriors</li>
                </ul>                
            <p>China Standard Time (UTC+8)</p>
            <br/>
            <button>Click here for timestamp in current country's timezone!</button>
        </div>
    ) //end return
} //end render
}; //end class China

export default China