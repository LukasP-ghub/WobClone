import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { db } from '../../firebase';
import { sorting } from '../../helpers/sorting';
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
  async (params: { productsCount: number, category: string }, { getState }) => {
    //const { currentRequestId, status } = getState().catalog;
    /*if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }*/
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

      const response = await ebooksRef.forEach((doc: any) => {
        output.push(doc.data());
      });
    }
    console.log('output' + output);
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
      state.products = [];
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    })
    builder.addCase(fetchRandomEbooks.fulfilled, (state, action) => {
      state.products = [...action.payload];
      state.status = 'idle';
      state.currentRequestId = undefined;
    })
    builder.addCase(fetchRandomEbooks.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    })
  }
});

//export const { } = sliderSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state: RootState) => state.slider.products;



export default sliderSlice.reducer;
