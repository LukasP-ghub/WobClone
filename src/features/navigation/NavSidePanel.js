import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { showNavSidePanel, showCatSidePanel, selectIsVisibleNavSP } from './navigationSlice';

import NavComponent from './NavComponent';
import styles from './NavSidePanel.module.scss';

const { bookType, sidePanel, showSidePanel, closeIcon } = styles;

function NavSidePanel() {
  const isVisible = useSelector(selectIsVisibleNavSP);
  const dispatch = useDispatch();

  return (
    <div className={`${sidePanel} ${isVisible ? showSidePanel : null}`} >
      <div className={bookType}>
        <div>Ebooki</div>
      </div>
      <div className={closeIcon} onClick={() => dispatch(showNavSidePanel())}>
        <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M2 30 L30 2 M30 30 L2 2" />
        </svg>
      </div>

      <NavComponent name="Kategorie" extended={true} onClick={() => { dispatch(showCatSidePanel()); dispatch(showNavSidePanel()) }} />
      <NavComponent name="Wszystkie Ebooki" onClick={() => { dispatch(showNavSidePanel()) }} />
      <NavComponent name="Promocje" onClick={() => { dispatch(showNavSidePanel()) }} />
      <NavComponent name="Nowości" onClick={() => { dispatch(showNavSidePanel()) }} />
      <NavComponent name="Top 100" onClick={() => { dispatch(showNavSidePanel()) }} />
      <NavComponent name="Darmowe ebooki" onClick={() => { dispatch(showNavSidePanel()) }} />
    </div>

  );
}

export default NavSidePanel;
