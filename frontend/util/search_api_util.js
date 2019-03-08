export const searchUsers = (data) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users`,
        data: { data }
    });
};

export const searchExercises = (keyword) => {
    return $.ajax({
        method: 'GET',
        url: `/api/exercises/?keyword=${keyword}`
    });
}