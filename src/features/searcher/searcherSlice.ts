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

export const fetchForSearch = createAsyncThunk<any, any, { state: RootState }>(
  'searchEbook/getDataStatus',
  async (params: any, { getState, requestId }) => {
    const { currentRequestId, status } = getState().searcher;
    if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    let output: any = [];
    let ebooksRef = await db.collection("ebooks").get();

    await ebooksRef.forEach((doc) => {
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
    setShowSearchBar: (state, action: PayloadAction<boolean | undefined>) => {
      state.showSearchBar = action.payload ?? !state.showSearchBar;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForSearch.pending, (state, action) => {
      if (state.status === 'idle') {
        state.ebooks = [];
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    })
    builder.addCase(fetchForSearch.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.ebooks.push(...action.payload);
        state.status = 'idle';
        state.currentRequestId = undefined;
      }
    })
    builder.addCase(fetchForSearch.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.status = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    })
  },
});

/* --- SELECTORS --- */

export const selectEbooks = (state: RootState) => state.searcher.ebooks;
export const selectSearchKey = (state: RootState) => state.searcher.searchKey;
export const selectSearchResults = (state: RootState) => state.searcher.searchResults;
export const selectShowSearchBar = (state: RootState) => state.searcher.showSearchBar;
export const selectError = (state: RootState) => state.searcher.error;

/* --- EXPORTS --- */

export const { setSearchKey, setSearchResults, setShowSearchBar } = searcherSlice.actions;
export default searcherSlice.reducer;
