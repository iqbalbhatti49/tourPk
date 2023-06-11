import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/Api';

const initialState = {
  services: [],
  loading: false,
  error: null,
};

export const fetchServicesByUserId = createAsyncThunk(
  'services/fetchServicesByUserId',
  async ({ userId }) => {
    try {
      const response = await axiosInstance.get(`/service/getServicesByUserId/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServicesByUserId.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchServicesByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
