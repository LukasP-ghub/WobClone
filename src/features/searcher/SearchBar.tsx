import { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { Link } from 'react-router-dom';
import { useGetEbooksQuery } from '../../services/apiSlice';
import { selectSearchKey, selectSearchResults, selectShowSearchBar } from './searcherSlice';
import { setShowSearchBar, setSearchKey, setSearchResults } from './searcherSlice';
import { SearchResultsPayload } from './searcherSlice';

import SearchIcon from '../../assets/svg/SearchIcon';
import CloseIcon from '../../assets/svg/CloseIcon';
import styles from './SearchBar.module.scss';

const { closeIcon, ellipsis, searchBar, searchBtn, searchInput, searchResultsList, showSearchBar, underText, wrapper } = styles;

const SearchBar: React.FC = () => {
  const { data: ebooks = [] } = useGetEbooksQuery('');
  const dispatch = useAppDispatch();
  const searchKey = useAppSelector(selectSearchKey);
  const searchResults = useAppSelector(selectSearchResults);
  const isVisible = useAppSelector(selectShowSearchBar);
  const listElRef = useRef<HTMLAnchorElement[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  let listCursor = -1;

  //function search elements by user key and create array of data for router Links
  const searchProducts = () => {
    const authors = [];
    const titles = [];

    for (const ebook of ebooks) {
      if (ebook.author.firstName.toLowerCase().includes(searchKey.toLowerCase()) ||
        ebook.author.lastName.toLowerCase().includes(searchKey.toLowerCase())) {
        authors.push({
          linkPathName: `/catalog/${ebook.author.firstName}-${ebook.author.lastName}`,
          linkContent: { title: null, authorFirstName: ebook.author.firstName, authorLastName: ebook.author.lastName },
          linkState: {
            authorFirstName: ebook.author.firstName,
            authorLastName: ebook.author.lastName
          }
        })
      }

      if (ebook.title.toLowerCase().includes(searchKey.toLowerCase())) {
        titles.push({
          linkPathName: `/ebook/${ebook.title}-${ebook.author.firstName}-${ebook.author.lastName}`,
          linkContent: { title: ebook.title, authorFirstName: ebook.author.firstName, authorLastName: ebook.author.lastName },
          linkState: {
            title: ebook.title,
            authorFirstName: ebook.author.firstName,
            authorLastName: ebook.author.lastName
          }
        })
      }
    }

    return [...authors, ...titles];
  }


  //searching with debounce and avoid empty key searching, 
  useEffect((): any => {
    if (!searchKey) {
      return dispatch(setSearchResults([]));
    }

    let timer = setTimeout(() => {
      dispatch(setSearchResults(searchProducts()));
    }, 500);

    window.addEventListener('click', () => { dispatch(setSearchResults([])) }, { once: true });
    return () => clearTimeout(timer);
  }, [searchKey, dispatch]);

  //Handling arrow key navigation through list
  const onKeyHandle = (e: any) => {
    if (e.keyCode !== 40 && e.keyCode !== 38) return;
    if (e.keyCode === 40 && listCursor < searchResults.length - 1) listCursor++;
    if (e.keyCode === 38 && listCursor > 0) listCursor--;
    if (searchResults.length > 0) listElRef.current[listCursor]?.focus();
    e.preventDefault();
  };

  //Handling mouse navigation with remembering actual focused item for keyboard navigation
  const onMouseEnterHandle = (e: any) => {
    e.currentTarget.focus();
    listCursor = listElRef.current.indexOf(e.currentTarget);
  };

  const onMouseLeaveHandle = () => {
    listElRef.current[listCursor]?.blur();
    inputRef.current?.focus();
    listCursor = -1;
  }

  return (
    <div className={`${searchBar} ${isVisible ? showSearchBar : null}`} onKeyDown={onKeyHandle}
      tabIndex={-1}>
      <div className={wrapper}>

        <div className={searchBtn}>
          <SearchIcon />
        </div>

        <input className={searchInput} ref={inputRef} type="text" autoComplete='off' placeholder="Szukaj" name="searchField" onChange={(e) => { dispatch(setSearchKey(e.target.value)) }} />

        <button className={closeIcon} onClick={() => { dispatch(setShowSearchBar()) }}>
          <CloseIcon />
        </button>

        {/*---Search Dropdown--- */}
        {searchResults.length > 0 ?
          <ul className={searchResultsList} onMouseLeave={onMouseLeaveHandle}>

            {searchResults.map((item: SearchResultsPayload, index: number) => (
              <li key={index} >
                <Link to={{
                  pathname: item.linkPathName,
                  state: { ...item.linkState }
                }}
                  ref={(e: any) => listElRef.current[index] = e}
                  onMouseEnter={onMouseEnterHandle}
                >
                  {item.linkContent.title ? <div className={ellipsis}>{item.linkContent.title}</div> : null}
                  {<div className={`${item.linkContent.title ? underText : null}`}>{`${item.linkContent.authorFirstName} ${item.linkContent.authorLastName}`}</div>}
                </Link>
              </li>)
            )}
          </ul> : null}

      </div>
    </div>
  );
}

export default SearchBar;