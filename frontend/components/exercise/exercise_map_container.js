import {connect} from 'react-redux';
import ExerciseMap from './exercise_map';
import {createExercise} from '../../actions/exercise_actions';

const mSP = (state, ownProps) => {
    return {
        exercise: state.entities.exercises[state.session.id],
        userId: state.session.id,
    };
};

const mDP = (dispatch, ownProps) => {
    return {
        createExercise: (exercise) => {
            return dispatch(createExercise(exercise));
        }
    };

};

export default connect(mSP, mDP)(ExerciseMap);

