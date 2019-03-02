import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(user) {
        this.props.login(user)
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
                    <button className="LoginButton">
                      <Link to="/login">LOG IN</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

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

            <div className="cities">
              <ul className="cityList">
                <li>New York, NY</li>
                <li>Manhattan, NY</li>
                <li>San Francisco, CA</li>
              </ul>
              <ul className="cityList">
                <li>New York, NY</li>
                <li>Manhattan, NY</li>
                <li>Boston, MA</li>
              </ul>
            </div>
          </div>
        );
    }
}
export default Splash;