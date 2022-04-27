import { login } from '../services/login';

const userReducer = (state = null, action) => {

  switch(action.type) {
  case('SET_USER'):
    return action.data;
  default:
    return state;
  }
};

// used for setting user from localstorage
export const setUser = (user) => {
  return dispatch => {
    dispatch({
      type: 'SET_USER',
      data: user
    });
  };
};

export const setLoggedUser = (user ) => {
  return async dispatch => {
    const loggedInUser = await login(user);
    window.localStorage.setItem('loggedUser', JSON.stringify(loggedInUser));
    dispatch({
      type: 'SET_USER',
      data: loggedInUser
    });
  };
};

export default userReducer;