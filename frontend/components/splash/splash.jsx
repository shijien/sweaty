import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.login(this.props.user);
    }
    
    render() {
        return (
          <div className="splashPage">
            <div className="ownEveryMileWrapper">
              <div className="ownEveryMileContext">
                <h2 className="ownEveryMileHeader">
                  <hr className="ownEveryMileBorder" />
                  <span>OWN EVERYMILE</span>
                  <hr className="ownEveryMileBorder" />
                </h2>
                <p className="ownEveryMileSubheading">
                  <span>
                    Get sweaty. Keep your body fit and health. Complete
                    your amibitious goal.
                  </span>
                </p>
                <div className="callToAction">
                  <Link
                    className="ownEveryMileSignUpButton"
                    to="/signup"
                  >
                    SIGN UP
                  </Link>
                  <div className="callToLogIn">
                    <p className="logInQuestion">
                      <span>Already a member?</span>
                    </p>
                    <button className="LoginButton" onClick={this.handleClick}>
                      LOG IN DEMO
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-bar"></div>

            <div className="findYourPath">
              <h2>
                <div className="findYouPathBorder">
                  FIND YOUR PATH ANYWHERE
                </div>
              </h2>
              <p className="findYouPathSubheading">
                <span>
                  Create and discover new routes wherever you are. Save
                  your favorites for the next time you're ready to run.
                </span>
              </p>
            </div>

            <div className="white-bar"></div>

            <div className="cities">
              <ul className="cityList">
                <li>NEW YORK</li>
                <li>PARIS</li>
                <li>SAN FRANCISCO</li>
              </ul>
              <ul className="cityList">
                <li><Link to="/all_exercises/los%20angeles">LOS ANGELES</Link></li>
                <li><Link to="/all_exercises/hong%20kong">HONG KONG</Link></li>
                <li><Link to="/all_exercises/san%20francisco">SAN FRANCISCO</Link></li>
                <li><Link to="/all_exercises/paris">PARIS</Link></li>
                <li><Link to="/all_exercises/johannesburg">JOHANNESBURG</Link></li>
              </ul>
            </div>
          </div>
        );
    }
}
export default Splash;