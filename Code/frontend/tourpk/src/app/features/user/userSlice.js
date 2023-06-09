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
   discount: 0,
   advanedSupport:false
};

export const login = createAsyncThunk('user/login', async (user) => {
   try {
      const response = await axiosInstance.post('/auth/login', user);
      return response.data;
   }
   catch (err) {
      console.log(err);
   }
});

export const forgotPassword = createAsyncThunk('user/ForgetPassword', async (email) => {
   try {
      const response = await axiosInstance.post('/auth/forgetPassword', email);
      return response.data;
   }
   catch (err) {
      console.log(err);
   }
});

export const resetPassword = createAsyncThunk('user/resetPassword', async (values) => {
   try {
      const pw = { password: values.password };
      const response = await axiosInstance.post(`/auth/resetPassword/${values.id}/:${values.token}`, pw);
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
      },
      logout: (state, action) => {
         state.loggedIn = false;
         state.name = '';
         state.email = '';
         state.businessTitle = '';
         state.id = '';
         state.token = null;
         state.role = '';
         state.discount= 0;
         state.advanedSupport=false;
      }
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
            state.discount = action.payload.user.discount;
            state.advanedSupport = action.payload.user.advanedSupport;
         })
         .addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         });
   }
});

export const { updateUser, logout } = userSlice.actions;
export default userSlice.reducer;