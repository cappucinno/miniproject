import {SET_MOVIE_DATA, SET_MOVIE_DETAIL} from './actionHome';

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

    default:
      return state;
  }
};
