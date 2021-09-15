import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Main from './containers/Main';
import PrivateRoute from './commonComponents/privateRoute/PrivateRoute';
import LoadingSpinner from './commonComponents/loadingSpinner/LoadingSpinner';
import styles from './App.module.scss';

const SignPage = React.lazy(() => import('./containers/SignPage'));
const CartPage = React.lazy(() => import('./features/cart/CartPage'));
const PaymentPage = React.lazy(() => import('./features/cart/paymentPage/PaymentPage'));

function App() {

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route path="/sign-page"><SignPage /></Route>
            <Route path="/cart" exact><CartPage /></Route>
            <PrivateRoute path="/cart/payment" component={PaymentPage} />
            <Route path="/" >
              <Header />
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;