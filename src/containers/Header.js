import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectEbooks } from './containerSlice';
import { fetchCategories } from './containerSlice';

import styles from './Header.module.scss';
import Chart from '../features/chart/Chart';
import Navigation from '../features/navigation/Navigation.js';
import Searcher from '../features/searcher/Searcher';
import User from '../features/user/User';
import Logo from '../features/logo/Logo';


function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [])

  return (
    <div className={styles.header}>
      <Navigation />
      <Logo />
      <Searcher />
      <User />
      <Chart />
    </div>
  );
}

export default Header;