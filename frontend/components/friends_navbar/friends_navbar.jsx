import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const FriendsNavbar = () => {
    return (
        <div className="friends-nav-bar-container">
            <div className="friends-nav-bar-cap">
                My Friends
            </div>
            <div className="friends-nav-bar-body">
                <NavLink exact={true} to="/friends/my_friends" activeClassName="active">
                    <div className="friends-navbar-box">My Friends</div>
                </NavLink>
                <NavLink to="/friends/find_friends" activeClassName="active">
                    <div className="friends-navbar-box">Find Friends</div>
                </NavLink>
                <NavLink to="/friends/invite_friends" activeClassName="active">
                    <div className="friends-navbar-box">Invite Friends</div>
                </NavLink>
            </div>
        </div>
    );
};
export default FriendsNavbar;
