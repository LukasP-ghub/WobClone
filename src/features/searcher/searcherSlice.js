import { createSlice } from '@reduxjs/toolkit';

export const searcherSlice = createSlice({
  name: 'searcher',
  initialState: {
    authors: ['Kowalski', 'Nowak', 'Brzęczyszkiewicz', 'Nowakowski', 'Pelczar'],
    filterResults: { filteredAuthors: [] },
    filterKey: '',
  },
  reducers: {
    setFilterKey: (state, action) => {
      state.filterKey = action.payload;
    },
    setFilterResults: (state, action) => {
      state.filterResults.filteredAuthors = action.payload;
    }
  },
});

export const { setFilterKey, setFilterResults } = searcherSlice.actions;

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

export const selectAuthors = state => state.searcher.authors;
export const selectFilterKey = state => state.searcher.filterKey;
export const selectFilterResults = state => state.searcher.filterResults;


export default searcherSlice.reducer;
