import { createSlice } from '@reduxjs/toolkit';

/* --- SLICE --- */

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    isVisibleNavSP: false,
    isVisibleCatSP: false,
    status: 'idle',
  },
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

export const selectCategories = state => state.container.categories;
export const selectIsVisibleNavSP = state => state.navigation.isVisibleNavSP;
export const selectIsVisibleCatSP = state => state.navigation.isVisibleCatSP;

/* --- EXPORTS --- */

export const { showNavSidePanel, showCatSidePanel } = navigationSlice.actions;
export default navigationSlice.reducer;
