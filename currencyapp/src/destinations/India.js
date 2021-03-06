import React from 'react'
//import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import Backwaters from "../Components/images/india-backwaters-alleppey-kerala.jpg";
import Baga from "../Components/images/india-baga-goa.JPG";
import Golden from "../Components/images/india-golden-temple-amritsar.jpg";
import bkgd from "../Components/images/travel.jpg";

var now = new Date().toLocaleString("en-US");
now = new Date(now);

var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
indiaTime = new Date(indiaTime);

class India extends React.Component {

render() {
    return(
        <div style={{backgroundImage: "url(" + bkgd + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <NavLink to="/"/>
            <div className="infoBox">
            <h1>India</h1>
            <div className="clock">
                <p>Your local time is: {now.toLocaleString()}</p>
                <p>The current time in India is: {indiaTime.toLocaleString()}</p>
            </div>
            <br/>
            {/* <iframe title="google" id="gmap_canvas" src={`https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed`}></iframe> */}
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1_CSE8CjPUiCNVN06XgGq1J4OcI5M-vt_" width="640" height="480"></iframe>
            <br/>
            <h2 className="text">In the map above, you will find various airports, MoneyGram locations, ATMs, banks, and currency exchange locations near the destinations listed below.</h2>
            <br/>
            <div className="pic1"><img className="slide" src={Backwaters} alt=""></img><h3>Backwaters, Alleppey, Kerala</h3></div>
            <div className="pic2"><img className="slide" src={Baga} alt=""></img><h3>Baga, Goa</h3></div>
            <div className="pic3"><img className="slide" src={Golden} alt=""></img><h3>Golden Temple, Amritsar</h3></div>
            <h1>Languages</h1>
            <h2 className="text">Hindi and English are employed at the national level, with another 22 languages officially designated for regional use.</h2>       
            {/* <p>Indian Standard Time (UTC+5:30)</p> */}
        </div>
        </div>
    ) //end return
} //end render
}; //end class India

export default India