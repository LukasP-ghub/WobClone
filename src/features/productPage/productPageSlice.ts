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

export const fetchProduct = createAsyncThunk<any, any, { state: RootState }>(
  'ebook/getDataStatus',
  async (params: any, { getState, requestId }) => {
    const { currentRequestId, status } = getState().productPage;
    if (status !== 'pending' || requestId !== currentRequestId) {
      return;
    }

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
      if (state.status === 'idle') {
        state.product = null;
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.product = action.payload;
        state.status = 'idle';
        state.currentRequestId = undefined;
      }
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.status = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    })
  }
});

/*  --- SELECTORS ---  */
export const selectProduct = (state: RootState) => state.productPage.product;
export const selectShowSidePanel = (state: RootState) => state.productPage.showSidePanel;
export const selectSidePanelContent = (state: RootState) => state.productPage.sidePanelContent;
export const selectError = (state: RootState) => state.productPage.error;

/* --- ACTIONS --- */
export const { setShowSidePanel, setSidePanelContent } = productPageSlice.actions;

export default productPageSlice.reducer;
