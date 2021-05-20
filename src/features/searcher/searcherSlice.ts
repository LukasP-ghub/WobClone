import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { db } from '../../firebase';
import { sorting } from '../../helpers/sorting';
import ProductModel from '../../helpers/types/ProductModel'

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
  ebooks: ProductModel[],
  searchResults: SearchResultsPayload[] | [],
  searchKey: string,
  showSearchBar: boolean,
  status: string,
  currentRequestId: any,
  error: any,
}

const initialState: SearcherState = {
  ebooks: [],
  searchResults: [],
  searchKey: '',
  showSearchBar: false,
  status: 'idle',
  currentRequestId: undefined,
  error: null,
}

export const fetchForSearch = createAsyncThunk(
  'searchEbook/getDataStatus',
  async (params, { getState, requestId }) => {

    let output: any = [];
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
  initialState,
  reducers: {
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<SearchResultsPayload[] | []>) => {
      state.searchResults = action.payload;
    },
    setShowSearchBar: (state) => {
      state.showSearchBar = !state.showSearchBar;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForSearch.pending, (state, action) => {
      state.ebooks = [];
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    })
    builder.addCase(fetchForSearch.fulfilled, (state, action) => {
      state.ebooks.push(...action.payload);
      state.status = 'idle';
      state.currentRequestId = undefined;
    })
    builder.addCase(fetchForSearch.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    })
  },
});

/* --- SELECTORS --- */

export const selectEbooks = (state: RootState) => state.searcher.ebooks;
export const selectSearchKey = (state: RootState) => state.searcher.searchKey;
export const selectSearchResults = (state: RootState) => state.searcher.searchResults;
export const selectShowSearchBar = (state: RootState) => state.searcher.showSearchBar;

/* --- EXPORTS --- */

export const { setSearchKey, setSearchResults, setShowSearchBar } = searcherSlice.actions;
export default searcherSlice.reducer;
