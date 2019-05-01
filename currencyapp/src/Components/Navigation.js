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
            <NavLink to="/China">China</NavLink>
            <NavLink to="/India">India</NavLink>
            <NavLink to="/UK">UK</NavLink>
            <NavLink to="/US">US</NavLink>
            <NavLink to="/EU">EU</NavLink>
            <NavLink to="/Login">Login</NavLink>
            
        </div>
    )
};

export default Navigation;