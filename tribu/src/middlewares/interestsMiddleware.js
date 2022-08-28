import axios from 'axios';
import {
  FETCH_INTERESTS,
  setInterestsList,
} from '../actions/interests';

const citiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INTERESTS:
      axios
        .get(`http://lola-costa.vpnuser.lan:8000/api/cities/${id}`)
        .then((response) => {
          store.dispatch(setInterestsList(response.data.posts));
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
