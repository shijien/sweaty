import {connect} from 'react-redux';
import ExerciseIndex from './exercise_index';
import {fetchExercises, deleteExercise} from '../../actions/exercise_actions';
import {searchExercises} from '../../actions/search_actions';

const mSP = (state, ownProps) => {
    return {
        
        exercises: Object.values(state.entities.exercises)
    };
};

const mDP = (dispatch, ownProps) => {
    return {
        searchExercises: (keyword) => dispatch(searchExercises(keyword)),
        fetchExercises: () => dispatch(fetchExercises()),
        deleteExercise: (exerciseId) => dispatch(deleteExercise(exerciseId))
    };
};

export default connect(mSP, mDP)(ExerciseIndex);