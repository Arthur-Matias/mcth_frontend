import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/home" exact component={Home} />
                <Redirect exact from="/" to="/home" />

                <Route path="/login" component={Login}/>

                <Route path="/registro" component={Register}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;