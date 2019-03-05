export const fetchExercises = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/exercises'
    });
};

export const fetchExercise = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/exercises/${id}`
    });
};

export const createExercise = (exercise) => {
    return $.ajax({
        method: 'POST',
        url: 'api/exercises',
        data: {
            exercise: exercise
        }
    });
};

export const updateExercise = (exercise) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/exercises/${exercise.id}`,
        data: {
            exercise: exercise
        }
    });
};

export const deleteExercise = (exerciseId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/exercises/${exerciseId}`
    });
};



