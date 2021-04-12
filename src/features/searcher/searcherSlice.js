import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase';
import { sorting } from '../../helpers/sorting';

export const fetchForSearch = createAsyncThunk(
  'searchEbook/getDataStatus',
  async (params, { getState, requestId }) => {

    let output = [];
    let ebooksRef = await db.collection("ebooks").get();

    const response = await ebooksRef.forEach((doc) => {
      output.push(doc.data());
    });
    output = sorting(output, 'alphabetical');
    return output;
  }
)


/* --- SLICE --- */

export const searcherSlice = createSlice({
  name: 'searcher',
  initialState: {
    ebooks: [],
    searchResults: [],
    searchKey: '',
    showSearchBar: false,
    error: null,
    status: 'idle',
  },
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setShowSearchBar: (state) => {
      state.showSearchBar = !state.showSearchBar;
    }
  },
  extraReducers: {
    [fetchForSearch.pending]: (state, action) => {
      state.ebooks = [];
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    },
    [fetchForSearch.fulfilled]: (state, action) => {
      state.ebooks.push(...action.payload);
      state.status = 'idle';
      state.currentRequestId = undefined;
    },
    [fetchForSearch.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    },
  }
});

/* --- SELECTORS --- */

export const selectEbooks = state => state.searcher.ebooks;
export const selectSearchKey = state => state.searcher.searchKey;
export const selectSearchResults = state => state.searcher.searchResults;
export const selectShowSearchBar = state => state.searcher.showSearchBar;

/* --- EXPORTS --- */

export const { setSearchKey, setSearchResults, setShowSearchBar } = searcherSlice.actions;
export default searcherSlice.reducer;
