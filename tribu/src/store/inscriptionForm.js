import { OPEN_INSCRIPTION_FORM } from '../actions/actions';

const initialState = {
  isDisplayed: false,
  isLogged: false,
};

function inscriptionForm(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_INSCRIPTION_FORM:
      return {
        ...state,
        isDisplayed: true,
      };

    default:
      return state;
  }
}

export default inscriptionForm;
