import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/Api';

const initialState = {
  cardInfo: {
    cardNumber: 0,
    expirationMonth: 0,
    expirationYear: 0,
    cardType: '001',
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
  error: "",
  paymentResult: true,
  totalAmount: 0,
};

export const initiatePayment = createAsyncThunk(
  'checkout/initiatePayment',
  async ({ cardInfo, billingAddress, orderComment, grandTotal }, { rejectWithValue }) => {
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
    try {
      const response = await axiosInstance.post('/payment/payment', request);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCardInfo = createAsyncThunk(
  'checkout/updateCardInfo',
  async ({ id, values }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/paymentInformation/updatepayment', { id, cardInfo: values });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBillingAddress = createAsyncThunk(
  'checkout/updateBillingAddress',
  async ({ id, values }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/billingAddress/updateAddress', { id, address: values });
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
    updateDiscountCode: (state, action) => {
      state.discountCode = action.payload;
    },
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
        state.paymentResult = true;
      })
      .addCase(initiatePayment.rejected, (state, action) => {
        state.status = 'failed';
        state.paymentResult = false;
      })
      .addCase(updateCardInfo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateCardInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cardInfo = action.payload.cardInfo;
      })
      .addCase(updateCardInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateBillingAddress.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateBillingAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.billingAddress = action.payload.billingAddress;
      })
      .addCase(updateBillingAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { updateDiscountCode } = checkoutSlice.actions;

export default checkoutSlice.reducer;
