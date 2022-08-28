export const FETCH_INTERESTS = 'FETCH_INTERESTS';
export const fetchInterests = () => ({
  type: FETCH_INTERESTS,
});

export const SET_INTERESTS_LIST = 'SET_INTERESTS_LIST';
export const setInterestsList = (interests) => ({
  type: SET_INTERESTS_LIST,
  payload: { interests },
});

export const TOGGLE_INTEREST_FORM = 'TOGGLE_INTEREST_FORM';
export const toggleInterestForm = () => ({
  type: TOGGLE_INTEREST_FORM,
});

export const CLOSE_INTEREST_FORM = 'CLOSE_INTEREST_FORM';
export const closeInterestForm = () => ({
  type: CLOSE_INTEREST_FORM,
});

