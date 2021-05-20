import { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/types/hooks';
import { Link } from 'react-router-dom';

import { selectEbooks, selectSearchKey, selectSearchResults } from './searcherSlice';
import { setShowSearchBar, setSearchKey, setSearchResults } from './searcherSlice';
import { fetchForSearch } from './searcherSlice';
import { SearchResultsPayload } from './searcherSlice';

import styles from './SearchBar.module.scss';

const { searchBar, searchInput, searchResultsList, underText, wrapper } = styles;

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const ebooks = useAppSelector(selectEbooks);
  const searchKey = useAppSelector(selectSearchKey);
  const searchResults = useAppSelector(selectSearchResults);
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

  //fetching all ebooks for searching simulation 
  useEffect(() => {
    dispatch(fetchForSearch());
  }, [])

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
  }, [searchKey]);

  //Handling arrow key navigation through list
  const onKeyHandle = (e: any) => {
    console.log('Keyboard');
    let itemFocus = null;
    if (e.keyCode !== 40 && e.keyCode !== 38) return;
    if (e.keyCode === 40 && listCursor < searchResults.length - 1) listCursor++;
    if (e.keyCode === 38 && listCursor > 0) listCursor--;
    if (searchResults.length > 0) itemFocus = listElRef.current[listCursor].focus();
    return itemFocus;
  };

  //Handling mouse navigation with remembering actual focused item for keyboard navigation
  const onMouseEnterHandle = (e: any) => {
    e.currentTarget.focus();
    listCursor = listElRef.current.indexOf(e.currentTarget);
  };

  const onMouseLeaveHandle = () => {
    listElRef.current[listCursor].blur();
    inputRef.current?.focus();
    listCursor = -1;
    console.log('blur');
  }

  return (
    <div className={searchBar} onKeyDown={onKeyHandle}
      tabIndex={-1}>
      <div className={wrapper}>

        <button>
          <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="14" cy="14" r="12" />
            <path d="M23 23 L30 30" />
          </svg>
        </button>

        {/*---INPUT---*/}
        <input className={searchInput} ref={inputRef} type="text" autoComplete='off' placeholder="Szukaj" name="searchField" onChange={(e) => { dispatch(setSearchKey(e.target.value)) }} />

        {/*---Close Icon--- */}
        <button onClick={() => { dispatch(setShowSearchBar()) }}>
          <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M2 30 L30 2 M30 30 L2 2" />
          </svg>
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

                  {item.linkContent.title ? <div>{item.linkContent.title}</div> : null}
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