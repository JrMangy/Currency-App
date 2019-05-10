
import React from "react";
import NavLink from "./Navigation";
import '../CSS/ConversionComp.css';



class ConversionComp extends React.Component {
    
    render() {
    return (
        
        
        <div className="Body">
            <NavLink /> 
           
           <div className="Section">
           <div className="Title">
           <h1>Currency Conversion</h1>
           </div>
           <div className="Container"> 
           <ul className='Mylist'>
                
                <li><a  href="#Create Page">Choose your money's worth:</a></li>
                
                <li><a href="#dollars">USD $</a></li>
                <li><a href="#Euro">Euro &#x20AC;</a></li>
                <li><a href="#Pounds">Pound &#xa3;</a></li>
                <li><a href="#Rupee">Rupee &#x20A8;</a></li>
                <li><a href="#Setting">Yuan &#x5143;</a></li>

            </ul> 
            </div>
            </div>
        </div>
    )}
}


export default ConversionComp