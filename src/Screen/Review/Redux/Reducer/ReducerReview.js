import {SET_MY_REVIEW_DATA} from '../Action/ActionReview';

const initialState = {
  review: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MY_REVIEW_DATA:
      return {...state, review: payload.data};

    default:
      return state;
  }
};
