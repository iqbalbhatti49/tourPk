// import { configureStore } from '@reduxjs/toolkit'
// import { cart, pacakage, checkout, pricing, bookings, user, contract, cities, help, blogs, comments } from './index'
// import logger from 'redux-logger';

// export const store = configureStore({
//    reducer: {
//       cart, pacakage, checkout, pricing, user, bookings, contract, cities, help, blogs, comments
//    },
//    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
// })


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cart, pacakage, checkout, pricing, bookings, user, contract, cities, help, blogs, comments } from './index'
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   storage,
}
const rootReducer = combineReducers({
   cart, pacakage, checkout, pricing, user, bookings, contract, cities, help, blogs, comments
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk, logger]
})
export const persistor = persistStore(store) //persists and rehydrates the state