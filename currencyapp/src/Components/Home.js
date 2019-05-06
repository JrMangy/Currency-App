import React from 'react'
import firebase from 'firebase'
import '../CSS/Home.css'
//import 'bootstrap/dist/css/bootstrap.css'


var valueInput;
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
// console.log(firebase);
// var ref = database.ref('currency');
// var valueUS = {
//     name: 'USD',
//     value: 834
// }  
// var inputCurrency = firebase.database().ref('')


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "I'm the G.O.A.T.",
            size: ''
        }
    }
    

    render() {
        return (
            <div className="background">
                <div className="App-header">
                    <p className="oblique">Which currency would you like to switch from?</p>
                    <form>
                        <label >
                            <input className="form-radio" type="radio" value="USD" name="optradio" />
                            <label htmlFor="USD">USD $</label>
                            <input className="form-radio" type="radio" value="Euro" name="optradio" />
                            <label htmlFor="USD">Euro &euro;</label>
                            <input className="form-radio" type="radio" value="Pound" name="optradio" />
                            <label htmlFor="USD">Pound &#xa3;</label>
                            <input className="form-radio" type="radio" value="Rupee" name="optradio" />
                            <label htmlFor="USD">Rupee &#x20A8;</label>
                            <input className="form-radio" type="radio" value="Yuan" name="optradio" />
                            <label htmlFor="USD">Yuan &#x5143;</label>
                        </label>
                    </form>
                    <br />
                    <br />
                    <form>
                        <label htmlFor="currencyInput">Enter currency amount: </label>
                        <input type="number" className="currencyInput" placeholder="Enter amount" id="inputBox" />
                        <button type="submit" className="submitButton">Submit</button>
                    </form>
                    <br />
                    <br />
                    <form>
                        <p>Which currency would you like to switch to?</p>
                        <label >
                            <input className="form-radio" type="radio" value="USD1" name="optradio" />
                            <label htmlFor="USD">USD $</label>
                            <input className="form-radio" type="radio" value="Euro1" name="optradio" />
                            <label htmlFor="USD">Euro &euro;</label>
                            <input className="form-radio" type="radio" value="Pound1" name="optradio" />
                            <label htmlFor="USD">Pound &#xa3;</label>
                            <input className="form-radio" type="radio" value="Rupee1" name="optradio" />
                            <label htmlFor="USD">Rupee &#x20A8;</label>
                            <input className="form-radio" type="radio" value="Yuan1" name="optradio" />
                            <label htmlFor="USD">Yuan &#x5143;</label>
                        </label>
                    </form>
                    <pre id='object'></pre>
                    <ul id='list'>
                    
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home