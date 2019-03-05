import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
  if (user) {
    return (
      <div id="nav-container-logged-in">
        <div id="greeting">
          <nav id="nav-id">
            <Link className="sweatyLogo" to="/">
              <img src={window.logoUrl} />
            </Link>
            <div className="nav nav-hover" id="exercises">
              Exercises
              <ul className="header-notifications">
                <li>
                  <Link to='/exercises/create'>Create exercises</Link>
                </li>
                <li>
                  <Link to="/my_home/my_exercises">My Exercises</Link>
                </li>
                <li>
                  <Link to="/all_exercises">All Exercises</Link>
                </li>
              </ul>
            </div>
            <div className="nav nav-hover" id="goals">
              Goals
              <ul className="header-notifications">
                <li>
                  <Link to="/goals/create/">Create Goal</Link>
                </li>
                <li>
                  <Link to="/goals/">My Goal</Link>
                </li>
              </ul>
            </div>
            <div className="nav nav-hover" id="friends">
              Friends
              <ul className="header-notifications">
                <li>
                  <Link to="/user/friends">My Friends</Link>
                </li>
                <li>Find Friends</li>
              </ul>
            </div>
            <div className="nav-menu" id="logout-greeting">
              <h3>Welcome {user.username}!</h3>
              <div className="nav nav-hover" id="profile-logo">
                <img className="nav-avatar-img" src={window.profileUrl} width="34" height="34" />
                <ul className="profile-logo-header-notifications">
                  <li>Edit Profile</li>
                  <li><button onClick={logout}>Logout</button></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  } else {
    return (
      <div id="greeting">
        <Link className="sweatyLogo" to="/">
          <img src={window.logoUrl} />
        </Link>
        <div id="greeting-sign-in-container">
          <span id="login-link">
            <Link to="/login">Log In</Link>
          </span>
          <button id="signup-button">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    );
  }
};

export default Greeting;
