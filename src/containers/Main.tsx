import { Route, Switch } from 'react-router-dom';

import StartPage from '../features/startPage/StartPage'
import Catalog from '../features/catalog/Catalog'
import ProductPage from '../features/productPage/ProductPage'

//import Cart from '../features/cart/CartPage'


import styles from './Main.module.scss';

const { mainPage } = styles;

function Main() {

  return (
    <main className={mainPage} >
      <Switch>
        <Route path="/" exact><StartPage /></Route>
        <Route path="/catalog/:tag" exact><Catalog /></Route>
        <Route path="/ebook/:tags" exact render={(props) => <ProductPage {...props} />} />
      </Switch>
    </main>
  );
}

export default Main;