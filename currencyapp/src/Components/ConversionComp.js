import React from "react";
import NavLink from "./Navigation";

class ConversionComp extends React.Component {
    constructor() {
        super();
    }
    render() {
    return (
        <div>
            <NavLink/>
           <ul>
                            <li><a className="active" href="#Create Page">Pick a starting currency:</a></li>
                            <li><a href="#Manage Pages">USD $</a></li>
                            <li><a href="#Create Ads">Euro &#x20AC;</a></li>
                            <li><a href="#Manage Ads">Pound &#xa3;</a></li>
                            <li><a href="#Activity Logs">Rupee &#x20A8;</a></li>
                            <li><a href="#Setting">Yuan &#x5143;</a></li>
                        </ul> 
        </div>
    )}
}


export default ConversionComp