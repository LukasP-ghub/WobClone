import { useAppSelector, useAppDispatch } from '../../types/hooks';

import { selectShowSearchBar, setShowSearchBar } from './searcherSlice';

import SearchIcon from '../../assets/svg/SearchIcon';

function SearchBtn() {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => { dispatch(setShowSearchBar()) }}>
      <SearchIcon />
    </div>
  );
}

export default SearchBtn;