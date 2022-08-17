import {
  createStore, applyMiddleware, compose,
} from 'redux';

import inscriptionForm from './inscriptionForm';
import { debugMiddleware } from '../middlewares/middleware';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleWares = composeEnhancers(
  applyMiddleware(debugMiddleware),
);

const store = createStore(
  inscriptionForm, /* preloadedState, */
  myMiddleWares,
);

export default store;
