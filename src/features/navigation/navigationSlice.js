import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    categories: ['Akcja', 'Kryminał', 'Fantastyka'],
    isVisible: false,
    isVisibleCat: false,
  },
  reducers: {
    showSidePanel: state => {
      state.isVisible = !state.isVisible;
    },
    showCatSidePanel: state => {
      state.isVisibleCat = !state.isVisibleCat;
    },
  },
});

export const { showSidePanel, showCatSidePanel } = navigationSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
/*export const incrementAsync = amount => dispatch => {
  setTimeout(() => {

  }, 1000);
};
*/
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCategories = state => state.navigation.categories;
export const selectIsVisible = state => state.navigation.isVisible;
export const selectIsVisibleCat = state => state.navigation.isVisibleCat;

export default navigationSlice.reducer;
