const initialState = {
  review: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_REVIEW_DATA':
      return {...state, ...payload};

    default:
      return state;
  }
};
