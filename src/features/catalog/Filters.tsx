import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { setFilters, setShowFilterOptions } from './catalogSlice';
import { selectFilters } from './catalogSlice';
import styles from './Filters.module.scss';

const { activeFiltersList, activeFilter, btnFiltersPanel, content, productType, wrapper } = styles;

function Filters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const searchQuery = useLocation().search;

  return (
    <aside className={wrapper} >

      <h2 className={productType}>Ebooki</h2>
      <button className={btnFiltersPanel} onClick={() => dispatch(setShowFilterOptions())}>
        <svg id="i-options" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29" />
        </svg>
        <span>Filtry</span>
      </button>

      <ul className={activeFiltersList}>
        {Object.entries(filters).map(filter => {
          return (filter[1] &&
            <li className={activeFilter} key={filter[0]} >
              <Link to={{
                pathname: `${filter[0] === 'categoryFilter' ? "/catalog/Wszystkie Ebooki" : filters.categoryFilter}`,
                search: `${filter[0] === 'searchFilter' ? null : searchQuery}`
              }}
                onClick={() => dispatch(setFilters({ filter: filter[0], value: '' }))}>

                <span className={content}>{filter[0] === 'categoryFilter' ? filter[1] : filter[0]}</span>
                <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="10" height="10" stroke="#CF2942" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                  <path d="M2 30 L30 2 M30 30 L2 2" />
                </svg>

              </Link>
            </li>)
        })}
      </ul>

    </aside>
  );
}

export default Filters;