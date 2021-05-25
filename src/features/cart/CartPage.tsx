import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import HeaderUserLinks from '../../commonComponents/headerUserLinks/HeaderUserLinks';
import TopBarFixed from '../../commonComponents/topBarFixed/TopBarFixed';
import BigNextLinkBtn from '../../commonComponents/buttons/BigNextLinkBtn';
import BigReturnBtn from '../../commonComponents/buttons/BigReturnBtn';
import CartContext from '../../store/cartContext';


import styles from './CartPage.module.scss'
import covers from '../../assets/images';

const { cartTab, cartTabs, price, product, productsList, productImg, productTitle, productPrice, summary, totalDiscount, wrapper } = styles;
const { removeProductBtn } = styles;
const { centerVH } = styles;

function CartPage() {
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const handleGoBack = () => history.goBack();


  const discount: number = cartCtx.pricing.totalDiscount || 0;
  const nominalPrice: number = cartCtx.pricing.nominalPrice || 0;
  const actualPrice: number = cartCtx.pricing.actualPrice;
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

      {/* ---  --- */}
      <section className={cartTabs}>
        <div className={cartTab}>Cart {`(${prodInCartQuantity})`}</div>
      </section>

      {/* --- PRODUCTS IN CART --- */}
      <section>
        <ul className={productsList}>
          {cartItems}
        </ul>
      </section>

      {/* --- CART SUMMARY --- */}
      <section className={summary}>
        {discount > 0 ? <div className={price}>
          <span>Products value:</span>
          <span>{nominalPrice} zł</span>
        </div> : null}

        <div className={price}>
          <strong >Total:</strong>
          <strong >{actualPrice} zł</strong>
        </div>

        {discount > 0 ? <div className={totalDiscount}>
          <strong className={centerVH}>You save: {discount} zł</strong>
        </div> : null}
      </section>

      <BigNextLinkBtn linkPath={`${history.location.pathname}/payment`}>Go to payment</BigNextLinkBtn>
      <BigReturnBtn clickHandler={handleGoBack}>Back to shop</BigReturnBtn>
    </div>
  );
}

export default CartPage;