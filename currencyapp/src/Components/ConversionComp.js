import React from "react"

class ConversionComp extends React.Component {
    constructor(){
        super();
    }
    render(){
    return (
        // <div class= 'dropdown'>
        //     <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Currencies I have
        //         <span class="caret"></span></button>
        //     <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
        //         <li><a role="menuitem" tabindex="-1" href="#">US Dollar</a></li>
        //         <li class="divider"></li>
        //         <li><a role="menuitem" tabindex="-1" href="#">Pound</a></li>
        //         <li class="divider"></li>
        //         <li><a role="menuitem" tabindex="-1" href="#">Euro</a></li>
        //         <li class="divider"></li>
        //         <li><a role="menuitem" tabindex="-1" href="#">Rupee</a></li>
        //         <li class="divider"></li>
        //         <li><a role="menuitem" tabindex="-1" href="#">Yuan</a></li>
                
        //     </ul>
            
            
        // </div>
        <div>
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