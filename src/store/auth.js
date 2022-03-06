/** @format */

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoogedIn },
  reducers: {
    login(state) {
      state.isLoogedIn = true;
    },

    logout(state) {
      state.isLoogedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
