import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const initialState = {
   paymentMethod: '',
   cardInfo: {
      cardNumber: '',
      expirationMonth: '',
      expirationYear: '',
      cardType: '',
   },
   discountCode: '',
   orderComment: '',
   billingAddress: {
      firstName: '',
      lastName: '',
      email: '',
      streetAddress1: '',
      city: '',
      zipCode: '',
      phoneNumber: '',
   },
   status: 'idle',
   error: null,
   paymentResult: null,
   totalAmount: 0,
};

export const initiatePayment = createAsyncThunk(
   'checkout/initiatePayment',
   async ({ cardInfo, billingAddress, orderComment, grandTotal }, { rejectWithValue }) => {
      console.log("from req " , cardInfo)
      var amount = grandTotal;
      amount = amount.replace('$', '');
      var request = {
         cardNumber: cardInfo.cardNumber,
         cardType: cardInfo.cardType,
         expirationMonth: cardInfo.expirationMonth,
         expirationYear: cardInfo.expirationYear,
         totalAmount: amount,
         firstName: billingAddress.firstName,
         lastName: billingAddress.lastName,
         address1: billingAddress.streetAddress1,
         city: billingAddress.city,
         email: billingAddress.email,
         phoneNumber: billingAddress.phoneNumber,
      };
      console.log(request)
      try {
         const response = await axios.post('http://localhost:8080/payment/payment', request);
         return response.data;
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
   }
);

export const checkoutSlice = createSlice({
   name: 'checkout',
   initialState,
   reducers: {
      updateCardInfo: (state, action) => {
         state.cardInfo = action.payload;
      },
      updateDiscountCode: (state, action) => {
         state.discountCode = action.payload;
      },
      updateBillingAddress: (state, action) => {
         state.billingAddress = action.payload;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(initiatePayment.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.paymentResult = null;
         })
         .addCase(initiatePayment.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.paymentResult = action.payload;
         })
         .addCase(initiatePayment.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         });
   },
});

export const {
   updateCardInfo,
   updateDiscountCode,
   updateBillingAddress
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
