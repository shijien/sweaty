import React from 'react';

const exerciseTypeTabComponent = (props) => {
    if (props.exercise.exerciseType !== "in-place") {
        return (
          <td className="exercise-td">
            {props.exercise.distance} miles
          </td>  
        );
    } else {
        return (
            <td className="exercise-td">
                --
            </td>
        )
    }
};

const exeOptions = (props) => {
    if (props && props.exercise && props.userId) {
        return (
            <td className="exercise-td">
                <span className="exercise-options">Edit</span>
                <button className="exercise-options" onClick={() => props.deleteExercise(props.exercise.id)}>Delete</button>
            </td>
        );
    } else {
        return <td></td>;
    }
}


const ExerciseIndexItem = (props) => {
    if (!props.exercise) {
        return null;
    }

    return (
        <tr>
            <td className="exercise-td">
                <img src={`https://maps.googleapis.com/maps/api/staticmap
?size=100x100&path=weight:3%7Ccolor:red%7Cenc:${props.exercise.map}&key=${window.apiKey}`} />
            </td>
            <td className="exercise-td">{props.exercise.createdAt.slice(0, 10)}</td>
            {exerciseTypeTabComponent(props)}
            <td className="exercise-td">{props.exercise.name}</td>
            <td className="exercise-td">{props.exercise.location}</td>
            {exeOptions(props)}
        </tr>
    );
};

export default ExerciseIndexItem;