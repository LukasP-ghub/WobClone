import { lazy, Suspense, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CartContext from '../../store/cartContext';
import LoadingSpinner from '../../commonComponents/loadingSpinner/LoadingSpinner';
import covers from '../../assets/images';
import styles from './CartPage.module.scss'

const HeaderUserLinks = lazy(() => import('../../commonComponents/headerUserLinks/HeaderUserLinks'));
const TopBarFixed = lazy(() => import('../../commonComponents/topBarFixed/TopBarFixed'));
const BigNextLinkBtn = lazy(() => import('../../commonComponents/buttons/BigNextLinkBtn'));
const BigReturnBtn = lazy(() => import('../../commonComponents/buttons/BigReturnBtn'));
const PriceSummary = lazy(() => import('./PriceSummary'));

const { cartTab, cartTabs, product, productsList, productImg, productTitle, productPrice, wrapper } = styles;
const { removeProductBtn } = styles;
const { centerVH } = styles;

function CartPage() {
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  const prodInCartQuantity = cartCtx.productsInCart.length;

  const cartItems = cartCtx.productsInCart.map(item => {
    const cover = covers.get(item.cover) || { small: '', medium: '' };
    return <li key={item.id} className={product}>
      <img src={`${cover.small}`} className={productImg} alt="" />
      <div className={productTitle}>{item.title}</div>
      <div className={productPrice}>{`${item.price} zł`}</div>
      <button className={removeProductBtn} onClick={() => cartCtx.removeFromCart(item.id)}><span className={centerVH}>X</span></button>
    </li>
  })

  return (
    <div className={wrapper}>
      <Suspense fallback={<LoadingSpinner />}>
        {/* --- HEADER --- */}
        <TopBarFixed>
          <HeaderUserLinks />
        </TopBarFixed>

        {/* --- TABS  --- */}
        <section className={cartTabs}>
          <div className={cartTab}>Cart {`(${prodInCartQuantity})`}</div>
        </section>

        {/* --- PRODUCTS IN CART --- */}
        <section>
          <ul className={productsList}>
            {cartItems}
          </ul>
        </section>
        <PriceSummary />

        <BigNextLinkBtn linkPath={`cart/payment`} clickHandler={() => { }}>Go to payment</BigNextLinkBtn>
        <BigReturnBtn clickHandler={handleGoBack}>Back to shop</BigReturnBtn>
      </Suspense>
    </div>
  );
}

export default CartPage;