import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   username: '',
   email: '',
   questionTitle: '',
   questionDescription: '',
   file: null,
   status: '',
   error: null,
};

export const helpRequest = createAsyncThunk(
   'help/helpRequest',
   async (formData, thunkAPI) => {
      try {
         const fd = new FormData();
         fd.append("file", formData.file);
         const res = await axios.post("/upload", fd);
         formData.file = res.data;
      }
      catch (err) {
         console.log(err);
      }
      try {
         const response = await axios.post('http://localhost:8080/help/', formData);
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
