import React from 'react';
import { NavLink } from 'react-router-dom';
import leftArrow from './leftArrow.jpg';

const Navigation = () => {
    return(
        <div>
            <NavLink to="/" class="navLink"> 
            <img src={leftArrow} alt="arrow" class="arrowImage"></img>
            Back to Home 
            </NavLink>
            <NavLink to="/ConversionComp">Conversions</NavLink>
            
        </div>
    )
};

export default Navigation;