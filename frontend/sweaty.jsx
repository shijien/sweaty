import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        // { id: 3, email: "test1", fname: "test1", lname: "test1", username: "test1" }
        const userInfo = {
            entities: {
                users: {
                    [window.currentUser.id]:  window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        };
        store = configureStore(userInfo);
        window.currentUser = undefined;
    } else {
        store = configureStore();
    }
    // TEST STARTo
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TEST END

    ReactDOM.render(<Root store={store } />, root);
});