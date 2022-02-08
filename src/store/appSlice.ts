import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type containerState = {
  categories: { category: string, popular: string }[],
}

const initialState: containerState = {
  categories: [
    {
      category: '',
      popular: ''
    }
  ],
}

export const appSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {

  },
});

export const selectShowSearchBar = (state: RootState) => state.searcher.showSearchBar;

export default appSlice.reducer;
