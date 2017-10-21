import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { authenticationMiddleware } from './middleware';
import style from './css/main.scss';
require('./setBodyClassByDevice.js')
import App from './app';
import RootReducer from './reducers';

import routes from './routes';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware, authenticationMiddleware));

let rootElement = document.getElementById('app-root');

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  rootElement
);