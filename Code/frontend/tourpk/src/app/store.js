import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import bookingReducer from './features/booking/bookingSlice'
import pacakageReducer from './features/pacakage/pacakageSlice'
import checkoutReducer from './features/checkout/checkoutSlice'
import logger from 'redux-logger';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      booking: bookingReducer,
      pacakage: pacakageReducer,
      checkout: checkoutReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
