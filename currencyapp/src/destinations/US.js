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

var nYTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
nYTime = new Date(nYTime);

var noLaTime = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
noLaTime = new Date(noLaTime);

var arizonaTime = new Date().toLocaleString("en-US", {timeZone: "America/Phoenix"});
arizonaTime = new Date(arizonaTime);

class US extends React.Component {
    
render() {
    return(
        <div style={{backgroundImage: "url(" + bkgd + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <NavLink to="/"/>
            <div className="infoBox">
            <h1>United States of America</h1>
            <div className="clock">
                <p>Your time now is: {now.toLocaleString()}</p>
                <p>The current time in Arizona is: {arizonaTime.toLocaleString()}</p>
                <p>The current time in New Orleans is: {noLaTime.toLocaleString()}</p>
                <p>The current time in New York is: {nYTime.toLocaleString()}</p>
            </div>
            <br/>
            {/* <iframe title="google" id="gmap_canvas" src={`https://maps.google.com/maps?q=USA&t=&z=4&ie=UTF8&iwloc=&output=embed`}></iframe> */}
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1vHY21VYJ8fXz3-68dX5v_Lyacn_6uez0" width="640" height="480"></iframe>
            <br/>
            <h2 className="text">In the map above, you will find various airports, MoneyGram locations, ATMs, banks, and currency exchange locations near the destinations listed below.</h2>
            <br/>
            <div className="pic1"><img className="slide" src={FrenchQuarter} alt=""></img><h3>French Quarter, New Orleans, Louisiana</h3></div> 
            <div className="pic2"><img className="slide" src={GrandCanyon} alt=""></img><h3>Grand Canyon National Park, Arizona</h3></div>
            <div className="pic3"><img className="slide" src={MET} alt=""></img><h3>Metropolitan Museum of Art, New York, NY</h3></div>
            <h1>Languages</h1>
            <h2 className="text">Though there is no federally established official language, a small majority of states have afforded English this designation. 
                <br/> Dozens of indigenous languages, including Hawaiian, share official status on a regional basis.</h2>               
            {/* <p>Atlantic, Eastern, Central, Mountain, Pacific, Alaska, and Hawaii-Aleutian Standard Times (UTC-4 through UTC-10).</p>
            <p>In territories:</p>
            <ul className="timeZones">
                <li>Samoa (UTC-11) in American Samoa</li>
                <li>Chamorro (UTC+10) in Guam and the commonwealth of the Northern Mariana Islands</li>
            </ul> */} 
        </div>
    </div>
    ) //end return
} //end render
}; //end class US

export default US