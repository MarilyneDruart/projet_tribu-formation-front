export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';
export const setCategoriesList = (categories) => ({
  type: SET_CATEGORIES_LIST,
  payload: { categories },
});
