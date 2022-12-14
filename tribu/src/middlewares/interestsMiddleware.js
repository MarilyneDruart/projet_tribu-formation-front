import axios from 'axios';
import {
  FETCH_INTERESTS,
  setInterestsList,
} from '../actions/interests';

const interestsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INTERESTS:
      axios
        .get('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/posts')
        .then((response) => {
          store.dispatch(setInterestsList(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};

export default interestsMiddleware;
