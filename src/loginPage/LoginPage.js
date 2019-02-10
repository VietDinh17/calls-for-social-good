import React from 'react';
import { Grid } from '@material-ui/core';
import './LoginPage.css';
import {Link} from 'react-router-dom'

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <Link to="/caller">
                <div className="login-select">
                    <div className="caller-select">
                        <div className="inner-call"><img class="john" src="https://i.imgur.com/2UN3RmG.jpg"></img><h2 className="c-btn">John <br/>Caller</h2></div>
                    </div>
                    <div className="callee-select">
                        <div className="inner-call"><img class="mary" src="https://i.imgur.com/mjffNQA.jpg"></img><h2 className="c2-btn">Mary <br/>Call-ee</h2></div>
                    </div>
            </div>
            </Link>
            </div>
            
        )
    }
}

export default LoginPage;