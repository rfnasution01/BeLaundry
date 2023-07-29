import { configureStore } from '@reduxjs/toolkit';
import { isMobileReducer, navigationReducer } from '.';

const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    navigation: navigationReducer,
  },
});

export default store;
