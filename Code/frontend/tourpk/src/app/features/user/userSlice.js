import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   id: '',
   name: '',
   email: '',
   password: '',
   phoneNumber: '',
   role: '',
   businessTitle: '',
   loggedIn: false,
};

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
   const response = await axios.post('/auth/logout');
   return response.data;
});

export const login = createAsyncThunk('user/login', async (user) => {
   try {
      const response = await axios.post('/auth/login', user);
      console.log("user login response: ", response.data);
      return response.data;
   }
   catch (err) {
      console.log(err);
   }
});

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      updateUser: (state, action) => {
         state.name = action.payload.name;
         state.role = action.payload.userType;
         if (action.payload.userType == "seller")
            state.businessTitle = action.payload.businessTitle;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(logoutUser.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(logoutUser.fulfilled, (state, action) => {
            state.loggedIn = false;
            state.name = '';
            state.email = '';
            state.businessTitle = '';
         })
         .addCase(logoutUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.code;
         })
         .addCase(login.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(login.fulfilled, (state, action) => {
            state.loggedIn = true;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.businessTitle = action.payload.businessTitle;
         })
         .addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         });
   }
});

export const { updateUser, loginUser } = userSlice.actions;
export default userSlice.reducer;