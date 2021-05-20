import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Main from './containers/Main';
import SignPage from './containers/SignPage';
import CartPage from './features/cart/CartPage';

import styles from './App.module.scss';

function App() {
  return (

    <BrowserRouter>
      <div className={styles.app}>
        <Switch>
          <Route path="/sign-page"><SignPage /></Route>
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