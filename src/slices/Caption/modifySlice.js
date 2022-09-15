import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const modifySlice = createSlice({
  name: 'modify',
  initialState,
  reducers: {
    modify: (state) => {
      const value=state.value
      state.value = !value;
    },
  },
});
export const { modify } = modifySlice.actions;

export default modifySlice.reducer;
