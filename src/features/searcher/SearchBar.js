import { React, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAuthors, selectFilterKey, selectFilterResults, setFilterKey, setFilterResults } from './searcherSlice';

import styles from './SearchBar.module.scss';

const { searchBar, searchResults, wrapper } = styles;

function SearchBar() {
  //const [filteredAuthors, setFilteredAuthors] = useState([]);
  const dispatch = useDispatch();
  const authors = useSelector(selectAuthors);
  const filterKey = useSelector(selectFilterKey);
  const filterResults = useSelector(selectFilterResults);
  const firstRenderRef = useRef(true);

  //searching with debounce and avoid initial searching, 
  useEffect(() => {
    let timer;
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      timer = setTimeout(() => {
        dispatch(setFilterResults(authors.filter(author => author.toLowerCase().includes(filterKey.toLowerCase()))));
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [filterKey, authors]);

  return (
    <div className={searchBar}>
      <div className={wrapper}>
        <button>s</button>
        <input type="text" placeholder="Szukaj" name="searchField" onChange={(e) => { dispatch(setFilterKey(e.target.value)) }} />
        <button>x</button>
        {filterResults.filteredAuthors.length > 0 ? <ul className={searchResults}>
          {filterResults.filteredAuthors.map(author => <li key={author}>{author}</li>)}
        </ul> : null}
      </div>

    </div>
  );
}

export default SearchBar;