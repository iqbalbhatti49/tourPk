import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../../utils/Api';


const initialState = {
  currentBookings: [],
  bookingStatus: 'idle', 
};

export const addTourGuideBooking = createAsyncThunk(
  'bookings/addTourGuideBooking',
  async ({ userId, id, totalPrice, selectedDate }) => {
    try {
      const response = await axios.post('/tourguide/addBooking', {
        userId,
        id,
        totalPrice,
        selectedDate,
      });
      return response.data; 
    } catch (error) {
      throw Error('Failed to add booking');
    }
  }
);

export const addTravelAgentBooking = createAsyncThunk(
  'bookings/addTravelAgentBooking',
  async ({ userId, id, selectedDate, totalPrice, guests }) => {
    try {
      const response = await axios.post('/travelAgent/addBooking', {
        userId,
        id,
        selectedDate,
        totalPrice,
        guestCount: guests,
      });
      return response.data; 
    } catch (error) {
      throw Error('Failed to add booking');
    }
  }
);

export const addHotelBooking = createAsyncThunk(
  'bookings/addHotelBooking',
  async ({ startDate, numberOfDays, totalPrice, userId, hotelId, roomId, endDate }) => {
    try {
      const response = await axiosInstance.post('/hotel/addBooking', {
        startDate,
        numberOfDays,
        totalPrice,
        userId,
        hotelId,
        roomId,
        endDate
      });
      return response.data; 
    } catch (error) {
      throw Error('Failed to add booking');
    }
  }
);

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTourGuideBooking.pending, (state) => {
      state.bookingStatus = 'loading'; 
    });
    builder.addCase(addTourGuideBooking.fulfilled, (state, action) => {
      const newBooking = action.payload;
      state.currentBookings.push(newBooking);
      state.bookingStatus = 'succeeded'; 
    });
    builder.addCase(addTourGuideBooking.rejected, (state) => {
      state.bookingStatus = 'failed'; 
    });
    builder.addCase(addTravelAgentBooking.pending, (state) => {
      state.bookingStatus = 'loading'; 
    });
    builder.addCase(addTravelAgentBooking.fulfilled, (state, action) => {
      const newBooking = action.payload;
      state.currentBookings.push(newBooking);
      state.bookingStatus = 'succeeded'; 
    });
    builder.addCase(addTravelAgentBooking.rejected, (state) => {
      state.bookingStatus = 'failed';
    });
    builder.addCase(addHotelBooking.pending, (state) => {
      state.bookingStatus = 'loading'; 
    });
    builder.addCase(addHotelBooking.fulfilled, (state, action) => {
      const newBooking = action.payload.newBooking;
      state.currentBookings.push(newBooking);
      state.bookingStatus = 'succeeded'; 
    });
    builder.addCase(addHotelBooking.rejected, (state) => {
      state.bookingStatus = 'failed'; 
    });
  },
});

export default bookingsSlice.reducer;
