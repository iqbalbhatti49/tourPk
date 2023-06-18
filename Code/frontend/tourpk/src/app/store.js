import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cart, pacakage, checkout, pricing, bookings, user, help, blogs, comments, service } from './index'
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   storage,
}
const rootReducer = combineReducers({
   cart, pacakage, checkout, pricing, user, bookings, help, blogs, comments, service
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk, logger]
})
export const persistor = persistStore(store) 