import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { db } from '../../firebase';
import ProductModel from '../../helpers/types/ProductModel';

// Define a type for the slice state
interface SliderState {
  products: ProductModel[],
  status: string,
  currentRequestId: any,
  error: any,
}

export const fetchRandomEbooks = createAsyncThunk<any, any, { state: RootState }>(
  'sliderEbooks/getDataStatus',
  async (params: { productsCount: number, category: string }, { getState, requestId }) => {
    const { currentRequestId, status } = getState().slider;
    if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }

    let output: any = [];
    const IDarr: number[] = [];
    let ebooksRef: any;

    for (let i = 0; IDarr.length < params.productsCount; i++) {
      let randomID: number = Math.floor(Math.random() * (50 - 1) + 1);
      if (IDarr.includes(randomID)) {
        continue;
      } else {
        IDarr.push(randomID);
      }
    }
    for (let i = 0; i <= params.productsCount; i += 10) {
      const endIndex = i + 10;
      const IDarrPortion = IDarr.slice(i, endIndex);
      if (params.category === 'Wszystkie Ebooki') {
        ebooksRef = await db.collection("ebooks").where("id", "in", IDarrPortion).get();
      } else {
        ebooksRef = await db.collection("ebooks").where("category", "==", params.category).where("id", "in", IDarrPortion).get();
      }

      await ebooksRef.forEach((doc: any) => {
        output.push(doc.data());
      });
    }

    return output;
  }
)


// Define the initial state using that type
const initialState: SliderState = {
  products: [],
  status: 'idle',
  currentRequestId: undefined,
  error: null,
}


export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomEbooks.pending, (state, action) => {
      if (state.status === 'idle') {
        state.products = [];
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    })
    builder.addCase(fetchRandomEbooks.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.products = [...action.payload];
        state.status = 'idle';
        state.currentRequestId = undefined;
      }
    })
    builder.addCase(fetchRandomEbooks.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.status = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    })
  }
});

//export const { } = sliderSlice.actions;

export const selectProducts = (state: RootState) => state.slider.products;
export const selectError = (state: RootState) => state.slider.error;



export default sliderSlice.reducer;
