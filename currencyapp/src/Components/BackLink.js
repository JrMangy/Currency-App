import React from 'react'
import {Link} from 'react-router-dom'

class BackLink extends React.Component{

    render(){
        return(
            <div>
                <Link to="/">Back to Home Page</Link>
            </div>
        )
    }
}

export default BackLink