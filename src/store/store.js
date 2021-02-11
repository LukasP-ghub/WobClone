import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import navigationReducer from '../features/navigation/navigationSlice';
import sliderReducer from '../features/slider/sliderSlice';
import searcherReducer from '../features/searcher/searcherSlice';

const reducer = combineReducers({
  navigation: navigationReducer,
  slider: sliderReducer,
  searcher: searcherReducer
})

const store = configureStore({
  reducer,
})
export default store;