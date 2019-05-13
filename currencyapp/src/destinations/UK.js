import React from 'react'
//import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import Museum from "../Components/images/uk-british-museum-london.JPG";
import Opera from "../Components/images/uk-grand-opera-house-belfast.JPG";
import LochNess from "../Components/images/uk-loch-ness-inverness-scotland.jpg";
import bkgd from "../Components/images/travel.jpg";

var now = new Date().toLocaleString("en-US");
now = new Date(now);

var ukTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
ukTime = new Date(ukTime);

class UK extends React.Component {

render() {
    return(
        <div style={{backgroundImage: "url(" + bkgd + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <NavLink to="/"/>
            <div className="infoBox">
            <h1>United Kingdom</h1>
            <div className="clock">
                <p>Your current time is: {now.toLocaleString()}</p>
                <p>The current time in the United Kingdom is: {ukTime.toLocaleString()}</p>
            </div>
            <br/>
            {/* <iframe title="google" id="gmap_canvas" src={`https://maps.google.com/maps?q=Britain&t=&z=5&ie=UTF8&iwloc=&output=embed`}></iframe> */}
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1hYhB6ywr28IJyFP_z8iqTDXSYUACMZvg" width="640" height="480"></iframe>
            <br/>
            <h2 className="text">In the map above, you will find various airports, MoneyGram locations, ATMs, banks, and currency exchange locations near the destinations listed below.</h2>
            <br/>
            <div className="pic1"><img className="slide" src={Museum} alt=""></img><h3>British Museum, London, England</h3></div>
            <div className="pic2"><img className="slide" src={Opera} alt=""></img><h3>Grand Opera House, Belfast, Northern Ireland</h3></div>
            <div className="pic3"><img className="slide" src={LochNess} alt=""></img><h3>Loch Ness, Scotland</h3></div>
            <h1>Languages</h1>
            <h2 className="text">English is the official and national language, with six recognized regional and minority languages including Welsh and Irish.</h2>
            <h1>Alternative Currencies</h1>
            <h2 className="text">Though the UK has no widely used alternative currencies, travelers should be aware that banknotes issued in Scotland and Northern Ireland differ from those issued in England and Wales. 
                <br/> They are legal to use in any British country, but sellers are not legally obligated to accept them.
                <br/> Northern Ireland is not to be confused with the Republic of Ireland, as the latter is an independent state and member of the Eurozone.</h2>               
            {/* <p>Western European Time (UTC)</p>
            <p>British Summer Time / Western European Summer Time (UTC+1)</p> */}
        </div>
        </div>
    ) //end return
} //end render
}; //end class UK

export default UK