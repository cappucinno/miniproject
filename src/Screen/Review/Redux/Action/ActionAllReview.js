export const GET_ALL_REVIEW_MOVIE = 'GET_ALL_REVIEW_MOVIE';
export const SET_ALL_REVIEW_MOVIE = 'SET_ALL_REVIEW_MOVIE';

export const getReviewAllMovie = payload => ({
  type: GET_ALL_REVIEW_MOVIE,
  payload,
});

export const setReviewAllMovie = payload => ({
  type: SET_ALL_REVIEW_MOVIE,
  payload,
});
