import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/usersReducer';
/*import { loadFromLocalStorage } from './services/localStorage';*/

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});