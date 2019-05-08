import React from 'react'
import '../../CSS/Home.css'

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        let val = e.target.elements.inputCurr.value;
        database.ref('UserValue/').set(
            parseFloat(val)
            , function (error) {
                if (error) {
                    console.log('There was an error');
                } else {
                    console.log('Success!')
                }
            });
        console.log(val);
    }

    render() {
        return (
            <div>
                <label htmlFor="currencyInput">Enter currency amount: </label>
                <input type="number" value={this.props.value} placeholder="Enter amount" name='inputCurr' />
                <button type="submit" className="submitButton" >Submit</button>
            </div>
        )
    }
}
export default SubmitButton