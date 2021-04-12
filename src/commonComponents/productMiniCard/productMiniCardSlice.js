import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase';




export const productMiniCardSlice = createSlice({
  name: 'productMiniCard',
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

export const { setProductTags } = productMiniCardSlice.actions;

export default productMiniCardSlice.reducer;
