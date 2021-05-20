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

/* --- SLICE --- */

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

/* --- SELECTORS --- */

export const selectCategories = (state: RootState) => state.container.categories;
export const selectIsVisibleNavSP = (state: RootState) => state.navigation.isVisibleNavSP;
export const selectIsVisibleCatSP = (state: RootState) => state.navigation.isVisibleCatSP;

/* --- EXPORTS --- */

export const { showNavSidePanel, showCatSidePanel } = navigationSlice.actions;
export default navigationSlice.reducer;
