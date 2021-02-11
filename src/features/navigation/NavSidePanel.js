import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showSidePanel, showCatSidePanel, selectIsVisible } from './navigationSlice';

import NavComponent from './NavComponent';
import styles from './NavSidePanel.module.scss'

function NavSidePanel() {
  const isVisible = useSelector(selectIsVisible);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.sidePanel} ${isVisible ? styles.showSidePanel : null}`} >
      <div className={styles.bookType}>
        <div>Ebooki</div>
      </div>
      <div className={styles.closeIcon} onClick={() => dispatch(showSidePanel())}>X</div>

      <NavComponent name="Kategorie" extended={true} showCategories={() => dispatch(showCatSidePanel())} />
      <NavComponent name="Wszystkie Ebooki" />
      <NavComponent name="Promocje" />
      <NavComponent name="Nowości" />
      <NavComponent name="Top 100" />
      <NavComponent name="Darmowe ebooki" />
    </div>

  );
}

export default NavSidePanel;