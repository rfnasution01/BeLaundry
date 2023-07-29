import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'Home',
  initialState: {
    navigations: false,
  },
  reducers: {
    setNavigation: (state, action) => {
      state.navigations = action.payload;
    },
  },
});

export const { setNavigation } = navigationSlice.actions;
export const getNavigation = (state) => state.navigation.navigations;

export default navigationSlice.reducer;
