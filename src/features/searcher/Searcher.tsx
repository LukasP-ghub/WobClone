import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';
import useWidth from '../../helpers/useWidth';

import { selectShowSearchBar, setShowSearchBar } from './searcherSlice';

import SearchBar from './SearchBar';
import styles from './Searcher.module.scss';

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
          <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="14" cy="14" r="12" />
            <path d="M23 23 L30 30" />
          </svg>
        </div>
      </div>
      {isVisible ? <SearchBar /> : null}
    </>
  );
}

export default Searcher;