export const GET_MOVIE_DATA = 'GET_MOVIE_DATA';
export const SET_MOVIE_DATA = 'SET_MOVIE_DATA';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';
export const GET_SEACRHED_MOVIE = 'GET_SEACRHED_MOVIE';
export const SET_SEACRHED_MOVIE = 'SET_SEACRHED_MOVIE';

//ke Reducer
export const setMovieData = payload => ({type: SET_MOVIE_DATA, payload});

export const setMovieDetail = payload => ({type: SET_MOVIE_DETAIL, payload});

export const setSearchedMovie = payload => ({
  type: SET_SEACRHED_MOVIE,
  payload,
});

//ke Saga
export const getMovieDetail = payload => ({type: GET_MOVIE_DETAIL, payload});

export const getMovieData = payload => ({type: GET_MOVIE_DATA, payload});

export const getSearchedMovie = payload => ({
  type: GET_SEACRHED_MOVIE,
  payload,
});
