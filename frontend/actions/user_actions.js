import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';


export const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

export const fetchUsers = () => dispatch => {
    return (
        UsersApiUtil.fetchAllUsers().then(users => {
            return dispatch(receiveAllUsers(users))
        })
    )
};