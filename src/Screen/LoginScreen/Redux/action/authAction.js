import {LOGIN, LOGIN_SUCCESS, LOGOUT} from './actionTypes';

export const loginAction = payload => {
  return {type: LOGIN, payload};
};

export const setDataLogin = payload => ({type: LOGIN_SUCCESS, payload});

export const logoutAction = () => {
  return {type: LOGOUT};
};
