import React from 'react'
import '../CSS/Home.css'
import InputBox from './Home Components/inputBox.js'
import RadioOne from './Home Components/radioOne.js'
import RadioTwo from './Home Components/radioTwo.js'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            userValue: 0,
            toDollar: 0,
            fromDollar: 0,
            output: 0
        }
    }
    render() {
        return (
            <div className="background">
                <div className="App-header">
                    <RadioOne />
                    <br />
                    <br />
                    <p>Which currency would you like to switch to?</p>
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