import React from 'react'
import firebase from 'firebase'
import '../CSS/Home.css'


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
            displayMenu: false
        }
        this.showDropdownMenu1 = this.showDropdownMenu1.bind(this);
        this.showDropdownMenu2 = this.showDropdownMenu2.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }



    showDropdownMenu1(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    showDropdownMenu2(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

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
                <div className="Header">
                    <div className="dropdown" style={{ background: "red", width: "200px" }} >
                        <div className="button" onClick={this.showDropdownMenu1}>Pick a starting currency: </div>

                        {this.state.displayMenu ? (
                            <ul>
                                <li><a href="#Manage Pages">USD $</a></li>
                                <li><a href="#Create Ads">Euro &#x20AC;</a></li>
                                <li><a href="#Manage Ads">Pound &#xa3;</a></li>
                                <li><a href="#Activity Logs">Rupee &#x20A8;</a></li>
                                <li><a href="#Setting">Yuan &#x5143;</a></li>
                            </ul>
                        ) :
                            (
                                null
                            )
                        }
                    </div>
                    <div classname="textBox">
                    
                    </div>
                    <div className="dropdown" >
                        <div className="button" onClick={this.showDropdownMenu2}>Pick currency to convert to: </div>

                        {this.state.displayMenu ? (
                            <ul>
                                <li><a href="#Manage Pages">USD $</a></li>
                                <li><a href="#Create Ads">Euro &#x20AC;</a></li>
                                <li><a href="#Manage Ads">Pound &#xa3;</a></li>
                                <li><a href="#Activity Logs">Rupee &#x20A8;</a></li>
                                <li><a href="#Setting">Yuan &#x5143;</a></li>
                            </ul>
                        ) :
                            (
                                null
                            )
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home