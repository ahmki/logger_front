import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './reducers/notificationReducer';
import profileReducer from './reducers/profileReducer';
import searchReducer from './reducers/searchReducer';
import userReducer from './reducers/usersReducer';
/*import { loadFromLocalStorage } from './services/localStorage';*/

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    search: searchReducer,
    profile: profileReducer
  },
});