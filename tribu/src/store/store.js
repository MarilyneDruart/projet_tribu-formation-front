import {
  createStore, compose, applyMiddleware,
} from 'redux';

import reducer from '../reducers';
import debugMiddleware from '../middlewares/debugMiddleware';

// eslint-disable-next-line no-unused-vars
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleWares = composeEnhancers(
  applyMiddleware(debugMiddleware),
);

const store = createStore(
  reducer,
  myMiddleWares,
);

export default store;
