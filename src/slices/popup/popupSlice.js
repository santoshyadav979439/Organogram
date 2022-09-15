import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const { open, close } = popupSlice.actions;

export default popupSlice.reducer;
