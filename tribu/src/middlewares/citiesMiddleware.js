import axios from 'axios';
import {
  FETCH_CITIES,
  FETCH_CITY,
  setCitiesList,
} from '../actions/cities';

const citiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CITIES:
      axios
        .get('http://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/cities')
        .then((response) => {
          store.dispatch(setCitiesList(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case FETCH_CITY:
      axios
        .get('http://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/cities')
        .then((response) => {
          store.dispatch(setCity(response.data));
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
