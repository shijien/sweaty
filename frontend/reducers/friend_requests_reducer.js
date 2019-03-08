import { RECEIVE_FRIEND_REQUESTS } from '../actions/friend_actions';

const friendRequestsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_FRIEND_REQUESTS:
            newState = Object.assign({}, action.payload.friendRequests);
            return newState;
            default: 
            return oldState;
    }
};

export default friendRequestsReducer;