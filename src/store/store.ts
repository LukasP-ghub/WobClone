import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import catalogReducer from '../features/catalog/catalogSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import productDetailsReducer from '../features/productDetails/productDetailsSlice';
import searcherReducer from '../features/searcher/searcherSlice';
import { apiSlice } from '../services/apiSlice';
import { default as appSliceReducer, default as containerReducer } from './appSlice';
import authReducer from './authSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  container: containerReducer,
  navigation: navigationReducer,
  searcher: searcherReducer,
  catalog: catalogReducer,
  productDetails: productDetailsReducer,
  app: appSliceReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;