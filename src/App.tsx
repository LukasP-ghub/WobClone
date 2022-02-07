import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useGetEbooksQuery, useGetCategoriesQuery, useGetPromotionsQuery } from './services/apiSlice';

import MainPage from './pages/mainPage/MainPage';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';
import styles from './App.module.scss';

const ProductPage = lazy(() => import('./pages/productPage/ProductPage'));
const SignInPage = lazy(() => import('./pages/signInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/signUpPage/SignUpPage'));
const CartPage = lazy(() => import('./pages/cartPage/CartPage'));
const PaymentPage = lazy(() => import('./pages/paymentPage/PaymentPage'));
const CatalogPage = lazy(() => import('./pages/catalogPage/CatalogPage'));

function App() {
  const { data: ebooksData, isError: ebooksIsError, isLoading: ebooksIsLoading } = useGetEbooksQuery('');
  const { data: categoryData, isError: categoryIsError, isLoading: categoryIsLoading } = useGetCategoriesQuery('');
  const { data: promotionsData, isError: promotionIsError, isLoading: promotionIsLoading } = useGetPromotionsQuery('');

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <div className={styles.app}>

          <Switch>
            <PrivateRoute path="/cart/payment" component={PaymentPage} />
            <Route path="/sign-in"><SignInPage /></Route>
            <Route path="/sign-up"><SignUpPage /></Route>
            <Route path="/cart" exact><CartPage /></Route>
            <Route path="/ebook/:tags" exact render={(props) => <ProductPage {...props} />} />
            <Route path="/catalog/:tag" exact render={(props) => <CatalogPage {...props} />} />
            <Route path="/" ><MainPage /></Route>
          </Switch>

        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;