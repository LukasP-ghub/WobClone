import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { showCatSidePanel, selectIsVisibleCatSP, selectCategories } from './navigationSlice';

import NavComponent from './NavComponent';
import styles from './CategorySidePanel.module.scss'

function CategoryPanel() {
  const isVisibleCat = useSelector(selectIsVisibleCatSP);
  const categories = useSelector(selectCategories)
  const dispatch = useDispatch();

  return (
    <div className={`${styles.categorySidePanel} ${isVisibleCat ? styles.showSidePanel : null}`}>
      <div className={styles.headElement} onClick={() => dispatch(showCatSidePanel())}>
        <div className={styles.content}>Powrót</div>
      </div>
      {categories.map(item => { return <NavComponent key={item.category} name={item.category} onClick={() => dispatch(showCatSidePanel())} /> })}
    </div>

  );
}

export default CategoryPanel;