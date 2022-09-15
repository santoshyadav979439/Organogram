import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'admin',
};

export const roleSlice = createSlice({
  name: 'roleSlice',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
