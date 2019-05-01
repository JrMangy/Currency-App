import React from 'react'
import firebase from 'firebase'
import '../CSS/Home.css'
import 'bootstrap/dist/css/bootstrap.css'


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
                        <label class="radio-inline">
                            <input type="radio" name="optradio" checked />USD $
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Euro &#2080;
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Pound &#x
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Option 2
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Option 3
                        </label>
                    </form>
                    <form>
                        <label for="exampleInputEmail1">Enter your amount: </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <form>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" checked />Option 1
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Option 2
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Option 3
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home