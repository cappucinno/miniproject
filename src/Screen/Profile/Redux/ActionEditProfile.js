export const PUT_DATA_PROFILE = 'PUT_DATA_PROFILE';
export const SET_NEW_DATA_PROFILE = 'SET_NEW_DATA_PROFILE';
export const SET_PASSWORD_USER = 'SET_PASSWORD_USER';

export const putDataProfile = payload => ({type: PUT_DATA_PROFILE, payload});

export const setNewDataProfile = payload => ({
  type: SET_NEW_DATA_PROFILE,
  payload,
});

export const setPasswordUser = payload => ({type: SET_PASSWORD_USER, payload});
