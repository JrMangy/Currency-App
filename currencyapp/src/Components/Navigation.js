import React from 'react';
import { NavLink } from 'react-router-dom';
import leftArrow from './leftArrow.jpg';

const Navigation = () => {
    

    return(
        <div>
            <NavLink to="/" class="navLink"> 
            <img src={leftArrow} alt="arrow" className="arrowImage"  ></img>
            Back to Home 
            </NavLink>
            <NavLink to="/ConversionComp"><h1 style={{textAlign:'center', fontSize:'60'}}>Conversions</h1></NavLink>
            
        </div>
    )
};

export default Navigation;