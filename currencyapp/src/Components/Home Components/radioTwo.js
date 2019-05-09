import React from 'react';
import database from '../firebase'

class RadioTwo extends React.Component {
    constructor() {
        super();
        this.handleOutput = this.handleOutput.bind(this);
        this.state = {
            value: 0,
            dollar: 1,
            euro: 0.890124056,
            pound: 0.768301,
            yuan: 6.826410031,
            rupee: 70.251463
        }
    }
    handleOutput() {
        if (document.getElementById('clickedDollar2').checked) {
            database.ref('FromDollarValue').set({
                value: this.state.dollar
            });
        } else if (document.getElementById('clickedEuro2').checked) {
            database.ref('FromDollarValue').set({
                value: this.state.euro
            })
        } else if (document.getElementById('clickedPound2').checked) {
            database.ref('FromDollarValue').set({
                value: this.state.pound
            })
        } else if (document.getElementById('clickedYuan2').checked) {
            database.ref('FromDollarValue').set({
                value: this.state.yuan
            })
        } else if (document.getElementById('clickedRupee2').checked) {
            database.ref('FromDollarValue').set({
                value: this.state.rupee
            })
        }
    }
    render() {
        return (
            <div>
                <input className="form-radio" type="radio" name="optradio2" id='clickedDollar2' onClick={this.handleOutput} />
                <label>USD $</label>
                <input className="form-radio" type="radio" name="optradio2" id='clickedEuro2' onClick={this.handleOutput} />
                <label>Euro &euro;</label>
                <input className="form-radio" type="radio" name="optradio2" id='clickedPound2' onClick={this.handleOutput} />
                <label>Pound &#xa3;</label>
                <input className="form-radio" type="radio" name="optradio2" id='clickedRupee2' onClick={this.handleOutput} />
                <label>Rupee &#x20A8;</label>
                <input className="form-radio" type="radio" name="optradio2" id='clickedYuan2' onClick={this.handleOutput} />
                <label>Yuan &#x5143;</label>
            </div>
        )
    }
}

export default RadioTwo