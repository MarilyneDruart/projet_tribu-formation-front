import {
  CLOSE_LOGIN_FORM,
  TOGGLE_LOGIN_FORM,
  OPEN_LOGIN_FORM,
  LOGOUT,
  SET_TOKEN,
} from '../actions/loginForm';

import { SET_USER } from '../actions/user';

export const initialState = {
  loginFormisDisplayed: false,

  logged: false,
  token: '',
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  cityId: '',
  presentation: '',
  post: '',
  image: '',

  loginForm: {
    username: '',
    password: '',
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

    case SET_TOKEN:
      return {
        ...state,
        logged: true,
        token: action.payload.token,
      };

    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        cityId: action.payload.cityId,
        presentation: action.payload.presentation,
        post: action.payload.post,
        image: action.payload.image,
      };

    case LOGOUT:
      return {
        ...state,

        logged: false,
        token: '',

        loginForm: {
          username: '',
          password: '',
        },
      };

    default:
      return state;
  }
}

export default user;
