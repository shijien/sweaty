import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchFriends } from '../../actions/friend_actions';

const mSP = (state, ownProps) => {

    return {
        friends: Object.values(state.entities.friends),
        currentUserId: state.session.id
    };
};

const mDP = (dispatch, ownProps) => {
    return {
        fetchFriends: (userId) => dispatch(fetchFriends(userId))

    };
};

export default connect(mSP, mDP)(FriendsIndex);