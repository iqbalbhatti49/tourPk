import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   name: '',
   email: '',
   password: '',
   phoneNumber: '',
};


const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {

   },
});
export const { } = userSlice.actions;

export default pricingSlice.reducer;
