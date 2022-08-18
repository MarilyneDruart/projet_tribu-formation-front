import { TOGGLE_INSCRIPTION_FORM } from '../actions/actions';

const initialState = {
  isDisplayed: false,
};

function inscriptionForm(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_INSCRIPTION_FORM:
      console.log('on passe dans l\'action');
      return {
        ...state,
        isDisplayed: !state.isDisplayed,
      };

    default:
      return state;
  }
}

export default inscriptionForm;
