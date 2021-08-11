import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../../apiCall";
import { current } from "immer";

export const getAllContacts = createAsyncThunk(
  "contact/getAllContacts",
  async (dummy, { fulfillWithValue, rejectWithValue }) => {
    let response = await apiCall("GET", "contact");

    if (response.success) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(response);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "contact/addNewContact",
  async (contactDetails, { fulfillWithValue, rejectWithValue }) => {
    
    let response = await apiCall("POST", "contact/add", contactDetails);
    
    if (response.success) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(response);
    }
  }
);

const contactSlice = new createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    message: null,
    contacts: null,
    currentcontact: null,
  },
  reducers: {
    resetContactsSlice: () => {
      return {
        status: "idle",
        message: null,
        contacts: null,
        currentContact: null,
      };
    },
  },
  extraReducers: {
    [getAllContacts.pending]: (state) => {
      state.status = "loading";
    },
    [getAllContacts.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.message = action.payload.message;
      state.contacts = action.payload.data.contacts;
      
    },
    [getAllContacts.rejected]: (state, action) => {
      state.status = "rejected";
      state.message = action.payload.message;
    },

    [addNewContact.pending]: (state) => {
      
      state.status = "loading";
    },
    [addNewContact.fulfilled]: (state, action) => {
      
      state.status = "fullfilled";
      state.message = action.payload.message;
      if(state.contacts){
        state.contacts=[action.payload.data.newContact,...state.contacts]
      }else{
        state.contacts = [action.payload.data.newContact]
      }
      console.log(current(state));

      
      
    },
    [addNewContact.rejected]: (state, action) => {
      
      state.status = "rejected";
      state.message = action.payload.message;
    },
  },
});

export const { resetContactsSlice } = contactSlice.actions;

export default contactSlice.reducer;
