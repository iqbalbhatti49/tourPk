
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   paymentMethod: '',
   cardInfo: {
      cardNumber: '',
      expirationDate: '',
      securityNumber: '',
   },
   discountCode: '',
   orderComment: '',
   agreeToTerms: false,
};

export const checkoutSlice = createSlice({
   name: 'checkout',
   initialState,
   reducers: {
      updatePaymentMethod: (state, action) => {
         state.paymentMethod = action.payload;
      },
      updateExpirationDate: (state, action) => {
         state.cardInfo.expirationDate = action.payload;
      },
      updateSecurityNumber: (state, action) => {
         state.cardInfo.securityNumber = action.payload;
      },
      updateCardNumber: (state, action) => {
         state.cardInfo.cardNumber = action.payload;
      },
      updateDiscountCode: (state, action) => {
         state.discountCode = action.payload;
      },
      intiatePayment: (state, action) => {
         const { OrderComment, terms } = action.payload;
         state.orderComment = OrderComment;
         state.agreeToTerms = terms;
      }
   },
});

export const { updateCardNumber, updateDiscountCode, updatePaymentMethod, updateSecurityNumber, updateExpirationDate, intiatePayment } = checkoutSlice.actions;

export default checkoutSlice.reducer;
