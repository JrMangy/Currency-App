import React from 'react';
import '../../CSS/Home.css'
import database from '../firebase.js'
import { withRouter } from 'react-router-dom'
import OutlinedButtons from '../Home Components/Home Css/Button.js'


class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            userValue: 0,
            toDollar: 0,
            fromDollar: 0,
            output: 0,
        }
    }
    componentDidMount() {
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
            this.setState({ output: snap.val() })
        });
        const userValue = database.ref('UserValue/value/');
        userValue.on('value', snap => {
            console.log(snap.val());
            this.setState({ userValue: snap.val() });
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let val = e.target.elements.inputCurr.value;
        database.ref('UserValue/value/').set(parseFloat(val));
        var output = ((parseFloat(val) * parseFloat(this.state.toDollar) * parseFloat(this.state.fromDollar)));
        database.ref('OutputValue/value/').set(parseFloat(output).toFixed(2));
        // this.props.history.push('./ConversionComp');       
        this.setState({
            outputText: ``
        });
        this.props.history.push('./ConversionComp');
    }
    render() {

        return (
            <div>
                <form className="Submission" onSubmit={this.handleSubmit}>
                    <label htmlFor="currencyInput">Enter currency amount: </label>
                    <input type="number" placeholder="Enter amount" name='inputCurr' />
                    {/* <button type="submit" className="submitButton">Submit</button> */}
                    <OutlinedButtons />
                </form>
            </div>
        )
    }
}

export default withRouter(InputBox)