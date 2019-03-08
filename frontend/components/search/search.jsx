import React from "react";
import SearchItem from "./search_item";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Lodash from "lodash";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.cleanSearch = this.cleanSearch.bind(this);
    this.handleAddFriendButton = this.handleAddFriendButton.bind(this);
  }

  componentDidMount() {
    this.props.searchUsers();
    this.props.fetchFriends(this.props.currentUserId);
  }

  handleType(e) {
  
    e.preventDefault();
    this.setState({ search: e.target.value });
    this.props.searchUsers({
      nameQuery: e.target.value
    });
  }

  cleanSearch() {
    this.setState({
      search: ""
    });
  }

  handleAddFriendButton(user, currentUserId) {
    let is_friend = false;
    let has_request_from = false;
    let has_request_to = false;

    if (
      Lodash.includes(
        user.from_friendships.map(el => el.to_user_id),
        currentUserId
      )
    ) {
      is_friend = true;
    }
    if (
      Lodash.includes(
        user.send_friend_requests.map(el => el.request_to_id),
        currentUserId
      )
    ) {
      has_request_from = true;
    }
    if (
      Lodash.includes(
        user.receive_friend_requests.map(el => el.request_from_id),
        currentUserId
      )
    ) {
      has_request_to = true;
    }

    if (!is_friend && user.id !== currentUserId) {
      if (has_request_from === false && has_request_to === false) {
        return (
          <button
            onClick={() =>
              this.props.createRequest({
                request_from_id: currentUserId,
                request_to_id: user.id
              }).then(() => window.location.reload())
            }
          >
            Add Friends
          </button>
        );
      } else if (has_request_from === false && has_request_to === true) {
        return <button disabled>Pending</button>;
      } else if (has_request_from === true && has_request_to === false) {
        return (
          <button
            onClick={() =>
              this.props.createFriend({
                from_user_id: currentUserId,
                to_user_id: user.id
              }).then(() => window.location.reload())
            }
          >
            Accept
          </button>
        );
      }
    } else {
      return null;
    }
  }

  handleDropDown() {
    if (this.state.search !== "") {
      const findUser = () => {
        let arr = [];
        for (let obj in this.props.searchedUsers) {
            if (this.props.searchedUsers[obj].id !== this.props.currentUserId) {
            arr.push(
              <div className="search_item_container">
                <SearchItem
                  className="search_item"
                  currentUserId={this.props.currentUserId}
                  user={this.props.searchedUsers[obj]}
                  createFriend={this.props.createFriend}
                  createRequest={this.props.createRequest}
                  getRequest={this.props.getRequest}
                  fetchFriends={this.props.fetchFriends}
                />
                <div className="add_friend_button">
                  {this.handleAddFriendButton(
                    this.props.searchedUsers[obj],
                    this.props.currentUserId
                  )}
                </div>
              </div>
            );
          }
        }
        return arr;
      };
      return (
        <div className="search_modal">
          <ul>{findUser()}</ul>
        </div>
      );
    }
  }

  handleSearchButton() {
   
    let userId;
    if (this.state.search !== "") {
      userId = this.props.searchedUsers[0].id;
      this.props.history.push(`/user/${userId}`);
    }
    this.cleanSearch();
  }

  render() {
    return (
      <div className="search_bar">
        <form className="search_form" onSubmit={this.handleSearchButton}>
          <input
            onChange={e => this.handleType(e)}
            className="search_bar_input"
            placeholder="Search your friends."
            type="text"
          />
          <button className="search_bar_submit">
            <div className="search_icon" />
          </button>
        </form>
        {this.handleDropDown()}
      </div>
    );
  }
}

export default withRouter(Search);
