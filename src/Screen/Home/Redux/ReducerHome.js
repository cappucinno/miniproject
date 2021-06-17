import {GET_DATA_MOVIEW} from './ActionHome';

const initialState = {
  data: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_DATA_MOVIEW:
      return {...state, data: payload.data};

    default:
      return state;
  }
};
