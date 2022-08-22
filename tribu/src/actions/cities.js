export const FETCH_CITIES = 'FETCH_CITIES';
export const fetchCities = () => ({
  type: FETCH_CITIES,
});

export const FETCH_CITY = 'FETCH_CITY';
export const fetchCity = () => ({
  type: FETCH_CITY,
});

export const SET_CITIES_LIST = 'SET_CITIES_LIST';
export const setCitiesList = (cities) => ({
  type: SET_CITIES_LIST,
  payload: { cities },
});

export const SET_CITY_DATA = 'SET_CITY_DATA';
export const setCityData = (currentCityData) => ({
  type: SET_CITY_DATA,
  payload: { currentCityData },
});
