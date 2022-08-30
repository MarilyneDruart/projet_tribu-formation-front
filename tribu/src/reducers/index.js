import { combineReducers } from 'redux';

import inscriptionReducer from './inscriptionForm';
import citiesReducer from './cities';
import interestsReducer from './interests';
import categoriesReducer from './categories';
import userReducer from './user';

const rootReducer = combineReducers({
  inscriptionForm: inscriptionReducer,
  cities: citiesReducer,
  interests: interestsReducer,
  categories: categoriesReducer,
  user: userReducer,
});

export default rootReducer;
