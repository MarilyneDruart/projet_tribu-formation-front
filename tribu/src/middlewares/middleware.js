import { OPEN_INSCRIPTION_FORM } from '../actions/actions';

// eslint-disable-next-line no-unused-vars
const debugMiddleware = (store) => (next) => (action) => {
  console.log('Je passe dans mon debugMiddleware');

  switch (action.type) {
    case OPEN_INSCRIPTION_FORM: {
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
