import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase';


export const fetchCategories = createAsyncThunk(
  'categories/getCategoriesStatus',
  async (params, { getState, requestId }) => {
    // const { currentRequestId, status } = getState().container;
    // if (status !== 'pending' || requestId !== currentRequestId) {
    //   return;
    //  }
    let output = [];
    const categoriesRef = await db.collection("categories").get();
    const response = await categoriesRef.forEach((doc) => {
      output.push(doc.data());
    })
    return output;
  }
)

/* --- SLICE --- */

export const containerSlice = createSlice({
  name: 'container',
  initialState: {
    ebooks: [],
    categories: [],
    status: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {

  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.ebooks = [];
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories.push(...action.payload);
      state.status = 'idle';
      state.currentRequestId = undefined;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    },
  }
});

/* --- SELECTORS --- */
export const selectEbooks = state => state.container.ebooks;

/* --- EXPORTS --- */
//export const { } = sliderSlice.actions;

export default containerSlice.reducer;
