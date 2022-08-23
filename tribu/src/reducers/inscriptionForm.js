import { CLOSE_INSCRIPTION_FORM, TOGGLE_INSCRIPTION_FORM, OPEN_INSCRIPTION_FORM } from '../actions/inscriptionForm';

const initialState = {
  inscriptionFormIsDisplayed: false,
};

function inscriptionForm(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_INSCRIPTION_FORM:
      return {
        ...state,
        inscriptionFormIsDisplayed: !state.inscriptionFormIsDisplayed,
      };

    case CLOSE_INSCRIPTION_FORM:
      return {
        ...state,
        inscriptionFormIsDisplayed: false,
      };

    case OPEN_INSCRIPTION_FORM:
      return {
        ...state,
        inscriptionFormIsDisplayed: true,
      };

    default:
      return state;
  }
}

export default inscriptionForm;
