import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './containers/Header.js';
import Main from './containers/Main.js';
import styles from './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
