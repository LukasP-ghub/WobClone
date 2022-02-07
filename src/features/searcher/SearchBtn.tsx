import { useAppDispatch } from '../../types/hooks';
import { setShowSearchBar } from './searcherSlice';

import SearchIcon from '../../assets/svg/SearchIcon';
import styles from './SearchBtn.module.scss';

const { searchBtn } = styles;

function SearchBtn() {
  const dispatch = useAppDispatch();

  return (
    <div className={searchBtn} onClick={() => { dispatch(setShowSearchBar()) }}>
      <SearchIcon />
    </div>
  );
}

export default SearchBtn;