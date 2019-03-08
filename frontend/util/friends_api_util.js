export const createFriendship = friendship => {
    return $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: {
            friendship: friendship
        }
    });
};

export const fetchFriends = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/friendships`
    });
};

export const createRequest = friendRequest => {
    return $.ajax({
        method: 'POST',
        url: '/api/friend_requests',
        data: {
            friend_request: friendRequest
        }
    });
};

export const fetchRequests = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/friend_requests`
    });
};

export const deleteRequest = requestId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/friend_requests/${requestId}`
    });
};