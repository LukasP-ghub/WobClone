import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import CartContext from '../../store/cartContext';

import styles from './CartPage.module.scss'

const { cartTab, cartTabs, price, product, productsList, productImg, productTitle, productPrice, totalDiscount, summary, topBar, topBarItem, logo, wrapper } = styles;
const { returnBtn, removeProductBtn, startPaymentBtn } = styles;
const { centerVH, centerH } = styles;

function CartPage() {
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  const initialValue = 0;
  const discount = 0;
  const nominalPrice = cartCtx.productsInCart.reduce((total, currItem) => total + currItem.price * 1, initialValue) || 0;
  const actualPrice = nominalPrice - discount;
  const prodInCartQuantity = cartCtx.productsInCart.length;


  return (
    <div className={wrapper}>
      {/* --- HEADER --- */}
      <div className={topBar}>
        <Link to={'/'} className={`${topBarItem} ${logo}`}>WobClone</Link>
        <div>
          <span className={topBarItem}>Zaloguj się</span>
          <span className={topBarItem}>Załóż konto</span>
        </div>
      </div>

      {/* ---  --- */}
      <section className={cartTabs}>
        <div className={cartTab}>Koszyk {`(${prodInCartQuantity})`}</div>
      </section>

      {/* --- PRODUCTS IN CART --- */}
      <section>
        <ul className={productsList}>
          {cartCtx.productsInCart.map(item => <li key={item.id} className={product}>
            <div className={productImg}></div>
            <div className={productTitle}>{item.title}</div>
            <div className={productPrice}>{`${item.price} zł`}</div>
            <button className={removeProductBtn} onClick={() => cartCtx.removeFromCart(item.id)}><span className={centerVH}>X</span></button>
          </li>)}

        </ul>
      </section>

      {/* --- CART SUMMARY --- */}
      <section className={summary}>
        {discount > 0 ? <div className={price}>
          <span>Wartość produktów:</span>
          <span>{nominalPrice} zł</span>
        </div> : null}

        <div className={price}>
          <strong >Razem:</strong>
          <strong >{actualPrice} zł</strong>
        </div>

        {discount > 0 ? <div className={totalDiscount}>
          <strong className={centerVH}>Oszczędzasz: {discount} zł</strong>
        </div> : null}
      </section>

      <button className={`${startPaymentBtn} ${centerH}`}><span className={centerVH}>Przejdź do kasy</span></button>
      {/* --- RETURN TO SHOP BTN --- */}
      <button className={`${returnBtn} ${centerH}`} onClick={handleGoBack}><span className={centerVH}>Wróć do sklepu</span></button>
    </div>
  );
}

export default CartPage;