import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';

import { setShowCategoriesPanel, setFilters } from './catalogSlice';
import { selectShowCategoriesPanel, selectCategories, selectError } from './catalogSlice';

import styles from './FilterCategoriesPanel.module.scss';

const ShowError = lazy(() => import('../../commonComponents/showError/ShowError'));

const { categoryList, catListItemLink, catListItemWarp, clearFiltersBtn, show, title, panelHead, wrapper } = styles;

const FilterCategoriesPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowCategoriesPanel);
  const fetchError = useAppSelector(selectError);
  const categories = useAppSelector(selectCategories);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={`${panelHead} ${isVisible ? show : null}`}  >
          <h2 className={title} onClick={() => dispatch(setShowCategoriesPanel())}>Kategorie</h2>
          <button className={clearFiltersBtn}>Wyczyść filtry</button>
        </div>

        <div className={`${wrapper} ${isVisible ? show : null}`}>
          <ul className={categoryList}>
            <li className={catListItemWarp}><h3>Popularne kategorie</h3></li>

            {fetchError ? <ShowError /> : categories.map(category => {
              return category.popular &&
                <li key={category.category} className={catListItemWarp}>

                  {<Link to={'/catalog/' + category.category} className={catListItemLink}
                    onClick={() => dispatch(setFilters({ filter: 'categoryFilter', value: category.category }))}>
                    {category.category}
                  </Link>}

                </li>
            })}
          </ul>

          <ul className={categoryList}>
            <li className={catListItemWarp}><h3>Wszystkie kategorie</h3></li>

            {fetchError ? <ShowError /> : categories.map(category => (
              <li key={category.category} className={catListItemWarp}>

                {<Link to={`${category.category}`} className={catListItemLink}
                  onClick={() => dispatch(setFilters({ filter: 'categoryFilter', value: category.category }))}>
                  {category.category}
                </Link>}

              </li>))}
          </ul>

        </div>
      </Suspense>
    </>
  );
}

export default FilterCategoriesPanel;