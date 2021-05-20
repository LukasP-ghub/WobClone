import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

// Define a type for the slice state
interface SliderState {
  covers: string[],
  status: string,
  currentRequestId: any,
  error: any,
}

// Define the initial state using that type
const initialState: SliderState = {
  covers: ['Akcja', 'Kryminał', 'Fantastyka', 'sss', 'sas', 'wwqw', 'Bkcja', 'Kryminał', 'Fantastyka', 'sss', 'sas', 'wwqw'],
  status: 'idle',
  currentRequestId: undefined,
  error: null,
}

/*export const fetchCovers = createAsyncThunk(
  'users/getCoversStatus',
  async (endpoint, { getState, requestId }) => {
    const { currentRequestId, status } = getState().slider
    if (status !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await API.get(endpoint)
    return response.data
  }
)
*/

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {

  },
  /*extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchCovers.pending]: (state, action) => {
      state.covers = [];
      state.status = 'loading';
      state.currentRequestId = action.meta.requestId;
    },
    [fetchCovers.fulfilled]: (state, action) => {
      state.covers.push(action.payload);
      state.status = 'idle';
      state.currentRequestId = undefined;
    },
    [fetchCovers.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      state.currentRequestId = undefined;
    },
  }*/
});

//export const { } = sliderSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCovers = (state: RootState) => state.slider.covers;


export default sliderSlice.reducer;
