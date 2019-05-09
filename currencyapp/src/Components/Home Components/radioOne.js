import React from 'react';
import database from '../firebase.js'
class RadioOne extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: 9,
            dollar: 1,
            euro: 1.12343891,
            pound: 1.301573211,
            yuan: 0.146489882,
            rupee: 0.014234579,
            dollarN: 'dollars',
            euroN: 'euros',
            poundN: 'pounds',
            yuanN: 'yuan',
            rupeeN: 'rupees'
        }
    }
    handleClick() {
        if (document.getElementById('clickedDollar').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.dollar
            });
            database.ref('UserCurrencyValue/').set({
                value: this.state.dollarN
            });
        } else if (document.getElementById('clickedEuro').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.euro
            });
            database.ref('UserCurrencyValue').set({
                value: this.state.euroN
            });
        } else if (document.getElementById('clickedPound').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.pound
            });
            database.ref('UserCurrencyValue').set({
                value: this.state.poundN
            });
        } else if (document.getElementById('clickedYuan').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.yuan
            });
            database.ref('UserCurrencyValue').set({
                value: this.state.yuanN
            });
        } else if (document.getElementById('clickedRupee').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.rupee
            });
            database.ref('UserCurrencyValue').set({
                value: this.state.rupeeN
            });
        }
    }
    render() {
        return (
            <div>
                <p>Which currency would you like to convert from?</p>
                <input className="form-radio" type="radio" value='1' name="optradio" id='clickedDollar' onClick={this.handleClick} />
                <label>USD $</label>
                <input className="form-radio" type="radio" value="Euro" name="optradio" id='clickedEuro' onClick={this.handleClick} />
                <label>Euro &euro;</label>
                <input className="form-radio" type="radio" value="Pound" name="optradio" id='clickedPound' onClick={this.handleClick} />
                <label>Pound &#xa3;</label>
                <input className="form-radio" type="radio" value="Rupee" name="optradio" id='clickedRupee' onClick={this.handleClick} />
                <label>Rupee &#x20A8;</label>
                <input className="form-radio" type="radio" value="Yuan" name="optradio" id='clickedYuan' onClick={this.handleClick} />
                <label>Yuan &#x5143;</label>
            </div>
        )
    }
}
export default RadioOne