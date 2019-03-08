import React from "react";
import { Link } from "react-router-dom";
import Lodash from "lodash";

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends(this.props.currentUserId);
  }

  render() {
      if (Lodash.isEmpty(this.props.friends)) {
          return null;
      }
    return (
      <div className="friends-index-container">
        <ul className="friends-index-list">
          {this.props.friends.map(el => {
            return (
              <li className="friends-index-list-box">
                <div>{el.fname}</div><div>{el.lname}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsIndex;
