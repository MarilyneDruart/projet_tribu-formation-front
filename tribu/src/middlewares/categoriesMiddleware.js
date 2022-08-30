import axios from 'axios';
import {
  FETCH_CATEGORIES,
  setCategoriesList,
} from '../actions/categories';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios
        .get('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/categories')
        .then((response) => {
          console.log(response.data);
          store.dispatch(setCategoriesList(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};
export default categoriesMiddleware;
