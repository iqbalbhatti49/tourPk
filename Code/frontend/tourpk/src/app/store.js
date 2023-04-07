import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import pacakageReducer from './features/pacakage/pacakageSlice'
import checkoutReducer from './features/checkout/checkoutSlice'
import pricingReducer from './features/pricing/pricingSlice'
import logger from 'redux-logger';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      pacakage: pacakageReducer,
      checkout: checkoutReducer,
      pricing: pricingReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
