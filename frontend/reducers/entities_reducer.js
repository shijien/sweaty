import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import exercisesReducer from './exercises_reducer';
import friendRequestsReducer from './friend_requests_reducer';
import friendshipsReducer from './friendships_reducer';
import friendsReducer from './friends_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    exercises: exercisesReducer,
    friendRequests: friendRequestsReducer,
    friendships: friendshipsReducer,
    friends: friendsReducer
});

export default entitiesReducer;