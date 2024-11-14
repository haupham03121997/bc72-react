import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    // [userSlice.name]: userSlice,
  },
});

export default store;
