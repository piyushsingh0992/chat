import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../../apiCall";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (signUpDetails, { fulfillWithValue, rejectWithValue }) => {
    let response = await apiCall("POST", "auth/create", signUpDetails);

    if (response.success) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(response);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (signInDetails, { fulfillWithValue, rejectWithValue }) => {
    let response = await apiCall("POST", "auth/", signInDetails);

    if (response.success) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(response);
    }
  }
);

const authSlice = new createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    message: null,
    token: null,
    userId: null,
    userName: null,
    userImage: null,
    email: null,
  },
  reducers: {
    resetauthSlice: () => {
      return {
        status: "idle",
        message: null,
        token: null,
        userId: null,
        userName: null,
        userImage: null,
      };
    },

    signInfromLocalStorage: (state, action) => {
      state.status = "fullfilled";
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userImage = action.payload.userImage;
      state.email = action.payload.email;
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.status = "loading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.message = action.payload.message;
    },
    [signUp.rejected]: (state, action) => {
      state.status = "rejected";
      state.message = action.payload.message;
    },

    [signIn.pending]: (state) => {
      state.status = "loading";
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.message = action.payload.message;
      state.token = action.payload.data.token;
      state.userId = action.payload.data.user._id;
      state.userName = action.payload.data.user.userName;
      state.userImage = action.payload.data.user.userImage;
      state.email = action.payload.data.user.email;

      localStorage.setItem(
        "chatUserDetails",
        JSON.stringify({
          token: action.payload.data.token,
          userId: action.payload.data.user._id,
          userName: action.payload.data.user.userName,
          userImage: action.payload.data.user.userImage,
          email: action.payload.data.user.email,
        })
      );
    },
    [signIn.rejected]: (state, action) => {
      state.status = "rejected";
      state.message = action.payload.message;
    },
  },
});

export const { resetauthSlice, signInfromLocalStorage } = authSlice.actions;

export default authSlice.reducer;
