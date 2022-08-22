import { combineReducers } from 'redux';

import inscriptionReducer from './inscriptionForm';
import citiesReducer from './cities';
import interestsReducer from './interests';

const rootReducer = combineReducers({
  inscriptionForm: inscriptionReducer,
  cities: citiesReducer,
  interests: interestsReducer,
});

export default rootReducer;
