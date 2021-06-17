export const POST_NEW_USER = 'POST_NEW_USER';
export const SET_NEW_USER = 'SET_NEW_USER';

export const PostNewUser = payload => ({type: POST_NEW_USER, payload});

export const SetNewUser = payload => ({type: SET_NEW_USER, payload});
