import { login } from "../services/login";

const userReducer = (state = null, action) => {

  switch(action.type) {
    case('SET_USER'):
      return action.data;
    default:
      return state;
  }
}

/*
export const setUser = (user: BaseUser) => {
  return (dispatch: Dispatch<SetUser>) => {
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}
*/

export const setLoggedUser = (user ) => {
  return async dispatch => {
    const loggedInUser = await login(user)
    dispatch({
      type: 'SET_USER',
      data: loggedInUser
    })
  }
}

export default userReducer;