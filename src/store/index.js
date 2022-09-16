import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "../slices/popup/popupSlice";
import modify from "../slices/Caption/modifySlice";
import roleSlice from "../slices/role/roleSlice";
import employeeSlice from "../slices/employee/employeeSlice";
import dropdownSlice from "../slices/dropdown/dropdownSlice";
export const store = configureStore({
  reducer: {
    popup: popupSlice,
    modify,
    roleSlice,
    employeeSlice,
    dropdownSlice,
  },
});
