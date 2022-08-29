export const FETCH_CITIES = 'FETCH_CITIES';
export const fetchCities = () => ({
  type: FETCH_CITIES,
});

export const SET_CITIES_LIST = 'SET_CITIES_LIST';
export const setCitiesList = (cities) => ({
  type: SET_CITIES_LIST,
  payload: { cities },
});

export const SET_CITY = 'SET_CITY';
export const setCity = (city) => ({
  type: SET_CITY,
  payload: { city },
});
