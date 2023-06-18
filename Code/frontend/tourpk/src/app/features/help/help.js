import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/Api';

const initialState = {
   username: '',
   email: '',
   questionTitle: '',
   questionDescription: '',
   file: null,
   status: '',
   role :"",
   error: null,
   advancedSupport : false
};
export const helpRequest = createAsyncThunk(
   'help/helpRequest',
   async (formData, thunkAPI) => {
      try {
         const fd = new FormData();
         fd.append("file", formData.file);
         fd.append("role", formData.role); 
         fd.append("advancedSupport", formData.advancedSupport); 
         const res = await axiosInstance.post("/upload", fd);
         formData.file = res.data;
      }
      catch (err) {
         console.log(err);
      }
      const pricingState = thunkAPI.getState().pricing;
      const advancedSupport = pricingState.advancedSupport;
      formData.advancedSupport = advancedSupport; 
      try {
         const response = await axiosInstance.post('/help/', formData);
         return response.data;
      } catch (error) {
         console.error(error);
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);
export const helpSlice = createSlice({
   name: 'help',
   initialState,
   reducers: {
      setData: (state, action) => {
         state.username = action.payload.username;
         state.email = action.payload.email;
         state.questionTitle = action.payload.questionTitle;
         state.questionDescription = action.payload.questionDescription;
         state.file = action.payload.file;
         state.role = action.payload.role;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(helpRequest.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(helpRequest.fulfilled, (state) => {
            state.status = 'succeeded';
         })
         .addCase(helpRequest.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         });
   },
});
export const { setData } = helpSlice.actions;
export default helpSlice.reducer;
