import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showCatSidePanel, selectIsVisibleCat, selectCategories } from './navigationSlice';

import NavComponent from './NavComponent';
import styles from './CategorySidePanel.module.scss'

function CategoryPanel() {
  const isVisibleCat = useSelector(selectIsVisibleCat);
  const categories = useSelector(selectCategories)
  const dispatch = useDispatch();

  return (
    <div className={`${styles.categorySidePanel} ${isVisibleCat ? styles.showSidePanel : null}`}>
      <div className={styles.headElement} onClick={() => dispatch(showCatSidePanel())}>
        <div className={styles.content}>Powrót</div>
      </div>
      {categories.map(category => { return <NavComponent key={category} name={category} /> })}
    </div>

  );
}

export default CategoryPanel;