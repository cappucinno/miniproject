export const GET_MOVIE_DATA = 'GET_MOVIE_DATA';
export const SET_MOVIE_DATA = 'SET_MOVIE_DATA';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';
export const GET_SEACRHED_MOVIE = 'GET_SEACRHED_MOVIE';
export const SET_SEACRHED_MOVIE = 'SET_SEACRHED_MOVIE';
export const GET_MOVIE_CATEGORY = 'GET_MOVIE_CATEGORY';
export const SET_MOVIE_CATEGORY = 'SET_MOVIE_CATEGORY';
export const GET_MOVIE_BY_CATEGORY = 'GET_MOVIE_BY_CATEGORY';
export const SET_MOVIE_BY_CATEGORY = 'SET_MOVIE_BY_CATEGORY';

//ke Reducer
export const setMovieData = payload => ({type: SET_MOVIE_DATA, payload});

export const setMovieDetail = payload => ({type: SET_MOVIE_DETAIL, payload});

export const setSearchedMovie = payload => ({
  type: SET_SEACRHED_MOVIE,
  payload,
});

export const setMovieByCategory = payload => ({
  type: SET_MOVIE_BY_CATEGORY,
  payload,
});

export const setMovieCategory = payload => ({
  type: SET_MOVIE_CATEGORY,
  payload,
});

//ke Saga
export const getMovieDetail = payload => ({type: GET_MOVIE_DETAIL, payload});

export const getMovieData = payload => ({type: GET_MOVIE_DATA, payload});

export const getSearchedMovie = payload => ({
  type: GET_SEACRHED_MOVIE,
  payload,
});

export const getMovieByCategory = payload => ({
  type: GET_MOVIE_BY_CATEGORY,
  payload,
});

export const getMovieCategory = payload => ({
  type: GET_MOVIE_CATEGORY,
  payload,
});
