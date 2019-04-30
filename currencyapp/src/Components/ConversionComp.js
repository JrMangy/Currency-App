import React from "react"

function ConversionComp() {
    return (
        <div class= 'dropdown'>
            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Currencies I have
                <span class="caret"></span></button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                <li><a role="menuitem" tabindex="-1" href="#">US Dollar</a></li>
                <li class="divider"></li>
                <li><a role="menuitem" tabindex="-1" href="#">Pound</a></li>
                <li class="divider"></li>
                <li><a role="menuitem" tabindex="-1" href="#">Euro</a></li>
                <li class="divider"></li>
                <li><a role="menuitem" tabindex="-1" href="#">Rupee</a></li>
                <li class="divider"></li>
                <li><a role="menuitem" tabindex="-1" href="#">Yuan</a></li>
                
            </ul>
            
            
        </div>
    )
}

export default ConversionComp