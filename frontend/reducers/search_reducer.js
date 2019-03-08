import { RECEIVE_SEARCH_QUERIES } from '../actions/search_actions';
import { RECEIVE_FRIEND_REQUESTS } from '../actions/friend_actions';
import { merge } from 'lodash'

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SEARCH_QUERIES:
            return action.payload;
        // case RECEIVE_FRIEND_REQUESTS:
        //     let newState = merge({}, oldState, action.payload);
        //     return newState;
        default:
            return oldState;
    }
};
export default searchReducer;