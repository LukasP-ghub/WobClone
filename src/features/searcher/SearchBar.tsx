import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetEbooksQuery } from '../../services/apiSlice';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { SearchResultsPayload, selectSearchKey, selectSearchResults, selectShowSearchBar, setSearchKey, setSearchResults, setShowSearchBar } from './searcherSlice';

import CloseIcon from '../../assets/svg/CloseIcon';
import SearchIcon from '../../assets/svg/SearchIcon';
import styles from './SearchBar.module.scss';

const { closeIcon, ellipsis, searchBar, searchBtn, searchInput, searchInputLabel, searchResultsList, showSearchBar, underText, wrapper } = styles;

const SearchBar: React.FC = () => {
  const { data: ebooks = [] } = useGetEbooksQuery({});
  const dispatch = useAppDispatch();
  const searchKey = useAppSelector(selectSearchKey);
  const searchResults = useAppSelector(selectSearchResults);
  const isVisible = useAppSelector(selectShowSearchBar);
  const listElRef = useRef<HTMLAnchorElement[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  let listCursor = -1;

  //function search elements by user key and create array of data for router Links
  const searchProducts = () => {
    const authors: SearchResultsPayload[] = [];
    const titles:SearchResultsPayload[] = [];

    for (const ebook of ebooks) {
      ebook.author.map((author) => {
        if (author.author_name.toLowerCase().includes(searchKey.toLowerCase())) {
          authors.push({
            linkPathName: `/catalog/${author.author_name}`,
            linkContent: { title: null, authorName: author.author_name,},
            linkState: {
              authorName: author.author_name,
              }
          })
        }

        
      });
     

      if (ebook.title.toLowerCase().includes(searchKey.toLowerCase())) {
        const authorsNames = ebook.author.map((author) => author.author_name).join('-');
        titles.push({
          linkPathName: `/ebook/${ebook.title}-${authorsNames}`,
          linkContent: { title: ebook.title, authorName: authorsNames },
          linkState: {
            title: ebook.title,
            authorName: authorsNames,
          }
        })
      }
    }

    return [...authors, ...titles];
  }

  useLayoutEffect(() => {
    if (labelRef.current && dropdownRef.current) {
      const inputPosition = labelRef.current!.offsetLeft;
      dropdownRef.current!.style!.left = `${inputPosition}px`;
    }
  });

  //searching with debounce and avoid empty key searching, 
  useEffect((): any => {
    if (!searchKey) {
      dispatch(setSearchResults([]));
      return ;
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
        <label className={searchInputLabel} ref={labelRef}>
          <input className={searchInput} ref={inputRef} type="text" autoComplete='off' placeholder="Szukaj" name="searchField" onChange={(e) => { dispatch(setSearchKey(e.target.value)) }} />
        </label>
        <button className={closeIcon} onClick={() => { dispatch(setShowSearchBar()) }}>
          <CloseIcon />
        </button>

        {/*---Search Dropdown--- */}
        {searchResults.length > 0 && inputRef.current?.value ?
          <ul className={searchResultsList} ref={dropdownRef} onMouseLeave={onMouseLeaveHandle}>

            {searchResults.map((item: SearchResultsPayload, index: number) => (
              <li key={index} >
                <Link 
                  to={item.linkPathName} 
                  state={{ ...item.linkState }}
                  ref={(e: any) => listElRef.current[index] = e}
                  onMouseEnter={onMouseEnterHandle}
                >
                  {item.linkContent.title ? <div className={ellipsis}>{item.linkContent.title}</div> : null}
                  {<div className={`${item.linkContent.title ? underText : null}`}>{`${item.linkContent.authorName}`}</div>}
                </Link>
              </li>)
            )}
          </ul> : null}

      </div>
    </div>
  );
}

export default SearchBar;