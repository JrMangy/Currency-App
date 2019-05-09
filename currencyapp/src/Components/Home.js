import React from 'react'
import '../CSS/Home.css'
import InputBox from './Home Components/inputBox.js'
import RadioOne from './Home Components/radioOne.js'
import RadioTwo from './Home Components/radioTwo.js'

class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="background">
                <div className="App-header">
                    <RadioOne />
                    <br />
                    <br />
                    <RadioTwo />
                    <br />
                    <br />
                    <InputBox />
                </div>
            </div>
        );
    };
}

export default Home