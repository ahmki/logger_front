import { getUserData } from '../services/userService';

const initialState = null;

const profileReducer = (state = initialState, { type, payload }) => {

  switch (type) {
  case('SET_PROFILEDATA'):
    return { ...state, ...payload };
  case('REMOVE_PROFILEDATA'):
    return { initialState };
  default:
    return state;
  }
};

export const setProfileData = (id) => {
  return async dispatch => {
    const data = await getUserData(id);
    dispatch({
      type: 'SET_PROFILEDATA',
      payload: data
    });
  };
};

export default profileReducer;