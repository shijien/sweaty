import * as APIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};


export const signup = user => dispatch => (
    APIUtil.signup(user).then(payload => {
        swal({
            title: `Welcome!, ${payload.user.fname}!`,
            text: "Let's get sweaty!",
            icon: "success",
            button: "GO!",
        });
        return dispatch(receiveCurrentUser(payload));
     }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(payload => {
        swal({
            title: `Welcome back, ${payload.user.fname}!`,
            text: "Get sweaty! Keep strong!",
            icon: "success",
            button: "GO!",
        });
        return dispatch(receiveCurrentUser(payload));
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(() => (
        dispatch(logoutCurrentUser())
    ))
);
