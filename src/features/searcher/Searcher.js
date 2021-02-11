import React from 'react';

import SearchBar from './SearchBar';
import styles from './Searcher.module.scss';

const { searcher } = styles;

function Searcher() {
  return (
    <React.Fragment>
      <div className={searcher}>
        search
      </div>
      <SearchBar />
    </React.Fragment>
  );
}

export default Searcher;