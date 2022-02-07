import { useAppDispatch } from '../../types/hooks';
import { showNavSidePanel } from './navigationSlice';

import MenuIcon from '../../assets/svg/MenuIcon';

function NavBtn() {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(showNavSidePanel())}>
      <MenuIcon />
    </button>
  );
}

export default NavBtn;