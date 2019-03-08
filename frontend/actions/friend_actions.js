import * as FriendApiUtil from "../util/friends_api_util";
export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";

export const receiveRequests = payload => {
  return {
    type: RECEIVE_FRIEND_REQUESTS,
    payload
  };
};

export const receiveFriends = payload => {
  return {
    type: RECEIVE_FRIENDS,
    payload
  };
};

export const createRequest = request => dispatch => {
  return FriendApiUtil.createRequest(request).then(friendRequests => {
    return dispatch(receiveRequests(friendRequests));
  });
};

export const getRequests = userId => dispatch => {
  return FriendApiUtil.fetchRequests(userId).then(friendRequests => {
    return dispatch(receiveRequests(friendRequests));
  });
};

export const fetchFriends = userId => dispatch => {
  return FriendApiUtil.fetchFriends(userId).then(friends => {
    return dispatch(receiveFriends(friends));
  });
};

export const removeRequest = requestId => dispatch => {
  return FriendApiUtil.deleteRequest(requestId).then(friendRequests => {
    return dispatch(receiveRequests(friendRequests));
  });
};

export const createFriend = friend => dispatch => {
  return FriendApiUtil.createFriendship(friend).then(friends => {
    return dispatch(receiveFriends(friends));
  });
};