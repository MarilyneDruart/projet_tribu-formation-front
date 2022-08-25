import axios from 'axios';
import {
  FETCH_USER,
  setUser,
} from '../actions/user';

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER:
      axios
        .get('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/users/')
        .then((response) => {
          store.dispatch(setUser(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};
export default usersMiddleware;
