import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetInterlinears } from './actions/interlinears'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

store.dispatch(startSetInterlinears()).then(() => {
  renderApp()
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
    } else {
        store.dispatch(logout())
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
