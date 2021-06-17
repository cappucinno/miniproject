import {SET_MOVIE_DATA, SET_MOVIE_DETAIL} from './actionHome';

const initialState = {
  data: [],
  id: '',
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
        id: action.payload,
      };

    default:
      return state;
  }
};
