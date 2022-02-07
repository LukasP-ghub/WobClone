import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { db } from '../../services/firebase';
import { sorting } from '../../utils/sorting';
import { ProductModel } from '../../types/types';

export interface SearchResultsPayload {
  linkPathName: string;
  linkContent: {
    title: string | null;
    authorFirstName: string;
    authorLastName: string;
  };
  linkState: {
    authorFirstName: string;
    authorLastName: string;
    title?: string;
  };
}
interface SearcherState {
  searchResults: SearchResultsPayload[] | [],
  searchKey: string,
  showSearchBar: boolean,
}

const initialState: SearcherState = {
  searchResults: [],
  searchKey: '',
  showSearchBar: false,
}

export const searcherSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<SearchResultsPayload[] | []>) => {
      state.searchResults = action.payload;
    },
    setShowSearchBar: (state, action: PayloadAction<boolean | undefined>) => {
      state.showSearchBar = action.payload ?? !state.showSearchBar;
    }
  },
});

export const selectSearchKey = (state: RootState) => state.searcher.searchKey;
export const selectSearchResults = (state: RootState) => state.searcher.searchResults;
export const selectShowSearchBar = (state: RootState) => state.searcher.showSearchBar;

export const { setSearchKey, setSearchResults, setShowSearchBar } = searcherSlice.actions;
export default searcherSlice.reducer;
