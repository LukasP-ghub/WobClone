import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


import containerReducer from './containerSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import searcherReducer from '../features/searcher/searcherSlice';
import catalogReducer from '../features/catalog/catalogSlice';
import productDetailsReducer from '../features/productDetails/productDetailsSlice';
import { apiSlice } from '../services/apiSlice';


const rootReducer = combineReducers({
  container: containerReducer,
  navigation: navigationReducer,
  searcher: searcherReducer,
  catalog: catalogReducer,
  productDetails: productDetailsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;