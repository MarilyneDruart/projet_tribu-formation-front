import {
  createStore, compose,
} from 'redux';

import inscriptionForm from './inscriptionForm';
// import debugMiddleware from '../middlewares/middleware';

// eslint-disable-next-line no-unused-vars
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const myMiddleWares = composeEnhancers(
//   applyMiddleware(debugMiddleware),
// );

const store = createStore(
  inscriptionForm, /* preloadedState, */
  // myMiddleWares,
);

export default store;
