import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/Api'

const initialState = {
   id: '',
   name: '',
   email: '',
   password: '',
   phoneNumber: '',
   role: '',
   businessTitle: '',
   loggedIn: false,
   token: null,
   phoneNumberVerified: false,
   emailVerified: false
};
export const login = createAsyncThunk('user/login', async (user) => {
   try {
      const response = await axiosInstance.post('/auth/login', user);
      return response.data;
   } catch (err) {
      if (err.response && err.response.status === 401) {
         throw new Error("401");
      } else {
         throw new Error(err.message);
      }
   }
});

export const forgotPassword = createAsyncThunk('user/ForgetPassword', async (email) => {
   try {
      const response = await axiosInstance.post('/auth/forgetPassword', email);
      return response.data;
   } catch (error) {
      throw error;
   }
});

export const resetPassword = createAsyncThunk('user/resetPassword', async (values) => {
   try {
      const pw = { password: values.password };
      const response = await axiosInstance.post(`/auth/resetPassword/${values.id}/:${values.token}`, pw);
      return response.data;
   } catch (error) {
      throw error;
   }
});

export const updatePhoneNumberVerification = createAsyncThunk(
   'user/updatePhoneNumberVerification',
   async (payload) => {
      const { userId, phoneNumber } = payload;
      try {
         const response = await axiosInstance.post('/auth/numberVerification', {
            phoneNumber,
            userId,
            phoneNumberVerified: true
         });
         return response.data;
      } catch (error) {
         throw error;
      }
   }
);

export const updateEmailVerification = createAsyncThunk(
   'user/updateEmailVerification',
   async (payload) => {
      const { userId, email } = payload;
      try {
         const response = await axiosInstance.post('/auth/emailVerification', {
            email,
            userId,
            emailVerified: true,
         });
         return response.data;
      } catch (error) {
         throw error;
      }
   }
);

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      updateUser: (state, action) => {
         state.name = action.payload.name;
         state.role = action.payload.userType;
         if (action.payload.userType == "seller")
            state.businessTitle = action.payload.businessTitle;
      },
      logout: (state) => {
         state.loggedIn = false;
         state.name = '';
         state.email = '';
         state.businessTitle = '';
         state.id = '';
         state.token = null;
         state.role = '';
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(login.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(login.fulfilled, (state, action) => {
            state.loggedIn = true;
            state.id = action.payload.user.id;
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
            state.businessTitle = action.payload.user.businessTitle;
            state.token = action.payload.token;
            state.role = action.payload.user.role;
            state.phoneNumber = action.payload.user.phoneNumber;
            state.phoneNumberVerified = action.payload.user.phoneNumberVerified;
            state.emailVerified = action.payload.user.emailVerified
         })
         .addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         })
         .addCase(updatePhoneNumberVerification.fulfilled, (state, action) => {
            state.phoneNumber = action.payload.phoneNumber;
            state.phoneNumberVerified = action.payload.phoneNumberVerified;
         })
         .addCase(updateEmailVerification.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.emailVerified = action.payload.emailVerified;
         })
   }
});

export const { updateUser, logout } = userSlice.actions;
export default userSlice.reducer;
