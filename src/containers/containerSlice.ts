import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { RootState } from '../store/store';

type containerState = {
  categories: { category: string, popular: string }[],
  status: string,
  currentRequestId: any,
  error: any,
}

const initialState: containerState = {
  categories: [
    {
      category: '',
      popular: ''
    }
  ],
  status: 'idle',
  currentRequestId: undefined,
  error: null,
}

export const fetchCategories = createAsyncThunk<any, any, { state: RootState }>(
  'categories/getCategoriesStatus',
  async (params: any, { getState, requestId }) => {
    const { currentRequestId, status } = getState().container;
    if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }
    let output: any = [];
    const categoriesRef = await db.collection("categories").get();
    await categoriesRef.forEach((doc) => {
      output.push(doc.data());
    })
    return output;
  }
)

/* --- SLICE --- */

export const containerSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      if (state.status === 'idle') {
        state.categories = [];
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.categories = [...action.payload];
        state.status = 'idle';
        state.currentRequestId = undefined;
      }
    })
    builder.addCase(fetchCategories.rejected, (state, action) => {
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
export const selectError = (state: RootState) => state.container.error;

/* --- EXPORTS --- */
//export const { } = sliderSlice.actions;

export default containerSlice.reducer;
