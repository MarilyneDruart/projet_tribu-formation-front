import { CLOSE_INSCRIPTION_FORM, TOGGLE_INSCRIPTION_FORM } from '../actions/actions';

const initialState = {
  isDisplayed: false,
};

function inscriptionForm(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_INSCRIPTION_FORM:
      return {
        ...state,
        isDisplayed: !state.isDisplayed,
      };

    case CLOSE_INSCRIPTION_FORM:
      return {
        ...state,
        isDisplayed: false,
      };

    default:
      return state;
  }
}

export default inscriptionForm;
