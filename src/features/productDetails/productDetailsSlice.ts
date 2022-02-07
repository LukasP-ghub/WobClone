import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface ProductDetailsState {
  showSidePanel: boolean,
  sidePanelContent: {
    title: string,
    subtitle: string | null,
    body: string,
  },
}

const initialState: ProductDetailsState = {
  showSidePanel: false,
  sidePanelContent: {
    title: '',
    subtitle: '',
    body: '',
  },
}

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setShowSidePanel: (state) => {
      state.showSidePanel = !state.showSidePanel;
    },
    setSidePanelContent: (state, action: PayloadAction<any>) => {
      state.sidePanelContent = action.payload;
    }
  },
});

export const selectShowSidePanel = (state: RootState) => state.productDetails.showSidePanel;
export const selectSidePanelContent = (state: RootState) => state.productDetails.sidePanelContent;

export const { setShowSidePanel, setSidePanelContent } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
