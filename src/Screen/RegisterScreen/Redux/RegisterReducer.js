import {SET_NEW_USER} from './RegisterAction';

const initialState = {
  token: '',
  data: [],
  message: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_NEW_USER:
      return {
        ...state,
        token: payload.data.token,
        data: payload.data,
        message: payload.message,
      };

    default:
      return state;
  }
};
