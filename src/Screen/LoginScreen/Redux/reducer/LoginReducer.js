import {SET_NEW_DATA_PROFILE} from '../../../Profile/Redux/ActionEditProfile';
import {LOGIN_SUCCESS, LOGOUT} from '../action/actionTypes';

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
    case SET_NEW_DATA_PROFILE:
      return {
        ...state,
        data: {
          data: {
            ...payload.data.data,
            profilePicture: payload.data.data.profilePicture.uri,
          },
        },
      };

    case LOGOUT:
      return {...state, data: [], token: '', message: ''};
    default:
      return state;
  }
};
