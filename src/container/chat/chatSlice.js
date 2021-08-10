import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../../apiCall";

export const getAllChats = createAsyncThunk(
  "chat/getAllChats",
  async (dummy, { fulfillWithValue, rejectWithValue }) => {
    
    let response = await apiCall("GET", "chat");
    
    if (response.success) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(response);
    }
  }
);

const chatSlice = new createSlice({
  name: "chat",
  initialState: {
    status: "idle",
    message: null,
    chats: null,
    currentChat: null,
  },
  reducers: {
    resetChatSlice: () => {
      return {
        status: "idle",
        message: null,
        chats: null,
        currentChat: null,
      };
    },
  },
  extraReducers: {
    [getAllChats.pending]: (state) => {
      
      state.status = "loading";
    },
    [getAllChats.fulfilled]: (state, action) => {
      
      state.status = "fullfilled";
      state.message = action.payload.message;
      state.chats=action.payload.data.chats;
    },
    [getAllChats.rejected]: (state, action) => {
      
      state.status = "rejected";
      state.message = action.payload.message;
    },
  },
});

export const { resetChatSlice } = chatSlice.actions;

export default chatSlice.reducer;
