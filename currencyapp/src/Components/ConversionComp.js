import React from "react";
import database from './firebase'
import '../CSS/Home.css'
import { withRouter } from 'react-router-dom'
import BackLink from './BackLink'

class ConversionComp extends React.Component {
    constructor(props) {
        super(props);
        this.clickSubmit = this.clickSubmit.bind(this);
        this.state = {
            output: 0,
            userValue: 0,
            inName: '',
            outName: ''
        }
    }
    componentDidMount() {
        const inName = database.ref('UserCurrencyValue/value/');
        inName.on('value', snap => {
            this.setState({ inName: snap.val() })
        });
        const outName = database.ref('OutputCurrencyValue/value/');
        outName.on('value', snap => {
            this.setState({ outName: snap.val() })
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
    clickSubmit() {
        console.log(this.state.outName);
        if (this.state.outName === 'dollars') {
            this.props.history.push('/US')
        } else if (this.state.outName === 'euros') {
            this.props.history.push('/EU')
        } else if (this.state.outName === 'pounds') {
            this.props.history.push('/UK')
        } else if (this.state.outName === 'rupees') {
            this.props.history.push('/India')
        } else if (this.state.outName === 'yuan') {
            this.props.history.push('/China')
        }
    }
    render() {
        return (
            <div className='background'>
                <BackLink />
                <div className='App-header'>
                    <p>You have converted {this.state.userValue} {this.state.inName} to {this.state.output} {this.state.outName}. Click here to find out more about where this currency is mostly used!!!</p>
                    <button className='submitButton' onClick={this.clickSubmit}></button>
                    <p></p>
                </div>
            </div>
        )
    }
}
export default withRouter(ConversionComp)