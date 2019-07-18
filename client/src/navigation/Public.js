import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../components/Login';//TODO

const Public = () => {
    return (
        <Switch>
            <Route component = { Login } path = { '/login' } />
            <Redirect to = { '/login' } />
        </Switch>
    );
}

export { Public };