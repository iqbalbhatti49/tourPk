import { configureStore } from '@reduxjs/toolkit'
import { cart, pacakage, checkout, pricing, bookings, user, contract, cities, help, blogs, comments } from './index'
import logger from 'redux-logger';

export const store = configureStore({
   reducer: {
      cart, pacakage, checkout, pricing, user, bookings, contract, cities, help, blogs, comments
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


// import { configureStore } from '@reduxjs/toolkit'
// import { cart, pacakage, checkout, pricing, bookings, user, contract, cities, help, blogs } from './index'
// import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//    key: 'root',
//    storage,
// }
// const rootReducer = {
//    cart, pacakage, checkout, pricing, user, bookings, contract, cities, help, blogs, comments
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//    reducer: persistedReducer,
//    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// })

// export const persistor = persistStore(store)