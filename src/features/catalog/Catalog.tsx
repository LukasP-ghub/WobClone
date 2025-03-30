import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../types/hooks';

import { useLocation } from 'react-router-dom';
import { useGetEbooksQuery, useGetPromotionsQuery } from '../../services/apiSlice';
import { filterProducts, selectFilteredProducts, selectFilters, setFilters, sortProducts } from './catalogSlice';

import { ProductModel } from '../../types/types';

import ProductCard from '../../components/productCard/ProductCard';
import { ActiveFilters } from './ActiveFilters';
import styles from './Catalog.module.scss';
import { CategoriesList } from './CategoriesList';
import FilterOptions from './FilterOptions';
import Pagination from './Pagination';

const { containerCards, containerCardsWrapper, wrapper } = styles;


const Catalog: React.FC = () => {
  const { data: ebooksData = [] } = useGetEbooksQuery({});
  const { data: promotionsData } = useGetPromotionsQuery('');
  const [page, setPage] = useState<number>(1);
  const location = useLocation();

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
            return <ProductCard key={ebook.ebook_id} ebook={ebook} cardStyleVersion='full' />
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

