import { combineReducers } from 'redux';

import inscriptionReducer from './inscriptionForm';
import citiesReducer from './cities';
import interestsReducer from './interests';
import userReducer from './user';

const rootReducer = combineReducers({
  inscriptionForm: inscriptionReducer,
  cities: citiesReducer,
  interests: interestsReducer,
  user: userReducer,
});

export default rootReducer;
