import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showNavSidePanel } from './navigationSlice';

import NavSidePanel from './NavSidePanel';
import CategoryPanel from './CategorySidePanel'
import styles from './Navigation.module.scss'

function Navigation() {
  const dispatch = useDispatch();

  const { navIcon, navIconWrapper } = styles;

  return (
    <React.Fragment>
      <div className={navIconWrapper} onClick={() => dispatch(showNavSidePanel())}>
        <div className={navIcon}>
          <svg id="i-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
          </svg>
        </div>
      </div>
      <NavSidePanel />
      <CategoryPanel />
    </React.Fragment>
  );
}

export default Navigation;