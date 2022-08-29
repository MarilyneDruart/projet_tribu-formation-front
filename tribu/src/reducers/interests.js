import {
  SET_INTERESTS_LIST,
  CLOSE_INTEREST_FORM,
  TOGGLE_INTEREST_FORM,
  // GET_CITY,
} from '../actions/interests';

export const initialState = {
  interestFormIsDisplayed: false,
  list: [],
  loading: true,
};

function interests(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_INTEREST_FORM:
      return {
        ...state,
        interestFormIsDisplayed: !state.interestFormIsDisplayed,
      };

    case CLOSE_INTEREST_FORM:
      return {
        ...state,
        interestFormIsDisplayed: false,
      };

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
