import { createSlice } from '@reduxjs/toolkit';

const isMobileSlice = createSlice({
  name: 'isMobile',
  initialState: {
    isMobileDevice: false,
  },
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobileDevice = action.payload;
    },
  },
});

export const { setIsMobile } = isMobileSlice.actions;
export const getIsMobile = (state) => state.isMobile.isMobileDevice;

export default isMobileSlice.reducer;
