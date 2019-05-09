import React from 'react'
import '../CSS/Home.css'
import InputBox from './Home Components/inputBox.js'
import RadioOne from './Home Components/radioOne.js'
import RadioTwo from './Home Components/radioTwo.js'
import database from './firebase'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            userValue: 0,
            toDollar: 0,
            fromDollar: 0,
            output: 0,
        }
    }

    componentDidMount(){
        const userValue = database.ref('UserInput/value/');
        userValue.on('value', snap => {
            this.setState({ userValue: snap.val() });
        });
 
        const toDollar = database.ref('ToDollarValue/value/');
        toDollar.on('value', snap => {
            this.setState({ toDollar: snap.val() });
        });
        const fromDollar = database.ref('FromDollarValue/value/');
        fromDollar.on('value', snap => {
            this.setState({ fromDollar: snap.val() });
        });
        const output = database.ref('OutputValue/value/');
        output.on('value', snap => {
            this.setState({output: snap.val()})
        })
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