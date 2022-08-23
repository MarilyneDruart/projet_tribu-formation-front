export const initialState = {
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
    default:
      return state;
  }
}

export default user;
