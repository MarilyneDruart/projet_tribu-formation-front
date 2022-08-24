export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
});

export const CLOSE_LOGIN_FORM = 'CLOSE_LOGIN_FORM';
export const closeLoginForm = () => ({
  type: CLOSE_LOGIN_FORM,
});

export const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';
export const openLoginForm = () => ({
  type: OPEN_LOGIN_FORM,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const SET_USER = 'SET_USER';
export const setUser = (token) => ({
  type: SET_USER,
  payload: {
    token,
  },
});
