import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface ProductDetailsState {
  showSidePanel: boolean,
  sidePanelContent: {
    title: string,
    subtitle: string | null,
    body: string,
  },
  extendPanel: boolean,
}

const initialState: ProductDetailsState = {
  showSidePanel: false,
  sidePanelContent: {
    title: '',
    subtitle: '',
    body: '',
  },
  extendPanel: false,
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
    },
    setExtendPanel: (state) => {
      state.extendPanel = !state.extendPanel;
    }
  },
});

export const selectShowSidePanel = (state: RootState) => state.productDetails.showSidePanel;
export const selectSidePanelContent = (state: RootState) => state.productDetails.sidePanelContent;
export const selectExtendPanel = (state: RootState) => state.productDetails.extendPanel;

export const { setShowSidePanel, setSidePanelContent, setExtendPanel } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
