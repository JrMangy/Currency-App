import React from 'react'
import firebase from 'firebase';

const Home = () => {

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
    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                text: "I'm the G.O.A.T."
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
            return {

            }
        }
    }
}

export default Home