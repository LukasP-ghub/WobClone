import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../types/hooks';
import useWidth from '../../hooks/useWidth';
//import { fetchCategories } from './containerSlice';

import SearchBar from '../searcher/SearchBar';
import NavItem from './NavItem';
import LogoItem from './LogoItem';
import SearchItem from './SearchItem';
import UserItem from './UserItem';
import CartItem from './CartItem';
import NavPanel from '../navigation/NavPanel';
import CategoryPanel from '../navigation/CategoryPanel';

import styles from './AppHeader.module.scss';
const { header } = styles;

function AppHeader() {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { currWidth, prevWidth } = useWidth();

  useEffect(() => {
    if (currWidth < 950 && prevWidth >= 950) setIsSearchBarVisible(false);
    if (currWidth >= 950) setIsSearchBarVisible(true);
  }, [currWidth, prevWidth, dispatch])

  // useEffect(() => {
  //   dispatch(fetchCategories(''));
  // }, [dispatch])

  return (
    <header className={header}>
      <NavItem />
      <LogoItem />
      <SearchItem />
      <UserItem />
      <CartItem />
      <NavPanel />
      <CategoryPanel />
      {isSearchBarVisible ? <SearchBar /> : null}
    </header>
  );
}

export default AppHeader;