import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../container/login/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
