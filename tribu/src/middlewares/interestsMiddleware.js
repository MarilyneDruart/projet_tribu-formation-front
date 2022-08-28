import axios from 'axios';
import {
  FETCH_INTERESTS,
  setInterestsList,
} from '../actions/interests';

const interestsMiddleware = (store) => (next) => (action) => {
  // we need the city id to get its interests
  const { id } = store.getState().cities.city;
  // console.log(id);

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

export default interestsMiddleware;
