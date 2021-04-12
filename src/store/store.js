import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


import containerReducer from '../containers/containerSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import sliderReducer from '../features/slider/sliderSlice';
import searcherReducer from '../features/searcher/searcherSlice';
import catalogReducer from '../features/catalog/catalogSlice';
import productMiniCardReducer from '../commonComponents/productMiniCard/productMiniCardSlice';
import productCardReducer from '../features/productCard/productCardSlice';

const reducer = combineReducers({
  container: containerReducer,
  navigation: navigationReducer,
  slider: sliderReducer,
  searcher: searcherReducer,
  catalog: catalogReducer,
  productMiniCard: productMiniCardReducer,
  productCard: productCardReducer,
})

const store = configureStore({
  reducer,
})
export default store;