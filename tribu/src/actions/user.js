export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => ({
  type: FETCH_USER,
});

export const SET_USER = 'SET_USER';
export const setUser = (
  id,
  email,
  firstname,
  lastname,
  cityId,
  post,
  presentation = null,
  image = null,
) => ({
  type: SET_USER,
  payload: {
    id,
    email,
    firstname,
    lastname,
    cityId,
    presentation,
    post,
    image,
  },
});
