import {
  createStore, compose,
} from 'redux';

import inscriptionForm from './inscriptionForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  inscriptionForm, /* preloadedState, */
);

export default store;
