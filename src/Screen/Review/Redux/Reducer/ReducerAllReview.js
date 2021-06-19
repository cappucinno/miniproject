import {SET_ALL_REVIEW_MOVIE} from '../Action/ActionAllReview';

const initialState = {
  data: [],
  movieId: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ALL_REVIEW_MOVIE:
      return {...state, data: payload.data, movieId: payload.movieId};

    default:
      return state;
  }
};
