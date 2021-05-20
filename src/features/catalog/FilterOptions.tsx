import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { setShowFilterOptions, setShowCategoriesPanel, setFilters } from './catalogSlice';
import { selectCategories, selectFilters, selectShowFilterOptions } from './catalogSlice';

import styles from './FilterOptions.module.scss';

const { clearFiltersBtn, filter, filtersGroup, optionsGroup, panelHead, shiftBtn, shiftBtnActive, show, title, wrapper } = styles;

const FilterOptions: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowFilterOptions);
  const categories = useAppSelector(selectCategories);
  const filters = useAppSelector(selectFilters);

  return (
    <React.Fragment>
      <div className={`${panelHead} ${isVisible ? show : null}`}>
        <h2 className={title} onClick={() => dispatch(setShowFilterOptions())}>Filtry i kategorie</h2>
        <button className={clearFiltersBtn}>Wyczyść filtry</button>
      </div>

      <div className={`${wrapper} ${isVisible ? show : null}`}>
        <div className={optionsGroup}>
          <h3 className={title}>Tylko w promocji</h3>
          <button className={`${shiftBtn} ${filters.promotion ? shiftBtnActive : null}`} onClick={() => dispatch(setFilters({ filter: 'promotion', value: filters.promotion ? 'true' : '' }))} />
        </div>

        <div className={optionsGroup}>
          <h3 className={title}>Sortuj wg.</h3>
          <ul className={filtersGroup}>
            <li className={filter}><Link to={'?sort=lower-price'}><span>Najniższa cena</span></Link></li>
            <li className={filter}><Link to={'?sort=higher-price'}><span>Nawyższa cena</span></Link></li>
            <li className={filter}><Link to={'?sort=oldest'}><span>Najstarsze</span></Link></li>
          </ul>
        </div>

        <div className={optionsGroup}>
          <h3 className={title}>Kategorie</h3>
          <button onClick={() => dispatch(setShowCategoriesPanel())}>Lista</button>

          <ul className={filtersGroup}>
            {categories.map(category => {
              return (category.popular &&
                <li className={filter} key={category.category}>
                  {<Link to={'/catalog/' + category.category}
                    onClick={() => dispatch(setFilters({ filter: 'categoryFilter', value: category.category }))}>
                    <span>{category.category}</span>
                  </Link>}
                </li>)
            })}
          </ul>
        </div>

      </div>
    </React.Fragment>
  );
}

export default FilterOptions;