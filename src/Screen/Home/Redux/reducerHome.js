import {
  CURRENT_CATEGORY,
  SET_MOVIE_BY_CATEGORY,
  SET_MOVIE_CATEGORY,
  SET_MOVIE_DATA,
  SET_MOVIE_DETAIL,
  SET_SEACRHED_MOVIE,
} from './actionHome';

const initialState = {
  data: [],
  detail: [],
  category: [],
  currentCategory: '',
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
        data: action.payload,
      };

    case SET_MOVIE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SET_MOVIE_BY_CATEGORY:
      return {
        ...state,
        data: action.payload,
      };

    case CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };

    default:
      return state;
  }
};
