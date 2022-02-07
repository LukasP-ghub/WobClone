import HeaderItem from '../../components/HeaderItem/HeaderItem';
import UserBtn from '../user/UserBtn';
import styles from './AppHeader.module.scss';
const { userItemWrapper } = styles;

function NavItem() {

  return (
    <HeaderItem classes={[userItemWrapper]}>
      <UserBtn />
    </HeaderItem>
  );
}

export default NavItem;