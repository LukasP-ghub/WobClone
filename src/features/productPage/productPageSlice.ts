import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { db } from '../../firebase';

interface ProductPageState {
  showSidePanel: boolean,
  product: any,
  sidePanelContent: {
    title: string,
    subtitle: string | null,
    body: string,
  },
  error: any,
  status: string,
  currentRequestId: any,
}

const initialState: ProductPageState = {
  showSidePanel: false,
  product: null,
  sidePanelContent: {
    title: '',
    subtitle: '',
    body: '',
  },
  error: null,
  status: 'idle',
  currentRequestId: undefined,
}

export const fetchProduct = createAsyncThunk(
  'ebook/getDataStatus',
  async (params: any, { getState, requestId }) => {
    //const { currentRequestId, status } = getState().catalog;

    // const tags = getState().productMiniCard.productTags;
    /*if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }*/

    let output = null;
    let ebooksRef = await db.collection("ebooks")
      .where("id", "==", params.id).get();

    await ebooksRef.forEach((doc) => {
      output = doc.data();
    });

    return output;
  }
)

/* --- SLICE --- */

export const productPageSlice = createSlice({
  name: 'productPage',
  initialState,
  reducers: {
    setShowSidePanel: (state) => {
      state.showSidePanel = !state.showSidePanel;
    },
    setSidePanelContent: (state, action: PayloadAction<any>) => {
      state.sidePanelContent = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.product = null;
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.status = 'idle';
      state.currentRequestId = undefined;
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    })
  }
});

/*  --- SELECTORS ---  */
export const selectProduct = (state: RootState) => state.productPage.product;
export const selectShowSidePanel = (state: RootState) => state.productPage.showSidePanel;
export const selectSidePanelContent = (state: RootState) => state.productPage.sidePanelContent;

/* --- ACTIONS --- */
export const { setShowSidePanel, setSidePanelContent } = productPageSlice.actions;

export default productPageSlice.reducer;
