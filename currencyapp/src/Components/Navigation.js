import React from 'react';
import { NavLink } from 'react-router-dom';
import leftArrow from './leftArrow.jpg';
import '../CSS/Nav.css';

const Navigation = () => {
    

    return(
        <div className="nav">
            <NavLink to="/" className="home"> 
            <img src={leftArrow} alt="arrow" className="arrowImage"></img>
              Back to Home  |
            </NavLink>
            <NavLink to="/ConversionComp" className="comp"></NavLink>
            <NavLink to="/China" className="china">  China  |</NavLink>
            <NavLink to="/India" className="india">  India  |</NavLink>
            <NavLink to="/UK" className="uk">  UK  |</NavLink>
            <NavLink to="/US" className="us">  US  |</NavLink>
            <NavLink to="/EU" className="eu">  EU  |</NavLink>
            
        </div>
    )
};

export default Navigation;