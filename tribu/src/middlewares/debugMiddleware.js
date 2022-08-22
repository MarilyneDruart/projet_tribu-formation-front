import { TOGGLE_INSCRIPTION_FORM } from '../actions/inscriptionForm';

// eslint-disable-next-line no-unused-vars
const debugMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TOGGLE_INSCRIPTION_FORM: {
      console.log('On a cliqué sur connexion');
      next(action);
      break;
    }

    default:
      next(action);
      break;
  }
};

export default debugMiddleware;
