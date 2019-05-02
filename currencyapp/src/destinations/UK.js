import React from 'react'
import firebase from 'firebase'
import '../CSS/Destination.css'
import NavLink from '../Components/Navigation';
import Museum from "../Components/images/uk-british-museum-london.JPG";
import Opera from "../Components/images/uk-grand-opera-house-belfast.JPG";
import LochNess from "../Components/images/uk-loch-ness-inverness-scotland.jpg";

class UK extends React.Component {

 
    
render() {
    return(
        <div>
            <NavLink to="/"/>
            <h1>United Kingdom</h1>
            <img className="slide" src={Museum} alt=""></img>
            <img className="slide" src={Opera} alt=""></img>
            <img className="slide" src={LochNess} alt=""></img>
            {/* slideshow */}
            <h3>Languages</h3>
            <p>English is the official and national language, with six recognized regional and minority languages including Welsh and Irish.</p>
            <h3>Alternative Currencies</h3>
            <p>Though the UK has no widely used alternative currencies, travelers should be aware that banknotes issued in Scotland and Northern Ireland differ from those issued in England and Wales. They are legal to use in any British country, but sellers are not legally obligated to accept them.
Northern Ireland is not to be confused with the Republic of Ireland, as the latter is an independent state and member of the Eurozone.</p>
            <h3>Popular Tourist Destinations</h3>
                <ul className="destination">
                    <li>British Museum, London, England</li>
                    <li>Grand Opera House, Belfast, Northern Ireland</li>
                    <li>Loch Ness, Scotland</li>
                </ul>                
            <p>Western European Time (UTC)
British Summer Time / Western European Summer Time (UTC+1)</p>
            <br/>
            <button>Click here for timestamp in current country's timezone!</button>
            <button>Click here for timestamp in current country's timezone!</button>
        </div>
    ) //end return
} //end render
}; //end class UK

export default UK