import { SET_CITIES_LIST } from '../actions/cities';

export const initialState = {
  list: [],
  loading: true,
};

function cities(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CITIES_LIST:
      return {
        ...state,
        list: action.payload.cities,
        loading: false,
      };

    default:
      return state;
  }
}

export default cities;
