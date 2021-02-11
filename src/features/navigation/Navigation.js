import React from 'react';
import { useDispatch } from 'react-redux';
import { showSidePanel } from './navigationSlice';

import NavSidePanel from './NavSidePanel';
import CategoryPanel from './CategorySidePanel'
import styles from './Navigation.module.scss'

function Navigation() {
  const dispatch = useDispatch();


  return (
    <React.Fragment>
      <div className={styles.navIcon} onClick={() => dispatch(showSidePanel())}>
        nav
      </div>
      <NavSidePanel />
      <CategoryPanel />
    </React.Fragment>
  );
}

export default Navigation;