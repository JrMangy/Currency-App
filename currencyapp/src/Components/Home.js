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
var ref = database.ref('currency');
var valueUS = {
    name: 'USD',
    value: 834
}
ref.push(valueUS);


class Home extends React.Component {


    constructor() {
        super();
        this.state = {
            text: "I'm the G.O.A.T.",
            size: ''
        }
    }

    componentDidMount() {
        const textRef = database.ref("text/");
        textRef.on("value", snapshot => {
            this.setState({
                text: snapshot.val()
            })
        });
    }
    writeData = e => {
        e.preventDefault();
        const textValue = e.target.elements.inputText.value;
        database.ref("text/").set(textValue, function (error) {
            error ? alert("error") : console.log("it works")
        })
    }
    render() {
        return (
            <div className="Background">
                <div className="App-header">

                    <form>
                        <label >
                            <input className="radio-inline1" type="radio" value = "USD" name="optradio" checked/>USD $
                        </label>
                        <label className="radio-inline2">
                            <input type="radio" value = "Euro" name="optradio"/>Euro &euro;   
                        </label>
                        <label className="radio-inline3">
                            <input type="radio" value = "Pound" name="optradio"/>Pound &#xa3;
                        </label>
                        <label className="radio-inline4">
                            <input type="radio" value = "Rupee" name="optradio" />Rupee &#x20A8;
                        </label>
                        <label className="radio-inline5">
                            <input type="radio" value = "Yuan"name="optradio" />Yuan &#x5143;
                        </label>
                    </form>
                    <form>
                        <label for="exampleInputEmail1">Enter currency amount: </label>
                        <input type="number" className="currencyInput" placeholder="Enter amount" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <form>
                        <label className="radio-inline6">
                            <input type="radio" name="optradio2" checked />Option 1
                        </label>
                        <label className="radio-inline6">
                            <input type="radio" name="optradio2" />Option 2
                        </label>
                        <label className="radio-inline6">
                            <input type="radio" name="optradio2" />Option 3
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home