
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import MainNavBar from './main_navbar/main_navbar_index';
import FriendsNavbar from './friends_navbar/friends_navbar';
import ExerciseMapContainer from './exercise/exercise_map_container';
import ExerciseIndexContainer from './exercise/exercise_index_container';
import MyExerciseIndexContainer from './exercise/my_exercise_index_container';
import SearchContainer from './search/search_container';
import FriendsIndexContainer from './friends_navbar/friends_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div className="App">
    <div>
        <header>
            <Route path='/' component={GreetingContainer} />
        </header>
        
        <AuthRoute exact path='/' component={SplashContainer} />
        <ProtectedRoute path='/friends' component={FriendsNavbar} />
        <ProtectedRoute path='/friends/find_friends' component={SearchContainer} />
        <ProtectedRoute path='/friends/my_friends' component={FriendsIndexContainer} />
        
        <ProtectedRoute path='/my_home' component={MainNavBar} />
        <Switch>
            <ProtectedRoute path='/exercises/create' component={ExerciseMapContainer} />
            <ProtectedRoute path='/my_home/my_exercises' component={MyExerciseIndexContainer} />
            <Route path='/all_exercises/:loc' component={ExerciseIndexContainer} />
            <Route path='/all_exercises' component={ExerciseIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        </div>
        <Route path='/' component={Footer} />
    </div>
);

export default App;