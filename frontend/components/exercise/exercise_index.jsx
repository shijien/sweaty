import React from "react";
import {Link} from "react-router-dom";
import ExerciseIndexItem from './ExerciseIndexItem';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.match.params.loc) {
      this.props.fetchExercises();
    } else {
      this.props.searchExercises(this.props.match.params.loc);
    }
  }

  render() {
    if (!this.props.exercises) {
      return null;
    }
    return (
      <div className="exercises-index">
        <div className="exercise-tag">
          <Link to="/exercises/create/">
            <button className="create-exercise-button">CREATE A EXERCISE</button>
          </Link>
        </div>
        <hr />
        <table className="exercise-table">
          <thead>
            <tr>
              <th>Map</th>
              <th>Created</th>
              <th>Distance</th>
              <th>Name</th>
              <th>City</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
              {
                  this.props.exercises.map(exercise => {
                      return <ExerciseIndexItem exercise={exercise} userId={this.props.userId} deleteExercise={this.props.deleteExercise}/>
                  })
              }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExerciseIndex;