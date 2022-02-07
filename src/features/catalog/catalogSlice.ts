import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { sorting } from '../../utils/sorting';
import { Promotions, ProductModel } from '../../types/types';

export type filtersT = {
  category: string,
  promotion: 'true' | '',
}

export type filterType<Type extends filtersT> = keyof Type;

type setFiltersType<Type extends filtersT> = {
  filter: filterType<Type>;
  value: string,
}

type filtersType<Type extends filtersT> = {
  [prop in keyof Type]: string;
}

interface catalogState {
  filteredProducts: ProductModel[],
  filters: filtersType<filtersT>,
  showFilterOptions: boolean,
  showCategoriesPanel: boolean,
}

const initialState: catalogState = {
  filteredProducts: [],
  filters: {
    category: '',
    promotion: '',
  },
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
    setFilters: (state, action: PayloadAction<setFiltersType<filtersT>>) => {
      state.filters[action.payload.filter] = action.payload.value;
    },
    sortProducts: (state, action) => {
      state.filteredProducts = sorting(state.filteredProducts, action.payload);
    },
    filterProducts: (state, action: PayloadAction<{ products: ProductModel[], promotions: Promotions }>) => {
      const promCategories = Object.keys(action.payload.promotions.category);
      state.filteredProducts = action.payload.products.filter(item => {
        let flag = true;
        if (state.filters.promotion) {
          flag = promCategories.includes(item.category);
          item.discount = action.payload.promotions.category[item.category];
        }
        if (state.filters.category) {
          flag = item.category === state.filters.category;
        }
        return flag;
      });
    }
  },
});


export const selectShowFilterOptions = (state: RootState) => state.catalog.showFilterOptions;
export const selectShowCategoriesPanel = (state: RootState) => state.catalog.showCategoriesPanel;
export const selectFilteredProducts = (state: RootState) => state.catalog.filteredProducts;
export const selectFilters = (state: RootState) => state.catalog.filters;


export const { setShowFilterOptions, setShowCategoriesPanel, setFilters, sortProducts, filterProducts } = catalogSlice.actions;
export default catalogSlice.reducer;
