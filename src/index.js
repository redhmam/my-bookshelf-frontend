import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { client, options } from './components/Instance';

import search from './containers/Search/reducer';
import account from './containers/Account/reducer';
import books from './containers/Books/reducer';

const reducers = {
    search,
    account,
    books
}

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  const composeWithDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const store = createStore(
    combineReducers(reducers), 
    composeEnhancers(applyMiddleware(axiosMiddleware(client, options))), 
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'
));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
