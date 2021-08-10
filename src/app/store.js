import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../container/login/authSlice";
import chatSliceReducer from "../container/chat/chatSlice";
import contactSliceReducer from "../container/contact/contactSlice";
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    chat: chatSliceReducer,
    contact: contactSliceReducer,
  },
});
