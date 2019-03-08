import { RECEIVE_SEARCH_QUERIES } from '../actions/search_actions';

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SEARCH_QUERIES:
            return action.payload;
        default:
            return oldState;
    }
};

export default searchReducer;