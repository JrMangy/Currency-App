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
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=134MSnq9m9xHEUbgq_Nnz6Ki6EZEkYDK0" width="640" height="480"></iframe>
            {/* <iframe title="google" id="gmap_canvas" src={`https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed`}></iframe> */}
            <br/>
            <h2 className="text">In the map above, you will find various airports, MoneyGram locations, ATMs, banks, and currency exchange locations near the destinations listed below.</h2>
            <br/>
            <div className="pic1"><img className="slide" src={Colosseum} alt="Colosseum"></img><h3>Colosseum, Rome, Italy</h3></div>
            <div className="pic2"><img className="slide" src={Fira} alt="Fira"></img><h3>Fira, Santorini, Greece</h3></div>
            <div className="pic3"><img className="slide" src={Louvre} alt="Louvre"></img><h3>Louvre Museum, Paris, France</h3></div>
            <div className="text">
            <h1>Languages</h1>
            <h2 className="text">24 official languages. The most widely used are English, French and German.</h2>
            <h1>Alternative Currencies</h1>
            <h2 className="text">The Euro is the official currency in 19 of 28 EU member states.
                <br/>
                The most common alternative currencies among member states are the Pound Sterling (UK)* and Krona (Sweden).
                <br/>
                Switzerland is not an EU member, but the Swiss Franc is notable as a major currency of the Schengen Area.</h2>
                </div>
            
            <h2 className="text">*The United Kingdom voted in 2016 to end its membership in the European Union. 
                <br/>
                The process is due to be completed in October 2019.</h2>
        </div>
        </div>
    ) //end return
} //end render
}; //end class EU

export default EU