import {SET_PASSWORD_USER} from '../../Profile/Redux/ActionEditProfile';
import {SET_NEW_USER} from './RegisterAction';

const initialState = {
  token: '',
  data: [],
  message: '',
  password: '',
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
    case SET_PASSWORD_USER:
      return {
        ...state,
        password: payload,
      };

    default:
      return state;
  }
};
