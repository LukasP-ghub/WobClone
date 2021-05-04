import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


import containerReducer from '../containers/containerSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import sliderReducer from '../features/slider/sliderSlice';
import searcherReducer from '../features/searcher/searcherSlice';
import catalogReducer from '../features/catalog/catalogSlice';
import productPageReducer from '../features/productPage/productPageSlice';
import productCardReducer from '../commonComponents/productCard/productCardSlice';



const reducer = combineReducers({
  container: containerReducer,
  navigation: navigationReducer,
  slider: sliderReducer,
  searcher: searcherReducer,
  catalog: catalogReducer,
  productPage: productPageReducer,
  productCard: productCardReducer,
})

const store = configureStore({
  reducer,
})
export default store;