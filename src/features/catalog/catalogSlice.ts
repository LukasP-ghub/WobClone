import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { FilterEbookQuery, ProductModel, Promotions } from '../../types/types';
import { sorting } from '../../utils/sorting';

// export type filtersT = {
//   category: string,
//   promotion: 'true' | '',
// }

// export type filterType<Type extends filtersT> = keyof Type;

// type setFiltersType<Type extends filtersT> = {
//   filter: filterType<Type>;
//   value: string,
// }

// type filtersType<Type extends filtersT> = {
//   [prop in keyof Type]: string;
// }

interface catalogState {
  filteredProducts: ProductModel[],
  //filters: filtersType<filtersT>,
  filters:FilterEbookQuery,
  onPromotion: boolean,
  showFilterOptions: boolean,
  showCategoriesPanel: boolean,
}

const initialState: catalogState = {
  filteredProducts: [],
  // filters: {
  //   category: '',
  //   promotion: '',
  // },
  filters:{},
  onPromotion: false,
  showFilterOptions: false,
  showCategoriesPanel: false,
}


export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setShowFilterOptions: (state) => {
      state.showFilterOptions = !state.showFilterOptions;
    },
    setShowCategoriesPanel: (state) => {
      state.showCategoriesPanel = !state.showCategoriesPanel;
    },
    // setFilters: (state, action: PayloadAction<setFiltersType<filtersT>>) => {
    //   state.filters[action.payload.filter] = action.payload.value;
    // },
    setFilters: (state, action: PayloadAction<FilterEbookQuery>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setOnPromotion: (state, action: PayloadAction<boolean>) => {
      state.onPromotion = action.payload;
    },
    sortProducts: (state, action) => {
      state.filteredProducts = sorting(state.filteredProducts, action.payload);
    },
    filterProducts: (state, action: PayloadAction<{ products: ProductModel[], promotions: Promotions }>) => {
      const promCategories = Object.keys(action.payload.promotions.category);
      const tempArr: ProductModel[] = [];
      

      // action.payload.products.reduce((acc, item) => {
      //   let flag = true;
      //   const newItem = { ...item };
      //   if (state.filters.promotion) {
      //     flag = promCategories.includes(item.category);
      //     newItem.discount = action.payload.promotions.category[item.category];
      //   }
      //   if (state.filters.category) {
      //     flag = item.category === state.filters.category;
      //   }
      //   if (flag) tempArr.push(newItem);
      //   return acc++;
      // }, 0);
      state.filteredProducts = tempArr;
    }
  },
});


export const selectShowFilterOptions = (state: RootState) => state.catalog.showFilterOptions;
export const selectShowCategoriesPanel = (state: RootState) => state.catalog.showCategoriesPanel;
export const selectFilteredProducts = (state: RootState) => state.catalog.filteredProducts;
export const selectFilters = (state: RootState) => state.catalog.filters;
export const selectOnPromotion = (state: RootState) => state.catalog.onPromotion;


export const { setShowFilterOptions, setShowCategoriesPanel, setFilters, sortProducts, filterProducts,setOnPromotion } = catalogSlice.actions;
export default catalogSlice.reducer;
