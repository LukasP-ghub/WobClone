import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase';

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

export const fetchCategories = createAsyncThunk(
  'categories/getCategoriesStatus',
  async (params: any, { getState, requestId }) => {
    // const { currentRequestId, status } = getState().container;
    // if (status !== 'pending' || requestId !== currentRequestId) {
    //   return;
    //  }
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
      state.categories = [];
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = [...action.payload];
      state.status = 'idle';
      state.currentRequestId = undefined;
    })
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    })
  }
});

/* --- SELECTORS --- */


/* --- EXPORTS --- */
//export const { } = sliderSlice.actions;

export default containerSlice.reducer;
