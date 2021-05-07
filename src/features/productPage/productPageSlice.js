import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase';

export const fetchProduct = createAsyncThunk(
  'ebook/getDataStatus',
  async (params, { getState, requestId }) => {
    //const { currentRequestId, status } = getState().catalog;

    // const tags = getState().productMiniCard.productTags;
    /*if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }*/

    let output = null;
    let ebooksRef = await db.collection("ebooks")
      .where("id", "==", params.id).get();

    const response = await ebooksRef.forEach((doc) => {
      output = doc.data();
    });

    return output;
  }
)

/* --- SLICE --- */

export const productPageSlice = createSlice({
  name: 'productPage',
  initialState: {
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
  },
  reducers: {
    setShowSidePanel: (state) => {
      state.showSidePanel = !state.showSidePanel;
    },
    setSidePanelContent: (state, action) => {
      state.sidePanelContent = action.payload;
    }
  },
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      state.product = null;
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.status = 'idle';
      state.currentRequestId = undefined;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    },
  }
});

/*  --- SELECTORS ---  */
export const selectProduct = state => state.productPage.product;
export const selectShowSidePanel = state => state.productPage.showSidePanel;
export const selectSidePanelContent = state => state.productPage.sidePanelContent;

/* --- ACTIONS --- */
export const { setShowSidePanel, setSidePanelContent } = productPageSlice.actions;

export default productPageSlice.reducer;
