import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductCardState {
  productTags: {
    title: string,
    authorFirstName: string,
    authorLastName: string,
  }
}

const initialState: ProductCardState = {
  productTags: {
    title: '',
    authorFirstName: '',
    authorLastName: '',
  },
}


export const productCardSlice = createSlice({
  name: 'productCard',
  initialState,
  reducers: {
    setProductTags: (state, action: PayloadAction<{ title: string, authorFirstName: string, authorLastName: string }>) => {
      state.productTags.title = action.payload.title;
      state.productTags.authorFirstName = action.payload.authorFirstName;
      state.productTags.authorLastName = action.payload.authorLastName;
    }
  },
});

export const { setProductTags } = productCardSlice.actions;

export default productCardSlice.reducer;
