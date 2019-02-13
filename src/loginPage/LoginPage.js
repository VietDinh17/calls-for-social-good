import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom'

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div className="login-select">
                <   Link to="/caller" className="login-block">

                    <div className="caller-select">
                        <div className="inner-call"><img class="john" src="https://i.imgur.com/2UN3RmG.jpg" alt=""/><h2 className="c-btn">John <br/>Caller</h2></div>
                    </div>
                    </Link>
                    <Link to='/form' className="login-block">
                    <div className="callee-select">
                        <div className="inner-call"><img class="mary" src="https://i.imgur.com/mjffNQA.jpg" alt=""/><h2 className="c2-btn">Mary <br/>Call-ee</h2></div>
                    </div>
                    </Link>
            </div>
  
            </div>
            
        )
    }
}

export default LoginPage;