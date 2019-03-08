import { connect } from 'react-redux';
import ExerciseIndex from './exercise_index';
import { fetchExercises, deleteExercise } from '../../actions/exercise_actions';

const mSP = (state, ownProps) => {

    return {
        exercises: Object.values(state.entities.exercises).filter(exercise => exercise.userId === state.session.id),
        userId: state.session.id
    };
};

const mDP = (dispatch, ownProps) => {
    return {
        fetchExercises: () => dispatch(fetchExercises()),
        deleteExercise: (exerciseId) => dispatch(deleteExercise(exerciseId))
    };
};

export default connect(mSP, mDP)(ExerciseIndex);