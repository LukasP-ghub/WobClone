import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { setShowFilterOptions, setShowCategoriesPanel, setFilters } from './catalogSlice';
import { selectCategories, selectFilters, selectShowFilterOptions, selectError } from './catalogSlice';

import styles from './FilterOptions.module.scss';

const ShowError = lazy(() => import('../../commonComponents/showError/ShowError'));

const { clearFiltersBtn, filter, filtersGroup, optionsGroup, panelHead, shiftBtn, shiftBtnActive, show, showCategoryListBtn, title, wrapper } = styles;

const FilterOptions: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowFilterOptions);
  const categories = useAppSelector(selectCategories);
  const filters = useAppSelector(selectFilters);
  const fetchError = useAppSelector(selectError);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={`${panelHead} ${isVisible ? show : null}`}>
          <h2 className={title} onClick={() => dispatch(setShowFilterOptions())}>Filtry i kategorie</h2>
          <button className={clearFiltersBtn}>Wyczyść filtry</button>
        </div>

        <div className={`${wrapper} ${isVisible ? show : null}`}>
          <div className={optionsGroup}>
            <h3 className={title}>Tylko w promocji</h3>
            <button className={`${shiftBtn} ${filters.promotion === 'true' ? shiftBtnActive : null}`} onClick={() => dispatch(setFilters({ filter: 'promotion', value: filters.promotion === 'true' ? '' : 'true' }))} />
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
            <h3 className={title}>Polecane</h3>
            <button className={showCategoryListBtn} onClick={() => dispatch(setShowCategoriesPanel())}>Lista</button>

            <ul className={filtersGroup}>
              {fetchError ? <ShowError /> : categories.map(category => {
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
      </Suspense>
    </>
  );
}

export default FilterOptions;