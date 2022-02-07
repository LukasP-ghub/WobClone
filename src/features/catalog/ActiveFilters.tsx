import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../types/hooks';

import { setFilters, setShowFilterOptions } from './catalogSlice';
import { selectFilters } from './catalogSlice';
import { filterType, filtersT } from './catalogSlice';

import CloseIcon from '../../assets/svg/CloseIcon';
import OptionsIcon from '../../assets/svg/OptionsIcon';
import styles from './ActiveFilters.module.scss';

const { activeFiltersList, activeFilter, btnFiltersPanel, content, productType, removeBtn, wrapper } = styles;

export const ActiveFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const searchQuery = useLocation().search;

  return (
    <aside className={wrapper} >

      <h2 className={productType}>Ebooki</h2>
      <button className={btnFiltersPanel} onClick={() => dispatch(setShowFilterOptions())}>
        <OptionsIcon />
        <span>Filtry</span>
      </button>

      <ul className={activeFiltersList}>
        {Object.entries(filters).map((item) => {
          const filterType = item[0] as filterType<filtersT>;
          const filterValue = item[1];
          return (filterValue &&
            <li className={activeFilter} key={filterType} >
              <Link to={{
                pathname: `${filterType === 'category' ? "/catalog/Wszystkie Ebooki" : filters.category}`,
                // search: `${filterType === 'searchFilter' ? null : searchQuery}`
              }}
                onClick={() => dispatch(setFilters({ filter: filterType, value: '' }))}>

                <span className={content}>{filterType === 'category' ? filterValue : filterType}</span>
                <button className={removeBtn}>
                  <CloseIcon strokeWidth={3} strokeColor='#CF2942' />
                </button>
              </Link>
            </li>)
        })}
      </ul>

    </aside>
  );
}