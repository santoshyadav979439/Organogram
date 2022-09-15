import { configureStore } from '@reduxjs/toolkit';
import popupSlice from '../slices/popup/popupSlice';
import modify from '../slices/Caption/modifySlice';
import roleSlice from '../slices/role/roleSlice';
export const store = configureStore({
  reducer: {
    popup: popupSlice,
    modify,
    roleSlice
  },
});
