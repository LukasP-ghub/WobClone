import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { setFilters, setShowFilterOptions } from './catalogSlice';
import { selectFilters } from './catalogSlice';

import CloseIcon from '../../assets/svg/CloseIcon';
import OptionsIcon from '../../assets/svg/OptionsIcon';
import styles from './Filters.module.scss';

const { activeFiltersList, activeFilter, btnFiltersPanel, content, productType, removeBtn, wrapper } = styles;

function Filters() {
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
        {Object.entries(filters).map(filter => {
          return (filter[1] &&
            <li className={activeFilter} key={filter[0]} >
              <Link to={{
                pathname: `${filter[0] === 'categoryFilter' ? "/catalog/Wszystkie Ebooki" : filters.categoryFilter}`,
                search: `${filter[0] === 'searchFilter' ? null : searchQuery}`
              }}
                onClick={() => dispatch(setFilters({ filter: filter[0], value: '' }))}>

                <span className={content}>{filter[0] === 'categoryFilter' ? filter[1] : filter[0]}</span>
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

export default Filters;