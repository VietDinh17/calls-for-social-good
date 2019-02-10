import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import CallerView from './userpage/CallerView';

const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/' component={CallerView}/>
        </Switch>
    </main>
)

export default RouteHandler;