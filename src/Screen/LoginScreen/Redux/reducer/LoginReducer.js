import {LOGIN_SUCCESS} from '../action/actionTypes';

const initialState = {
  data: [],
  token: '',
  message: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload.data,
        token: payload.data.token,
        message: payload.message,
      };

    default:
      return state;
  }
};
