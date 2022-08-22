export const FETCH_INTERESTS = 'FETCH_INTERESTS';
export const fetchInterests = () => ({
  type: FETCH_INTERESTS,
});

export const SET_INTERESTS_LIST = 'SET_INTERESTS_LIST';
export const setInterestsList = (interests) => ({
  type: SET_INTERESTS_LIST,
  payload: { interests },
});
