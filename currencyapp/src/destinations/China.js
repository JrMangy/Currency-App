import React from 'react'
//import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import ForbiddenCity from "../Components/images/china-forbidden-city-beijing.JPG";
import GreatWall from "../Components/images/china-great-wall.JPG";
import Terracotta from "../Components/images/china-terracotta-warriors-xian.jpg";
import bkgd from "../Components/images/travel.jpg";

var now = new Date().toLocaleString("en-US");
now = new Date(now);

var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
asiaTime = new Date(asiaTime);


class China extends React.Component {  
 
render() {
    return(
        <div style={{backgroundImage: "url(" + bkgd + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <NavLink to="/"/>
            <div className="infoBox">
            <h1>China</h1>
            <div className="clock">
                <p>Your local time is: {now.toLocaleString()}</p>
                <p>The current time in China is: {asiaTime.toLocaleString()}</p>
            </div>
            <br/>
            <div className="pic1"><img className="slide" src={ForbiddenCity} alt="ForbiddenCity"></img><h3>Forbidden City</h3></div>
            <div className="pic2"><img className="slide" src={GreatWall} alt="GreatWall"></img><h3>Great Wall</h3></div>
            <div className="pic3"><img className="slide" src={Terracotta} alt="Terracotta"></img><h3>Xi'an Terracotta Warriors</h3></div>
            <div className="text">
            <h3>Languages</h3>
            <p>official language: Modern Standard Mandarin
                <br/>
                other: Cantonese, Uyghur, Mongolian</p>
                </div>             
            {/* <p>China Standard Time (UTC+8)</p> */}
            
        </div>
        </div>
       
    ) //end return
}; //end render
}; //end class China
export default China