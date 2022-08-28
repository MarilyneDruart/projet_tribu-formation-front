import { SET_CITIES_LIST, SET_CITY } from '../actions/cities';

export const initialState = {
  list: [],
  loading: true,
  city: '',
};

function cities(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CITIES_LIST:
      return {
        ...state,
        list: action.payload.cities,
        loading: false,
      };

    case SET_CITY:
      return {
        ...state,
        city: action.payload.city,
      };

    default:
      return state;
  }
}

export default cities;
