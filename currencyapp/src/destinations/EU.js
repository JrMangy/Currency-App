import React from 'react';
//import firebase from 'firebase';
import '../CSS/Destination.css';
import NavLink from '../Components/Navigation';
import Colosseum from "../Components/images/eu-colosseum-rome.JPG";
import Fira from "../Components/images/eu-fira-santorini-greece.jpg";
import Louvre from "../Components/images/eu-louvre-paris.jpg";

class EU extends React.Component {

 
    
render() {
    return(
        <div>
            <NavLink to="/"/>
            <h1>European Union</h1>
            {/* slideshow */}
            {/* <img src={} alt=""></img>
            <img src={} alt=""></img>
            <img src={} alt=""></img> */}
            <img className="slide" src={Colosseum} alt="Colosseum"></img>
            <img className="slide" src={Fira} alt="Fira"></img>
            <img className="slide" src={Louvre} alt="Louvre"></img>

            <h3>Languages</h3>
            <p>24 official languages. The most widely used are English, French and German.</p>
            <h3>Alternative Currencies</h3>
            <p>The Euro is the official currency in 19 of 28 EU member states.
The most common alternative currencies among member states are the Pound Sterling (UK)* and Krona (Sweden).
Switzerland is not an EU member, but the Swiss Franc is notable as a major currency of the Schengen Area.</p>
            <h3>Popular Tourist Destinations</h3>
                <ul className="destination">
                    <li>Colosseum, Rome, Italy</li>
                    <li>Fira, Santorini, Greece</li>
                    <li>Louvre Museum, Paris, France</li>
                </ul>    
            <p>Western European Time (UTC) Central European Time (UTC+1) Eastern European Time (UTC+2) Seasonal daylight savings time is used in some member states.</p>
            <br/>
            <button>Click here for timestamp in current country's timezone!</button>
            <p>*The United Kingdom voted in 2016 to end its membership in the European Union. The process is due to be completed in October 2019.</p>
        </div>
    ) //end return
} //end render
}; //end class EU

export default EU