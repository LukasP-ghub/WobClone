import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase';
import { sorting } from '../../helpers/sorting';



export const fetchEbooks = createAsyncThunk(
  'ebooks/getDataStatus',
  async (params, { getState, requestId }) => {
    //const { currentRequestId, status } = getState().catalog;
    const getFilters = getState().catalog.filters;

    /*if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }*/
    let output = [];
    let ebooksRef;

    if (getFilters.categoryFilter === 'Wszystkie Ebooki') {
      ebooksRef = await db.collection("ebooks").get();
    } else {
      console.log(getFilters.categoryFilter);
      ebooksRef = await db.collection("ebooks").where("category", "==", getFilters.categoryFilter).get();
    }

    const response = await ebooksRef.forEach((doc) => {
      output.push(doc.data());
    });

    output = sorting(output, 'alphabetical');
    return output;
  }
)

/* --- SLICE --- */

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    filteredEbooks: [],
    filters: {
      categoryFilter: null,
      promotion: false,
    },
    showFilterOptions: false,
    showCategoriesPanel: false,
    error: null,
    status: 'idle',
    currentRequestId: undefined,
  },
  reducers: {
    setShowFilterOptions: (state) => {
      state.showFilterOptions = !state.showFilterOptions;
    },
    setShowCategoriesPanel: (state) => {
      state.showCategoriesPanel = !state.showCategoriesPanel;
    },
    setFilters: (state, action) => {
      state.filters[action.payload.filter] = action.payload.value === 'negation' ? !state.filters[action.payload.filter] : action.payload.value;
    },
    sortEbooks: (state, action) => {
      state.filteredEbooks = sorting(state.filteredEbooks, action.payload);
    },
  },
  extraReducers: {
    [fetchEbooks.pending]: (state, action) => {
      state.filteredEbooks = [];
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    },
    [fetchEbooks.fulfilled]: (state, action) => {
      state.filteredEbooks.push(...action.payload);
      state.status = 'idle';
      state.currentRequestId = undefined;
    },
    [fetchEbooks.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    },
  }
});

/* --- SELECTORS --- */

export const selectShowFilterOptions = state => state.catalog.showFilterOptions;
export const selectShowCategoriesPanel = state => state.catalog.showCategoriesPanel;
export const selectFilteredEbooks = state => state.catalog.filteredEbooks;
export const selectFilters = state => state.catalog.filters;

export const selectCategories = state => state.container.categories;
export const selectEbooks = state => state.container.ebooks;

/* --- EXPORTS --- */

export const { setShowFilterOptions, setShowCategoriesPanel, setFilters, sortEbooks } = catalogSlice.actions;
export default catalogSlice.reducer;
