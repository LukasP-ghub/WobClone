import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Używamy Routes zamiast Switch

import styles from './App.module.scss';
import PrivateRoute from './components/privateRoute/PrivateRoute'; // Zakładam, że obsługuje logikę dla React Router v6
import SuspenseWrapper from './components/SuspenseWrapper';
import MainPage from './pages/mainPage/MainPage';

const ProductPage = lazy(() => import('./pages/productPage/ProductPage'));
const SignInPage = lazy(() => import('./pages/signInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/signUpPage/SignUpPage'));
const CartPage = lazy(() => import('./pages/cartPage/CartPage'));
const PaymentPage = lazy(() => import('./pages/paymentPage/PaymentPage'));
const CatalogPage = lazy(() => import('./pages/catalogPage/CatalogPage'));

function App() {
  // const { data: ebooksData, isError: ebooksIsError, isLoading: ebooksIsLoading } = useGetEbooksQuery({});
  // const { data: categoryData, isError: categoryIsError, isLoading: categoryIsLoading } = useGetCategoriesQuery('');
  // const { data: promotionsData, isError: promotionIsError, isLoading: promotionIsLoading } = useGetPromotionsQuery('');

  return (
    <BrowserRouter >
      <SuspenseWrapper>
        <div className={styles.app}>
          <Routes>
            <Route path="/cart/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/ebook/:tags" element={<ProductPage />} />
            <Route path="/catalog/:tag" element={<CatalogPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </SuspenseWrapper>
    </BrowserRouter>
  );
}

export default App;