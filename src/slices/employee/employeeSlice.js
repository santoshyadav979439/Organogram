import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  empData: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    modify: (state, action) => {
      state.empData = action.payload;
    },
    add: (state, action) => {
      state.empData = action.payload;
    },
    deleteEmp: (state, action) => {
      state.empData = action.payload;
    },
  },
});
export const { modify, add, deleteEmp } = employeeSlice.actions;

export default employeeSlice.reducer;
