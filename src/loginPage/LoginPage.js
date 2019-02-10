import React from 'react';
import { Grid } from '@material-ui/core';
import './LoginPage.css'

class LoginPage extends React.Component{
    render(){
        return(
                <div className="login-select">
                    <div className="caller-select">
                        <div className="inner-call"><h2 className="c-btn">John <br/>Caller</h2></div>
                    </div>
                    <div className="callee-select">
                        <div className="inner-call"><h2 className="c2-btn">Mary <br/>Call-ee</h2></div>
                    </div>
            </div>
            
        )
    }
}

export default LoginPage;