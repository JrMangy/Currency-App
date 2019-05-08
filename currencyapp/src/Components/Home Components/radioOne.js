import React from 'react';
import database from '../firebase'

class RadioOne extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: 9,
            dollar: 1,
            euro: 1.12,
            pound: 1.21,
            yuan: 0.15,
            rupee: 0.014


            
           
        }
    }
    handleClick() {
        if (document.getElementById('clickedDollar').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.dollar
            })
        } else if (document.getElementById('clickedEuro').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.euro
            })
        } else if (document.getElementById('clickedPound').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.pound
            })
        } else if (document.getElementById('clickedYuan').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.yuan
            })
        } else if (document.getElementById('clickedRupee').checked) {
            database.ref('ToDollarValue').set({
                value: this.state.rupee
            })
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