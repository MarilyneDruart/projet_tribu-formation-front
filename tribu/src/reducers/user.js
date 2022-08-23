import { CLOSE_LOGIN_FORM, TOGGLE_LOGIN_FORM, OPEN_LOGIN_FORM } from '../actions/loginForm';

export const initialState = {
  loginFormisDisplayed: false,
  logged: false,
  email: '',
  token: '',

  loginForm: {
    password: '',
    email: '',
  },
};

function user(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_LOGIN_FORM:
      return {
        ...state,
        loginFormIsDisplayed: true,
      };

    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginFormIsDisplayed: !state.loginFormIsDisplayed,
      };

    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        loginFormIsDisplayed: false,
      };
    default:
      return state;
  }
}

export default user;
