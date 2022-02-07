import HeaderItem from '../../components/HeaderItem/HeaderItem';
import NavBtn from '../navigation/NavBtn';
import styles from './AppHeader.module.scss';
const { navItemWrapper } = styles;

function NavItem() {

  return (
    <HeaderItem classes={[navItemWrapper]}>
      <NavBtn />
    </HeaderItem>
  );
}

export default NavItem;