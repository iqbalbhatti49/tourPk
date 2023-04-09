import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import pacakageReducer from './features/pacakage/pacakageSlice'
import checkoutReducer from './features/checkout/checkoutSlice'
import pricingReducer from './features/pricing/pricingSlice'
import bookingsSlice from './features/bookings/bookingsSlice'
import userSlice from './features/user/userSlice'
import contractSlice from './features/contract/contractSlice'
import citiesSlice from './features/cities/citiesSlice'
import logger from 'redux-logger';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      pacakage: pacakageReducer,
      checkout: checkoutReducer,
      pricing: pricingReducer,
      user: userSlice,
      booking: bookingsSlice,
      contract: contractSlice,
      cities: citiesSlice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
