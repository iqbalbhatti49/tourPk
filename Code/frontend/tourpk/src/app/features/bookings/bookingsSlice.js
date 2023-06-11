import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  currentBookings: [],
  bookingStatus: 'idle', // Initial status is 'idle'
};

// Async thunk for making the API call
export const addTourGuideBooking = createAsyncThunk(
  'bookings/addTourGuideBooking',
  async ({ userId, id, totalPrice, selectedDate }) => {
    console.log(selectedDate);
    try {
      const response = await axios.post('/tourguide/addBooking', {
        userId,
        id,
        totalPrice,
        selectedDate,
      });

      return response.data; // You can handle the response data as needed
    } catch (error) {
      // Handle error case
      throw Error('Failed to add booking');
    }
  }
);

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTourGuideBooking.pending, (state, action) => {
      state.bookingStatus = 'loading'; // Set bookingStatus to 'loading' when the request is pending
    });
    builder.addCase(addTourGuideBooking.fulfilled, (state, action) => {
      // Update the local state with the new booking
      const newBooking = action.payload;
      state.currentBookings.push(newBooking);
      state.bookingStatus = 'succeeded'; // Set bookingStatus to 'succeeded' after successful booking
    });
    builder.addCase(addTourGuideBooking.rejected, (state, action) => {
      // Handle error case if needed
      state.bookingStatus = 'failed'; // Set bookingStatus to 'failed' if the request is rejected
    });
  },
});

export const {} = bookingsSlice.actions;

export default bookingsSlice.reducer;
