import {
  createStore, applyMiddleware, compose,
} from 'redux';

import inscriptionForm from './inscriptionForm';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleWares = composeEnhancers(
  applyMiddleware(loginMiddleware),
);

const store = createStore(
  inscriptionForm, /* preloadedState, */
);

export default store;
