import React from 'react';
import { Grid } from '@material-ui/core';
import './LoginPage.css'

class LoginPage extends React.Component{
    render(){
        return(
                <div className="login-select">
                    <div className="caller-select">
                        <div className="inner-call"><img class="john" src="https://i.imgur.com/2UN3RmG.jpg"></img><h2 className="c-btn">John <br/>Caller</h2></div>
                    </div>
                    <div className="callee-select">
                        <div className="inner-call"><img class="mary" src="https://i.imgur.com/mjffNQA.jpg"></img><h2 className="c2-btn">Mary <br/>Call-ee</h2></div>
                    </div>
            </div>
            
        )
    }
}

export default LoginPage;