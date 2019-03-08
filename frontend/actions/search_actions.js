import * as SearchApiUtil from '../util/search_api_util';
import {receiveExercises} from '../actions/exercise_actions'
export const RECEIVE_SEARCH_QUERIES = 'RECEIVE_SEARCH_QUERIES';

export const searchUsers = (data) => dispatch => {
    return SearchApiUtil.searchUsers(data).then(
        (payload) => dispatch(receiveSearchQueries(payload))
    );
};

export const searchExercises = (keyword) => dispatch => {
    return SearchApiUtil.searchExercises(keyword).then(
        (exercises) => dispatch(receiveExercises(exercises))
    );
};

export const receiveSearchQueries = (payload) => {
    return {
        type: RECEIVE_SEARCH_QUERIES,
        payload
    };
};