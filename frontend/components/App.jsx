
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div className="App">
        <header>
            <Route path='/' component={GreetingContainer} />
        </header>
        <Switch>
            <AuthRoute exact path='/' component={SplashContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <Route path='/' component={Footer} />
    </div>
);

export default App;