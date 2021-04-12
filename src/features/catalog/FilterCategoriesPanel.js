import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setShowCategoriesPanel, setFilters } from './catalogSlice';
import { selectShowCategoriesPanel, selectCategories } from './catalogSlice';


import styles from './FilterCategoriesPanel.module.scss';

const { categoryList, clearFiltersBtn, show, title, panelHead, wrapper } = styles;

function FilterCategoriesPanel() {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectShowCategoriesPanel);
  const categories = useSelector(selectCategories);


  return (
    <React.Fragment>
      <div className={`${panelHead} ${isVisible ? show : null}`}  >
        <h2 className={title} onClick={() => dispatch(setShowCategoriesPanel())}>Kategorie</h2>
        <button className={clearFiltersBtn}>Wyczyść filtry</button>
      </div>

      <div className={`${wrapper} ${isVisible ? show : null}`}>
        <ul className={categoryList}>
          <li><h3>Popularne kategorie</h3></li>

          {categories.map(category => {
            return category.popular &&
              <li key={category.category} >

                {<Link to={'/catalog/' + category.category}
                  onClick={() => dispatch(setFilters({ filter: 'categoryFilter', value: category.category }))}>
                  {category.category}
                </Link>}

              </li>
          })}
        </ul>

        <ul className={categoryList}>
          <li><h3>Wszystkie kategorie</h3></li>

          {categories.map(category => (
            <li key={category.category}>
              {<Link to={category.category}
                onClick={() => dispatch(setFilters({ filter: 'categoryFilter', value: category.category }))}>
                {category.category}
              </Link>}
            </li>))}
        </ul>

      </div>
    </React.Fragment>
  );
}

export default FilterCategoriesPanel;