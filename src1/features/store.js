import { configureStore } from '@reduxjs/toolkit';
import {
  isMobileReducer,
} from '.';

const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
  },
});

export default store;
