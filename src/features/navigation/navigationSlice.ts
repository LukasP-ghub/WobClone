import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface NavigationState {
  isVisibleNavSP: boolean,
  isVisibleCatSP: boolean,
}

const initialState: NavigationState = {
  isVisibleNavSP: false,
  isVisibleCatSP: false,
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    showNavSidePanel: state => {
      state.isVisibleNavSP = !state.isVisibleNavSP;
    },
    showCatSidePanel: state => {
      state.isVisibleCatSP = !state.isVisibleCatSP;
    },
  },

});


export const selectIsVisibleNavSP = (state: RootState) => state.navigation.isVisibleNavSP;
export const selectIsVisibleCatSP = (state: RootState) => state.navigation.isVisibleCatSP;


export const { showNavSidePanel, showCatSidePanel } = navigationSlice.actions;
export default navigationSlice.reducer;
