import { configureStore } from '@reduxjs/toolkit'
import { cart, pacakage, checkout, pricing, bookings, user, contract, cities, help, blogs } from './index'
import logger from 'redux-logger';

export const store = configureStore({
   reducer: {
      cart, pacakage, checkout, pricing, user, bookings, contract, cities, help, blogs
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
