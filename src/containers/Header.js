import React from 'react';
import styles from './Header.module.scss';
import Chart from '../features/chart/Chart';
import Navigation from '../features/navigation/Navigation.js';
import Searcher from '../features/searcher/Searcher';
import User from '../features/user/User';
import WishList from '../features/wishlist/WishList';


function Header() {
  return (
    <div className={styles.header}>
      <Navigation />
      <Searcher />
      <WishList />
      <User />
      <Chart />
    </div>
  );
}

export default Header;