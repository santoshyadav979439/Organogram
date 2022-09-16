import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropdowns: {
    adminManage: [],
    designation: [],
    functionalManager: [],
    projects: [],
  },
};

export const dropdownSlice = createSlice({
  name: "dropdowns",
  initialState,
  reducers: {
    update: (state, action) => {
      state.dropdowns = action.payload;
    },
  },
});
export const { update } = dropdownSlice.actions;

export default dropdownSlice.reducer;
