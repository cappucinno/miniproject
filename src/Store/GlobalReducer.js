const initialState = {
  isloading: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_IS_LOADING':
      return true;

    default:
      return state;
  }
};
