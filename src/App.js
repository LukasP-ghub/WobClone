import React from 'react';
import Header from './containers/Header.js';
import Main from './containers/Main.js';
import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
