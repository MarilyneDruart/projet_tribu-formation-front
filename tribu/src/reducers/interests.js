import { SET_INTERESTS_LIST } from '../actions/interests';

export const initialState = {
  list: [],
  loading: true,
};

function interests(state = initialState, action = {}) {
  switch (action.type) {
    case SET_INTERESTS_LIST:
      return {
        ...state,
        list: action.payload.interests,
        loading: false,
      };

    default:
      return state;
  }
}

export default interests;
