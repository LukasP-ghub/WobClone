import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import StartPage from '../features/startPage/StartPage'
import styles from './Main.module.scss';

const Catalog = React.lazy(() => import('../features/catalog/Catalog'));
const ProductPage = React.lazy(() => import('../features/productPage/ProductPage'));

const { mainPage } = styles;

function Main() {

  return (
    <main className={mainPage} >
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact><StartPage /></Route>
          <Route path="/catalog/:tag" exact><Catalog /></Route>
          <Route path="/ebook/:tags" exact render={(props) => <ProductPage {...props} />} />
        </Switch>
      </Suspense>
    </main>
  );
}

export default Main;