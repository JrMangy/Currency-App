import React from 'react';
//import firebase from 'firebase';
import '../CSS/Destination.css';
import NavLink from '../Components/Navigation';
import Colosseum from "../Components/images/eu-colosseum-rome.JPG";
import Fira from "../Components/images/eu-fira-santorini-greece.jpg";
import Louvre from "../Components/images/eu-louvre-paris.jpg";
import bkgd from "../Components/images/travel.jpg";

var parisTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"});
parisTime = new Date(parisTime);

var athensTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Athens"});
athensTime = new Date(athensTime);

var romeTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
romeTime = new Date(romeTime);

var now = new Date().toLocaleString("en-US");
now = new Date(now);

class EU extends React.Component {

render() {
    return(
        <div style={{backgroundImage: "url(" + bkgd + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <NavLink to="/"/>
            <div className="infoBox">
            <h1>European Union</h1>
            <div className="clock">
                <p>Your local time is {now.toLocaleString()}</p>
                <p>The current time in Paris is {parisTime.toLocaleString()}</p>
                <p>The current time in Rome is {romeTime.toLocaleString()}</p>
                <p>The current time in Santorini is {athensTime.toLocaleString()}</p>
            </div><br/>
            <div className="pic1"><img className="slide" src={Colosseum} alt="Colosseum"></img><h3>Colosseum, Rome, Italy</h3></div>
            <div className="pic2"><img className="slide" src={Fira} alt="Fira"></img><h3>Fira, Santorini, Greece</h3></div>
            <div className="pic3"><img className="slide" src={Louvre} alt="Louvre"></img><h3>Louvre Museum, Paris, France</h3></div>
            <div className="text">
            <h3>Languages</h3>
            <p>24 official languages. The most widely used are English, French and German.</p>
            <h3>Alternative Currencies</h3>
            <p>The Euro is the official currency in 19 of 28 EU member states.
                <br/>
                The most common alternative currencies among member states are the Pound Sterling (UK)* and Krona (Sweden).
                <br/>
                Switzerland is not an EU member, but the Swiss Franc is notable as a major currency of the Schengen Area.</p>
                </div>
            
            <p>*The United Kingdom voted in 2016 to end its membership in the European Union. 
                <br/>
                The process is due to be completed in October 2019.</p>
        </div>
        </div>
    ) //end return
} //end render
}; //end class EU

export default EU