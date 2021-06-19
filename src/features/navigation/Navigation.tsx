import { useAppDispatch } from '../../helpers/types/hooks';
import { showNavSidePanel } from './navigationSlice';

import NavSidePanel from './NavSidePanel';
import CategoryPanel from './CategorySidePanel'
import MenuIcon from '../../assets/svg/MenuIcon';
import styles from './Navigation.module.scss'

function Navigation() {
  const dispatch = useAppDispatch();

  const { navIcon, navIconWrapper } = styles;

  return (
    <>
      <div className={navIconWrapper} onClick={() => dispatch(showNavSidePanel())}>
        <div className={navIcon}>
          <MenuIcon />
        </div>
      </div>
      <NavSidePanel />
      <CategoryPanel />
    </>
  );
}

export default Navigation;