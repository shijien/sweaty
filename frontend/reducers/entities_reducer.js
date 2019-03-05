import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import exercisesReducer from './exercises_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    exercises: exercisesReducer
});

export default entitiesReducer;