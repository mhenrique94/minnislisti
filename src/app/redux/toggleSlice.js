import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  status: 'idle',
};

export const toggleMenuSlice = createSlice({
  name: 'toggle',
  initialState,

  reducers: {
    toggle: (state) => {
      state.value = state.value ? false : true
    },
  },
});

export const { toggle } = toggleMenuSlice.actions;
export const selectToggle = (state) => state.toggleMenu.value;
export default toggleMenuSlice.reducer;
