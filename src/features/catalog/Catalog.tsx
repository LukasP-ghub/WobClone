import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../types/hooks';

import { useGetEbooksQuery, useGetPromotionsQuery } from '../../services/apiSlice';
import { sortProducts, filterProducts, setFilters } from './catalogSlice';
import { selectFilteredProducts, selectFilters } from './catalogSlice';

import { ProductModel } from '../../types/types';

import ProductCard from '../../components/productCard/ProductCard';
import { ActiveFilters } from './ActiveFilters';
import FilterOptions from './FilterOptions';
import { CategoriesList } from './CategoriesList';
import Pagination from './Pagination';
import styles from './Catalog.module.scss';

const { containerCards, containerCardsWrapper, wrapper } = styles;


const Catalog: React.FC<{ location: any }> = ({ location }) => {
  const { data: ebooksData = [] } = useGetEbooksQuery('');
  const { data: promotionsData } = useGetPromotionsQuery('');
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector(selectFilteredProducts);
  const filters = useAppSelector(selectFilters);
  const searchQuery = location.search;
  const filterTag: string = location.state?.tag ?? '';

  let itemsPerPage = 4;
  let pagesCount: number = Math.ceil(filteredProducts.length / itemsPerPage) || 0;
  let displayProducts: ProductModel[] = filteredProducts.slice(itemsPerPage * page - itemsPerPage, itemsPerPage * page) || [];

  useEffect(() => {
    dispatch(setFilters({ filter: 'category', value: filterTag }))
  }, [filterTag, dispatch])

  useEffect(() => {
    if (promotionsData) {
      dispatch(filterProducts({ products: ebooksData, promotions: promotionsData }));
    }
  }, [filters, ebooksData, promotionsData, dispatch])

  useEffect(() => {
    const query = new URLSearchParams(searchQuery);
    for (let param of query.entries()) {
      dispatch(sortProducts(param[1]));
    }
  }, [searchQuery, dispatch]);

  return (
    <div className={wrapper}>
      <ActiveFilters />
      <div className={containerCardsWrapper}>
        <ul className={containerCards}>
          {displayProducts.length > 0 && displayProducts.map(ebook => {
            return <ProductCard key={ebook.id} ebook={ebook} cardStyleVersion='full' />
          })}
        </ul>
        {displayProducts.length && <Pagination pagesCount={pagesCount} page={page} setPage={setPage} />}
      </div>

      <FilterOptions />
      <CategoriesList />
    </div>
  );
}

export default Catalog;

