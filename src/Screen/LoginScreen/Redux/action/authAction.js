import {LOGIN, LOGOUT} from './actionTypes';

export const loginAction = payload => {
  return {type: LOGIN, payload};
};

export const logoutAction = () => {
  return {type: LOGOUT};
};
