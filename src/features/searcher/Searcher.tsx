import { lazy, Suspense, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';
import useWidth from '../../helpers/useWidth';

import { selectShowSearchBar, setShowSearchBar } from './searcherSlice';

import SearchIcon from '../../assets/svg/SearchIcon';
import styles from './Searcher.module.scss';

const SearchBar = lazy(() => import('./SearchBar'));

const { searchIcon, searchWrapper } = styles;

function Searcher() {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectShowSearchBar);
  const { currWidth, prevWidth } = useWidth();

  useEffect(() => {
    if (currWidth < 950 && prevWidth >= 950) dispatch(setShowSearchBar(false));
    if (currWidth >= 950) dispatch(setShowSearchBar(true));
  }, [currWidth, prevWidth, dispatch])

  return (
    <>
      <div className={searchWrapper} onClick={() => { dispatch(setShowSearchBar()) }}>
        <div className={searchIcon}>
          <SearchIcon />
        </div>
      </div>
      {isVisible ? <Suspense fallback={<div>Loading...</div>}><SearchBar /></Suspense> : null}
    </>
  );
}

export default Searcher;