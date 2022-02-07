import HeaderItem from '../../components/HeaderItem/HeaderItem';
import SearchBtn from '../searcher/SearchBtn';
import styles from './AppHeader.module.scss';
const { searchItemWrapper } = styles;

function NavItem() {

  return (
    <HeaderItem classes={[searchItemWrapper]}>
      <SearchBtn />
    </HeaderItem>
  );
}

export default NavItem;