import {connect} from 'react-redux';
import {login} from '../../actions/session_actions'
import Splash from '../splash/splash'

const mSP = (state, ownProps) => {
    return {
        demo: {
            email: 'alec123@gmail.com',
            password: '111111'
        }
    };
};

const mDP = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mSP, mDP)(Splash);