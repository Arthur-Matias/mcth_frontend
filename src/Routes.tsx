import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Home} />
                <Redirect from="/home" to="/" />

                <Route path="/login" component={Login}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;