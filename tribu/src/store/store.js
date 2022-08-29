import {
  createStore, compose, applyMiddleware,
} from 'redux';

import reducer from '../reducers';
import debugMiddleware from '../middlewares/debugMiddleware';
import citiesMiddleware from '../middlewares/citiesMiddleware';
import interestsMiddleware from '../middlewares/interestsMiddleware';
import usersMiddleware from '../middlewares/usersMiddleware';
import categoriesMiddleware from '../middlewares/categoriesMiddleware';

// eslint-disable-next-line no-unused-vars
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleWares = composeEnhancers(
  applyMiddleware(
    debugMiddleware,
    citiesMiddleware,
    interestsMiddleware,
    categoriesMiddleware,
    usersMiddleware,
  ),
);

const store = createStore(
  reducer,
  myMiddleWares,
);

export default store;
