import * as ExerciseAPIUtil from '../util/exercise_api_util';

export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES';
export const RECEIVE_EXERCISE = 'RECEIVE_EXERCISE';
export const REMOVE_EXERCISE = 'REMOVE_EXERCISE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveExercises = (exercises) => {
    return {
        type: RECEIVE_EXERCISES,
        exercises
    };
};

export const receiveExercise = (exercise) => {
    return {
        type: receiveExercise, 
        exercise
    };
};

export const removeExercise = (exerciseId) => {
    return {
        tyype: REMOVE_EXERCISE,
        exerciseId
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};

export const fetchExercises = () => dispatch => {
    return ExerciseAPIUtil.fetchExercises()
        .then(exercises => {
            return dispatch(receiveExercises(exercises));
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors));
        });
};

export const fetchExercise = (exercise) => dispatch => {
    return ExerciseAPIUtil.fetchExercise(exercise)
        .then(exercise => {
            return dispatch(receiveExercise(exercise));
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors));
        });
};


export const createExercise = (exercise) => dispatch => {
    return ExerciseAPIUtil.createExercise(exercise)
        .then(exercise => {
            return dispatch(receiveExercise(exercise));
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors));
        });
};


export const updateExercise = (exercise) => dispatch => {
    return ExerciseAPIUtil.updateExercise(exercise)
        .then(exercise => {
            return dispatch(receiveExercise(exercise));
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors));
        });
};

export const deleteExercise = (exerciseId) => dispatch => {
    return ExerciseAPIUtil.deleteExercise(exerciseId)
        .then(() => {
            return dispatch(removeExercise(exerciseId));
        })
        .fail(errors => {
            return dispatch(receiveErrors(errors));
        });
};










