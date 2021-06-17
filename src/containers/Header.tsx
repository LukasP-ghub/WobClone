import { useEffect } from 'react';
import { useAppDispatch } from '../helpers/types/hooks';

import { fetchCategories } from './containerSlice';

import styles from './Header.module.scss';
import Cart from '../features/cart/Cart';
import Navigation from '../features/navigation/Navigation';
import Searcher from '../features/searcher/Searcher';
import User from '../features/user/User';
import Logo from '../commonComponents/logo/Logo';


function Header() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories(''));
  }, [dispatch])

  return (
    <div className={styles.header}>
      <Navigation />
      <Logo />
      <Searcher />
      <User />
      <Cart />
    </div>
  );
}

export default Header;