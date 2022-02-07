import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type containerState = {
  categories: { category: string, popular: string }[],
}

const initialState: containerState = {
  categories: [
    {
      category: '',
      popular: ''
    }
  ],
}

export const containerSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {

  },
});

export default containerSlice.reducer;
