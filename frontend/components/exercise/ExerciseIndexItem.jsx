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
                -
            </td>
        )
    }
};


const ExerciseIndexItem = (props) => {
    if (!props.exercise) {
        return null;
    }

    debugger;
    return (
        <tr>
            <td className="exercise-td">
                <img src={`https://maps.googleapis.com/maps/api/staticmap
?size=100x100&path=weight:3%7Ccolor:red%7Cenc:${props.exercise.map}&key=${window.apiKey}`} />
            </td>
            <td className="exercise-td">{props.exercise.createdAt}</td>
            {exerciseTypeTabComponent(props)}
            <td classsName="exercise-td">500 ft</td>
            <td className="exercise-td">{props.exercise.name}</td>
            <td className="exercise-td">{props.exercise.location}</td>
            <td className="exercise-td">
                <span className="exercise-options">Edit</span>
                <button className="exercise-options" onClick={() => props.deleteExercise(props.exercise.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default ExerciseIndexItem;