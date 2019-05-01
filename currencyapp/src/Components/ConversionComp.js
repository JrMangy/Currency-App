import React from "react";
import NavLink from "./Navigation";
import '../CSS/ConversionComp.css';
//import 'bootstrap/dist/css/bootstrap.css';

class ConversionComp extends React.Component {
    
    render() {
    return (
        
        <div className ='Con-page'>
            <NavLink/>
           
           <div className="List"> 
           <ul className=' '>
                <li><a className="active" href="#Create Page">Choose your money's worth:</a></li>
                <li><a href="#Manage Pages">USD $</a></li>
                <li><a href="#Create Ads">Euro &#x20AC;</a></li>
                <li><a href="#Manage Ads">Pound &#xa3;</a></li>
                <li><a href="#Activity Logs">Rupee &#x20A8;</a></li>
                <li><a href="#Setting">Yuan &#x5143;</a></li>

            </ul>
            </div>

                        
        
        </div>
    )}
}


export default ConversionComp