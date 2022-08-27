import axios from 'axios';
import {
  FETCH_CITIES,
  setCitiesList,
} from '../actions/cities';

const citiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CITIES:
      axios
        .get('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/cities')
        .then((response) => {
          store.dispatch(setCitiesList(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};
export default citiesMiddleware;
