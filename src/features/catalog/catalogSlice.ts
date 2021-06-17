import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { db } from '../../firebase';
import { sorting } from '../../helpers/sorting';
import ProductModel from '../../helpers/types/ProductModel';

interface setFiltersType {
  filter: string,
  value: string
}

interface catalogState {
  filteredEbooks: ProductModel[],
  filters: {
    categoryFilter: string,
    promotion: 'true' | '',
    [key: string]: string
  },
  showFilterOptions: boolean,
  showCategoriesPanel: boolean,
  error: any,
  status: string,
  currentRequestId: any,
}

const initialState: catalogState = {
  filteredEbooks: [],
  filters: {
    categoryFilter: '',
    promotion: '',
  },
  showFilterOptions: false,
  showCategoriesPanel: false,
  error: null,
  status: 'idle',
  currentRequestId: undefined,
}

export const fetchEbooks = createAsyncThunk<any, any, { state: RootState }>(
  'ebooks/getDataStatus',
  async (params: any, { getState, requestId }) => {
    const { currentRequestId, status } = getState().catalog;
    const getFilters = getState().catalog.filters;

    if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    let output: any = [];
    let ebooksRef;

    if (getFilters.categoryFilter === 'Wszystkie Ebooki') {
      ebooksRef = await db.collection("ebooks").get();
    } else {
      ebooksRef = await db.collection("ebooks").where("category", "==", getFilters.categoryFilter).get();
    }

    await ebooksRef.forEach((doc) => {
      output.push(doc.data());
    });

    output = sorting(output, 'alphabetical');
    return output;
  }
)

/* --- SLICE --- */

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setShowFilterOptions: (state) => {
      state.showFilterOptions = !state.showFilterOptions;
    },
    setShowCategoriesPanel: (state) => {
      state.showCategoriesPanel = !state.showCategoriesPanel;
    },
    setFilters: (state, action: PayloadAction<setFiltersType>) => {
      state.filters[action.payload.filter] = action.payload.value;
    },
    sortEbooks: (state, action) => {
      state.filteredEbooks = sorting(state.filteredEbooks, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEbooks.pending, (state, action) => {
      if (state.status === 'idle') {
        state.filteredEbooks = [];
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    })
    builder.addCase(fetchEbooks.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.filteredEbooks.push(...action.payload);
        state.status = 'idle';
        state.currentRequestId = undefined;
      }
    })
    builder.addCase(fetchEbooks.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.status = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    })
  }
});

/* --- SELECTORS --- */

export const selectShowFilterOptions = (state: RootState) => state.catalog.showFilterOptions;
export const selectShowCategoriesPanel = (state: RootState) => state.catalog.showCategoriesPanel;
export const selectFilteredEbooks = (state: RootState) => state.catalog.filteredEbooks;
export const selectFilters = (state: RootState) => state.catalog.filters;
export const selectError = (state: RootState) => state.catalog.error;

export const selectCategories = (state: RootState) => state.container.categories;

/* --- EXPORTS --- */

export const { setShowFilterOptions, setShowCategoriesPanel, setFilters, sortEbooks } = catalogSlice.actions;
export default catalogSlice.reducer;
