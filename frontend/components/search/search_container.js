import { connect } from "react-redux";
import Search from "./search";
import { searchUsers } from "../../actions/search_actions";
import {
  createFriend,
  createRequest,
  getRequests,
  fetchFriends
} from "../../actions/friend_actions";

const mSP = (state, ownProps) => {

  return {
    
    searchedUsers: Object.values(state.search),
    currentUserId: state.session.id
  };
};

const mDP = (dispatch, ownProps) => {
  return {
    searchUsers: data => dispatch(searchUsers(data)),
    createFriend: friend => dispatch(createFriend(friend)),
    createRequest: request => dispatch(createRequest(request)),
    getRequests: userId => dispatch(getRequests(userId)),
    fetchFriends: userId => dispatch(fetchFriends(userId))
  };
};

export default connect(
  mSP,
  mDP
)(Search);
