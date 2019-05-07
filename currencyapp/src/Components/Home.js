import React from 'react'
import firebase from 'firebase'
import '../CSS/Home.css'
import Proptypes from 'prop-types'
//import 'bootstrap/dist/css/bootstrap.css'

var config = {
    apiKey: "AIzaSyAOHhMoKsyT0tZ8NNpTpevUsS6g7D5JFXQ",
    authDomain: "currensyapp-9296e.firebaseapp.com",
    databaseURL: "https://currensyapp-9296e.firebaseio.com",
    projectId: "currensyapp-9296e",
    storageBucket: "currensyapp-9296e.appspot.com",
    messagingSenderId: "290139838887"
};
firebase.initializeApp(config);
const database = firebase.database();

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conversion: {},
            convertedUSD: {
                usd: 0,
                rupee: 0,
                euro: 0,
                yuan: 0,
            },
            converted: {
                usd: 0,
                rupee: 0,
                euro: 0,
                yuan: 0
            },
            value: 0
        }
    };
    componentDidMount() {
        const conversion = database.ref('object/');
        conversion.once('value', snapshot => {
            this.setState({ conversion: snapshot.val() });
        })
    };
    changingInput = e => {
        e.preventDefault();
        var input = document.getElementById('inputBox');
        var dollar = document.getElementById('clickedDollar');
        var euro = document.getElementById('clickedEuro');
        var pound = document.getElementById('clickedPound');
        var yuan = document.getElementById('clickedYuan');
        var rupee = document.getElementById('clickedRupee');
        if (this.state.conversion.Yuan != null) {
            if (yuan.checked) {
                input = (input * this.state.conversion.Yuan);
                this.setState({
                    converted: {
                        yuan: (input / this.state.conversion.Yuan)
                    }
                })
                console.log(input);
            } else if (euro.checked === true) {
                input = (input * this.state.conversion.Euro);
                this.setState({
                    converted: {
                        euro: (input / this.state.conversion.Euro)
                    }
                })
                console.log(input);
            } else if (pound.checked === true) {
                input = (input * this.state.conversion.Pound);
                this.setState({
                    converted: {
                        pound: (input / this.state.conversion.Pound)
                    }
                })
                console.log(input);
            } else if (rupee.checked) {
                input = (input * this.state.conversion.Rupee);
                this.setState({
                    converted: {
                        rupee: (input / this.state.conversion.Rupee)
                    }
                })
                console.log(input);
            } else if (dollar.checked) {
                input = (input * this.state.conversation.Dollar);
                this.setState({
                    converted: {
                        dollar: (input / this.state.conversion.Dollar)
                    }
                })
                console.log(input)
            }
        }
    }
    handleClick(e) {
        console.log('Changes are Happening!')
        this.setState({ value: e.target.vale });
        var input = (this.state.value);
        var input2 = Number(input)

        console.log(input2);
            if (yuan.checked) {
                input = (input * this.state.conversion.Yuan);
                this.setState({
                    converted: {
                        yuan: (input / this.state.conversion.Yuan)
                    }
                })
                console.log(input);
            }
}
    changingOutput = e => {
        console.log(input);
    }
    //         this.setState({
    //   converted: {
    //     rupee: (input / (this.state.conversion.Rupee)),
    //     usd: (input / (this.state.conversion.Dollar)),
    //     yuan: ((this.state.convertedUSD.yuan) / (this.state.conversion.Yuan)),
    //     euro: ((this.state.convertedUSD.euro) / (this.state.conversion.Euro))
    //   }
    // });
    render() {
        return (
            <div className="background">
                <div className="App-header">
                    <p className="oblique">Which currency would you like to switch from?</p>
                    <form id='clicked' onSubmit={this.handleClick.bind(this)} method='POST'>
                        <label >
                            <input className="form-radio" type="radio" value="Dollar" name="optradio" id='clickedDollar' onClick={this.handleClick.bind(this)} />
                            <label htmlFor="USD">USD $</label>
                            <input className="form-radio" type="radio" value="Euro" name="optradio" id='clickedEuro' onClick={this.handleClick.bind(this)} />
                            <label htmlFor="USD">Euro &euro;</label>
                            <input className="form-radio" type="radio" value="Pound" name="optradio" id='clickedPound' onClick={this.handleClick.bind(this)} />
                            <label htmlFor="USD">Pound &#xa3;</label>
                            <input className="form-radio" type="radio" value="Rupee" name="optradio" id='clickedRupee' onClick={this.handleClick.bind(this)} />
                            <label htmlFor="USD">Rupee &#x20A8;</label>
                            <input className="form-radio" type="radio" value="Yuan" name="optradio" id='clickedYuan' onClick={this.handleClick.bind(this)} />
                            <label htmlFor="USD">Yuan &#x5143;</label>
                        </label>
                    </form>
                    <br />
                    <br />
                    <form >
                        <label htmlFor="currencyInput">Enter currency amount: </label>
                        <input type="number" name='inputCurr' placeholder="Enter amount" id='inputCurr' onChange={this.handleClick.bind(this)} />
                        <button type="button" className="submitButton" /*onSubmit={this.changingOutput.bind(this)}*/>Submit</button>
                    </form>
                    <br />
                    <br />
                    <form id='clicked2' method='POST'>
                        <p>Which currency would you like to switch to?</p>
                        <label >
                            <input className="form-radio" type="radio" value="USD1" name="optradio2" id='outputDollar' />
                            <label htmlFor="USD">USD $</label>
                            <input className="form-radio" type="radio" value="Euro1" name="optradio2" id='outputEuro' />
                            <label htmlFor="USD">Euro &euro;</label>
                            <input className="form-radio" type="radio" value="Pound1" name="optradio2" id='outputPound' />
                            <label htmlFor="USD">Pound &#xa3;</label>
                            <input className="form-radio" type="radio" value="Rupee1" name="optradio2" id='outputRupee' />
                            <label htmlFor="USD">Rupee &#x20A8;</label>
                            <input className="form-radio" type="radio" value="Yuan1" name="optradio2" id='outputYuan' />
                            <label htmlFor="USD">Yuan &#x5143;</label>
                        </label>
                    </form>
                </div>
                <p>Converted to USD: {this.state.converted.Dollar}</p>
            </div>
        );
    };
}
export default Home