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

  return (
    <header className={header}>
      <NavItem />
      <LogoItem />
      <SearchItem />
      <UserItem />
      <CartItem />
      <NavPanel />
      <CategoryPanel />
      <SearchBar />
    </header>
  );
}

export default AppHeader;