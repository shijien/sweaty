import React from 'react';
import {NavLink} from 'react-router-dom';

const MainNavBar = () => {
    return (
        
        <div className="main-navbar">
        
            <NavLink to="/my_home/activity_feed" activeClassName="active">
                <div className="main-navbar-box">
                    ACTIVITY FEED 
                </div>
            </NavLink>
            <NavLink to="/my_home/my_exercises" activeClassName="active">
                <div className="main-navbar-box">
                    MY EXERCISES 
                </div>
            </NavLink>
            <NavLink to="/my_home/monitor" activeClassName="active">
                <div className="main-navbar-box">
                    24/7
                </div>
            </NavLink>
        </div>
    );
};

export default MainNavBar;
