import React from 'react'
import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import FrenchQuarter from "../Components/images/us-french-quarter-new-orleans.jpg";
import GrandCanyon from "../Components/images/us-grand-canyon-arizona.JPG";
import MET from "../Components/images/us-met-museum-new-york.JPG";

class US extends React.Component {

 
    
render() {
    return(
        <div>
            <NavLink to="/"/>
            <h1>United States of America</h1>
            <img className="slide" src={FrenchQuarter} alt=""></img> 
            <img className="slide" src={GrandCanyon} alt=""></img>
            <img className="slide" src={MET} alt=""></img>
            {/* slideshow */}
            <h3>Languages</h3>
            <p>Though there is no federally established official language, a small majority of states have afforded English this designation. Dozens of indigenous languages, including Hawaiian, share official status on a regional basis.</p>
            <h3>Popular Tourist Destinations</h3>
                <ul>
                    <li>French Quarter, New Orleans, Louisiana</li>
                    <li>Grand Canyon National Park, Arizona</li>
                    <li>Metropolitan Museum of Art, New York City, New York</li>
                </ul>                
            <p>Atlantic, Eastern, Central, Mountain, Pacific, Alaska, and Hawaii-Aleutian Standard Times (UTC-4 through UTC-10).
In territories:
Samoa (UTC-11) in American Samoa
Chamorro (UTC+10) in Guam and the commonwealth of the Northern Mariana Islands</p>
            <br/>
            <button>Click here for timestamp in current country's timezone!</button>
        </div>
    ) //end return
} //end render
}; //end class US

export default US