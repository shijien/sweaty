import {RECEIVE_EXERCISE, RECEIVE_EXERCISES, REMOVE_EXERCISE} from '../actions/exercise_actions';

const exercisesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_EXERCISES:
            return action.exercises;
        case RECEIVE_EXERCISE: 
            nextState[action.exercise.id] = action.exercise;
            return nextState;
        case REMOVE_EXERCISE: 
            delete nextState[action.exerciseId];
            return nextState;
        default: 
            return oldState;
    }
};

export default exercisesReducer;


