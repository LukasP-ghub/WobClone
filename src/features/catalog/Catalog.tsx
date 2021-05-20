import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import Filters from "./Filters";
import FilterOptions from './FilterOptions';
import FilterCategoriesPanel from './FilterCategoriesPanel';
import ProductCard from '../../commonComponents/productCard/ProductCard';

import { setFilters, sortEbooks } from './catalogSlice';
import { selectFilteredEbooks } from './catalogSlice';
import { fetchEbooks } from './catalogSlice';

import styles from './Catalog.module.scss';

const { containerCards, wrapper, paginationWrapper } = styles;

interface ParamsType {
  tag: string
}

const Catalog: React.FC = () => {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const filteredEbooks = useAppSelector(selectFilteredEbooks);
  //const filters = useAppSelector(selectFilters);
  const searchQuery = useLocation().search;

  let { tag } = useParams<ParamsType>();
  let itemsPerPage = 2;
  let pagesCount = Math.ceil(filteredEbooks.length / itemsPerPage) || 0;
  let ebooksForScreenArr = filteredEbooks.slice(itemsPerPage * page - itemsPerPage, itemsPerPage * page);

  const handleSetPage = (e: any) => {
    const target = e.target as Element;
    setPage(e.target.innerText * 1)
  }

  useEffect(() => {
    dispatch(setFilters({ filter: 'categoryFilter', value: tag }));
  }, [tag])

  //fetching ebooks by url tag
  useEffect(() => {
    dispatch(fetchEbooks(''));
  }, [tag])

  //sorting results in store by url query
  useEffect(() => {
    const query = new URLSearchParams(searchQuery);
    for (let param of query.entries()) {
      dispatch(sortEbooks(param[1]));
    }
  }, [searchQuery]);

  return (
    <div className={wrapper}>
      <Filters />
      <FilterOptions />
      <FilterCategoriesPanel />

      {/*List of products */}
      <ul className={containerCards}>
        {pagesCount && ebooksForScreenArr.map(ebook => {
          return (
            <ProductCard key={ebook.id} ebook={ebook} />
          )
        })}
      </ul>

      {/* Pagination*/}
      {pagesCount && <ul className={paginationWrapper}>

        {<li onClick={() => { return page <= 1 ? null : setPage(prevPage => --prevPage) }}>

          <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M20 30 L8 16 20 2" />
          </svg>

        </li>}

        <li onClick={() => setPage(1)}><span>1</span></li>

        {page > 4 ? <li><span>...</span></li> : null}
        {pagesCount > 1 ? <li onClick={handleSetPage}><span>{page <= 4 ? 2 : (page >= pagesCount - 3) ? pagesCount - 5 : page - 2}</span></li> : null}
        {pagesCount > 2 ? <li onClick={handleSetPage}><span>{page <= 4 ? 3 : (page >= pagesCount - 3) ? pagesCount - 4 : page - 1}</span></li> : null}
        {pagesCount > 3 ? <li onClick={handleSetPage}><span>{page <= 4 ? 4 : (page >= pagesCount - 3) ? pagesCount - 3 : page}</span></li> : null}
        {pagesCount > 4 ? <li onClick={handleSetPage}><span>{page <= 4 ? 5 : (page >= pagesCount - 3) ? pagesCount - 2 : page + 1}</span></li> : null}
        {pagesCount > 5 ? <li onClick={handleSetPage}><span>{(page <= 4) ? 6 : (page >= pagesCount - 3) ? pagesCount - 1 : page + 2}</span></li> : null}
        {page < pagesCount - 3 ? <li><span>...</span></li> : null}

        {pagesCount > 5 ? <li onClick={() => setPage(pagesCount)}><span>{pagesCount}</span></li> : null}

        {<li onClick={() => { return page >= pagesCount ? null : setPage(prevPage => ++prevPage) }} >
          <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 30 L24 16 12 2" />
          </svg>
        </li>}
      </ul>}

    </div>
  );
}

export default Catalog;

