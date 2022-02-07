import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CartContext from '../../contexts/cartContext';
import covers from '../../assets/images';

import BigNextLinkBtn from '../../components/buttons/BigNextLinkBtn';
import BigReturnBtn from '../../components/buttons/BigReturnBtn';
import PriceSummary from './PriceSummary';
import styles from './Cart.module.scss'

const { cartTab, cartTabs, product, productsList, productImg, productTitle, productPrice, wrapper } = styles;
const { removeProductBtn } = styles;
const { centerVH } = styles;

function Cart() {
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
      <button className={removeProductBtn} onClick={() => cartCtx.removeFromCart(Number(item.id))}><span className={centerVH}>X</span></button>
    </li>
  })

  return (
    <div className={wrapper}>
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

export default Cart;