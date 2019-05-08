import React from 'react';
import Proptypes from 'prop-types'
import '../../CSS/Home.css'
import database from '../firebase.js'
import {Link} from 'react-router-dom'

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inputValue: 0,
            userValue: 0,
            toDollar: 0,
            fromDollar: 0
        }
    }
    componentDidMount() {
        const userValue = database.ref('UserInput/value/');
        userValue.on('value', snap => {
            this.setState({ userValue: snap.val() });
        })
        const toDollar = database.ref('ToDollarValue/value/');
        toDollar.on('value', snap => {
            this.setState({ toDollar: snap.val() });
        })
        const fromDollar = database.ref('FromDollarValue/value/');
        fromDollar.on('value', snap => {
            this.setState({ fromDollar: snap.val() });
        })
    }
    handleSubmit(e) {
        let val = e.target.elements.inputCurr.value;
        database.ref('UserValue/value/').set(parseFloat(val));
        var output = ((parseFloat(val) * parseFloat(this.state.toDollar) * parseFloat(this.state.fromDollar)));
        database.ref('OutputValue/value/').set(parseFloat(output).toFixed(2))
    }
    render() {
        return (
            <div>
                <form className="Submission" onSubmit={this.handleSubmit}>
                    <label htmlFor="currencyInput">Enter currency amount: </label>
                    <input type="number" placeholder="Enter amount" name='inputCurr' />
                    <button type="submit" className="submitButton"><Link to='../ConversionComp'>Submit</Link></button>
                </form>
            </div>
        )
    }
}

export default InputBox