
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   currentBookings: [
      {
         bookingId: 1,
         packageName: "Winter tour",
         customerName: "Miss Maryam",
         contact: "+92 321111111",
         cnic: "35202 xxxxxxxx",
         date: "01-02-2023"
      },
      {
         bookingId: 2,
         packageName: "Summer tour",
         customerName: "Mrs. Wahab",
         contact: "+92 321000000",
         cnic: "35202 xxxxxxxx",
         date: "01-02-2022"
      },
      {
         bookingId: 3,
         packageName: "Spring tourista",
         customerName: "Mr. Arham Saad",
         contact: "+92 321010101",
         cnic: "35202 xxxxxxxx",
         date: "01-07-2022"
      }
   ],
   pastBookings: [
      {
         bookingId: 1,
         packageName: "Winter tour",
         customerName: "Miss Maryam",
         contact: "+92 321111111",
         cnic: "35202 xxxxxxxx",
         date: "01-02-2023"
      },
      {
         bookingId: 2,
         packageName: "Summer tour",
         customerName: "Mrs. Wahab",
         contact: "+92 321000000",
         cnic: "35202 xxxxxxxx",
         date: "01-02-2022"
      },
      {
         bookingId: 3,
         packageName: "Spring tourista",
         customerName: "Mr. Arham Saad",
         contact: "+92 321010101",
         cnic: "35202 xxxxxxxx",
         date: "01-07-2022"
      }
   ],
   totalBookings: 6,
   totalEarnings: 10000
};

export const bookingsSlice = createSlice({
   name: 'bookings',
   initialState,
   reducers: {
      
   },
});

export const { } = bookingsSlice.actions;

export default bookingsSlice.reducer;
