import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/cartContext';

import CartIcon from '../../assets/svg/CartIcon';
import styles from './Cart.module.scss'

const { cartItemsCounter, cartItemsCounterWrapper, cartIcon, cartIconWrapper } = styles;

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className={cartIconWrapper}>
      <Link to={'/cart'} className={cartIcon}>
        <CartIcon />
        <div className={cartItemsCounterWrapper}>
          <span className={cartItemsCounter}>{cartCtx.productsInCart.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Cart;