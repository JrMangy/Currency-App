import React from 'react'
//import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import FrenchQuarter from "../Components/images/us-french-quarter-new-orleans.jpg";
import GrandCanyon from "../Components/images/us-grand-canyon-arizona.JPG";
import MET from "../Components/images/us-met-museum-new-york.JPG";
import bkgd from "../Components/images/travel.jpg";

var now = new Date().toLocaleString("en-US");
now = new Date(now);
console.log('Now it is '+now.toLocaleString());

var nYTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
nYTime = new Date(nYTime);
console.log('USA time: '+nYTime.toLocaleString());

var noLaTime = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
noLaTime = new Date(noLaTime);
console.log('USA time: '+noLaTime.toLocaleString());

var arizonaTime = new Date().toLocaleString("en-US", {timeZone: "America/Phoenix"});
arizonaTime = new Date(arizonaTime);
console.log('USA time: '+arizonaTime.toLocaleString());

class US extends React.Component {
    
render() {
    return(
        <div style={{backgroundImage: "url(" + bkgd + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <NavLink to="/"/>
            <div className="infoBox">
            <h1>United States of America</h1>
            <img className="slide" src={FrenchQuarter} alt=""></img> 
            <img className="slide" src={GrandCanyon} alt=""></img>
            <img className="slide" src={MET} alt=""></img>
            {/* slideshow */}
            <h3>Languages</h3>
            <p>Though there is no federally established official language, a small majority of states have afforded English this designation. 
                <br/> Dozens of indigenous languages, including Hawaiian, share official status on a regional basis.</p>
            <h3>Popular Tourist Destinations</h3>
                <ul className="destination">
                    <li>French Quarter, New Orleans, Louisiana</li>
                    <li>Grand Canyon National Park, Arizona</li>
                    <li>Metropolitan Museum of Art, New York City, New York</li>
                </ul>                
            <p>Atlantic, Eastern, Central, Mountain, Pacific, Alaska, and Hawaii-Aleutian Standard Times (UTC-4 through UTC-10).</p>
            <p>In territories:</p>
            <ul>
                <li>Samoa (UTC-11) in American Samoa</li>
                <li>Chamorro (UTC+10) in Guam and the commonwealth of the Northern Mariana Islands</li>
            </ul>
            <p>Your time now is: {now.toLocaleString()}</p>
            <p>The current time in Arizona is: {arizonaTime.toLocaleString()}</p>
            <p>The current time in New Orleans is: {noLaTime.toLocaleString()}</p>
            <p>The current time in New York is: {nYTime.toLocaleString()}</p>
        </div>
    </div>
    ) //end return
} //end render
}; //end class US

export default US