import React from 'react'
import firebase from 'firebase'
import '../CSS/China.css'
import NavLink from '../Components/Navigation';

class China extends React.Component {

 
    
render() {
    return(
        <div>
            <NavLink/>
            <h1>China</h1>
            {/* slideshow */}
            <h2>Summary</h2>
            <p>Body of Summary, ie. languages spoken and alternative currency if applicable</p>
            <br/>
            <button>Click here for timestamp in current country's timezone!</button>
        </div>
    ) //end return
} //end render
}; //end class China

export default China