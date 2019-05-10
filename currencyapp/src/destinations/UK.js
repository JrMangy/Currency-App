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
            <div className="pic1"><img className="slide" src={Museum} alt=""></img><h3>British Museum, London, England</h3></div>
            <div className="pic2"><img className="slide" src={Opera} alt=""></img><h3>Grand Opera House, Belfast, Northern Ireland</h3></div>
            <div className="pic3"><img className="slide" src={LochNess} alt=""></img><h3>Loch Ness, Scotland</h3></div>
            <h3>Languages</h3>
            <p>English is the official and national language, with six recognized regional and minority languages including Welsh and Irish.</p>
            <h3>Alternative Currencies</h3>
            <p>Though the UK has no widely used alternative currencies, travelers should be aware that banknotes issued in Scotland and Northern Ireland differ from those issued in England and Wales. 
                <br/> They are legal to use in any British country, but sellers are not legally obligated to accept them.
                <br/> Northern Ireland is not to be confused with the Republic of Ireland, as the latter is an independent state and member of the Eurozone.</p>               
            {/* <p>Western European Time (UTC)</p>
            <p>British Summer Time / Western European Summer Time (UTC+1)</p> */}
        </div>
        </div>
    ) //end return
} //end render
}; //end class UK

export default UK