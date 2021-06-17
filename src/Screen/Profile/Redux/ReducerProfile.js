import {SET_NEW_DATA_PROFILE} from './ActionEditProfile';

const initialState = {
  newData: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_NEW_DATA_PROFILE:
      return {...state, newData: payload.data};

    default:
      return state;
  }
};
