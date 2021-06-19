import { lazy, Suspense, useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { setFilters, sortEbooks } from './catalogSlice';
import { selectFilteredEbooks, selectError } from './catalogSlice';
import { fetchEbooks } from './catalogSlice';

import styles from './Catalog.module.scss';
import ProductModel from '../../helpers/types/ProductModel';

const ProductCard = lazy(() => import('../../commonComponents/productCard/ProductCard'));
const ShowError = lazy(() => import('../../commonComponents/showError/ShowError'));
const Filters = lazy(() => import('./Filters'));
const FilterOptions = lazy(() => import('./FilterOptions'));
const FilterCategoriesPanel = lazy(() => import('./FilterCategoriesPanel'));
const Pagination = lazy(() => import('./Pagination'));

const { containerCards, containerCardsWrapper, wrapper } = styles;

interface ParamsType {
  tag: string
}

const Catalog: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const filteredEbooks = useAppSelector(selectFilteredEbooks);
  const fetchError = useAppSelector(selectError);
  const searchQuery = useLocation().search;

  let { tag } = useParams<ParamsType>();
  let itemsPerPage = 4;
  let pagesCount: number = Math.ceil(filteredEbooks.length / itemsPerPage) || 0;
  let ebooksForScreenArr: ProductModel[] = filteredEbooks.slice(itemsPerPage * page - itemsPerPage, itemsPerPage * page) || [];



  useEffect(() => {
    dispatch(setFilters({ filter: 'categoryFilter', value: tag }));
  }, [tag, dispatch])

  //fetching ebooks by url tag
  useEffect(() => {
    dispatch(fetchEbooks(''));
  }, [tag, dispatch])

  //sorting results in store by url query
  useEffect(() => {
    const query = new URLSearchParams(searchQuery);
    for (let param of query.entries()) {
      dispatch(sortEbooks(param[1]));
    }
  }, [searchQuery, dispatch]);

  return (
    <div className={wrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        <Filters />
        {/*List of products */}
        <div className={containerCardsWrapper}>
          <ul className={containerCards}>
            {ebooksForScreenArr.length > 0 && ebooksForScreenArr.map(ebook => {
              return <ProductCard key={ebook.id} ebook={ebook} cardStyleVersion='full' />
            })}
          </ul>
          <Pagination pagesCount={pagesCount} ebooksForScreenArrLength={ebooksForScreenArr.length} page={page} setPage={setPage} />
        </div>

        <FilterOptions />
        <FilterCategoriesPanel />
        {fetchError ? <ShowError /> : null}
      </Suspense>
    </div>
  );
}

export default Catalog;

