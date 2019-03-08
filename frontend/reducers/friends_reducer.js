import { RECEIVE_FRIENDS } from '../actions/friend_actions';

const friendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_FRIENDS:
            newState = Object.assign({}, action.payload.friends);
            return newState;
        default:
            return oldState;
    }
};

export default friendsReducer;