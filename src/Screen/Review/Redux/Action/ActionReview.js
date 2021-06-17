export const GET_MY_REVIEW_DATA = 'GET_MY_REVIEW_DATA';
export const SET_MY_REVIEW_DATA = 'SET_MY_REVIEW_DATA';

export const getReviewData = payload => ({
  type: GET_MY_REVIEW_DATA,
  payload,
});

export const setReviewData = payload => ({type: SET_MY_REVIEW_DATA, payload});
