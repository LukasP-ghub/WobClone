import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import HeaderUserLinks from '../../commonComponents/headerUserLinks/HeaderUserLinks';
import TopBarFixed from '../../commonComponents/topBarFixed/TopBarFixed';
import BigNextLinkBtn from '../../commonComponents/buttons/BigNextLinkBtn';
import BigReturnBtn from '../../commonComponents/buttons/BigReturnBtn';
import CartContext from '../../store/cartContext';

import PriceSummary from './PriceSummary';


import styles from './CartPage.module.scss'
import covers from '../../assets/images';

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
    </div>
  );
}

export default CartPage;