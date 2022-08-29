import { SET_CATEGORIES_LIST } from '../actions/categories';

export const initialState = {
  list: [],
  loading: true,
};

function categories(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      return {
        ...state,
        list: action.payload.categories,
        loading: false,
      };

    default:
      return state;
  }
}

export default categories;