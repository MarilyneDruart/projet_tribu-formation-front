import axios from 'axios';
import {
  FETCH_CITIES,
  setCitiesList,
} from '../actions/cities';

const citiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CITIES:
      axios
        .get('http://lola-costa.vpnuser.lan:8000/api/cities')
        .then((response) => {
          store.dispatch(setCitiesList(response.data));
          console.log(response.data);
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
