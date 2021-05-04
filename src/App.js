import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './containers/Header.js';
import Main from './containers/Main.js';
import CartPage from './features/cart/CartPage';


import styles from './App.scss';

function App() {
  return (

    <BrowserRouter>
      <div className={styles.app}>
        <Switch>
          <Route path="/cart" exact><CartPage /></Route>

          <Route path="/" >
            <Header />
            <Main />
          </Route>


        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
/*


*/