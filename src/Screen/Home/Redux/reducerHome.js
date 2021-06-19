import {
  SET_MOVIE_DATA,
  SET_MOVIE_DETAIL,
  SET_SEACRHED_MOVIE,
} from './actionHome';

const initialState = {
  data: [],
  detail: {
    id: '',
    // trailer:'',
    title: '',
    synopsis: '',
    poster: '',
    releaseDate: '',
  },
  searched: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case SET_MOVIE_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case SET_SEACRHED_MOVIE:
      return {
        ...state,
        searched: action.payload,
      };

    default:
      return state;
  }
};
