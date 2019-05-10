import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Nav.css';
//import iconWhite from './images/iconWhite.png';
import iconClear from './images/iconClear.png';
//import iconSemi from './images/iconSemi.png';

const Navigation = () => {

    return(
        <div className="nav">
            <img src={iconClear} className="appIcon" alt=""/>
            <div className="links">
            <NavLink to="/" className="home">&#10094;  Back to Home  </NavLink>|
            <NavLink to="/ConversionComp" className="comp"></NavLink>
            <NavLink to="/China" className="china">  China  </NavLink>|
            <NavLink to="/India" className="india">  India  </NavLink>|
            <NavLink to="/UK" className="uk">  UK  </NavLink>|
            <NavLink to="/US" className="us">  US  </NavLink>|
            <NavLink to="/EU" className="eu">  EU  </NavLink>
            </div>
        </div>
    )
};

export default Navigation;