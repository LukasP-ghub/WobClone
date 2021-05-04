import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase';




export const productCardSlice = createSlice({
  name: 'productCard',
  initialState: {
    productTags: {
      title: '',
      authorFirstName: '',
      authorLastName: '',
    },
  },
  reducers: {
    setProductTags: (state, action) => {
      state.productTags.title = action.payload.title;
      state.productTags.authorFirstName = action.payload.authorFirstName;
      state.productTags.authorLastName = action.payload.authorLastName;
    }
  },
});

export const { setProductTags } = productCardSlice.actions;

export default productCardSlice.reducer;
