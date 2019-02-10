import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import CallerView from './userpage/CallerView';
import LoginPage from './loginPage/LoginPage';
import FormView from './userpage/FormView';

const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/caller' component={CallerView}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/form' component={FormView}/>
        </Switch>
    </main>
)

export default RouteHandler;