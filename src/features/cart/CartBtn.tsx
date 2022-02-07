import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../contexts/cartContext';

import CartIcon from '../../assets/svg/CartIcon';
import styles from './CartBtn.module.scss'

const { cartItemsCounter, cartItemsCounterWrapper, cartIcon } = styles;

function CartBtn() {
  const cartCtx = useContext(CartContext);

  return (
    <Link to={'/cart'} className={cartIcon}>
      <CartIcon />
      <div className={cartItemsCounterWrapper}>
        <span className={cartItemsCounter}>{cartCtx.productsInCart.length}</span>
      </div>
    </Link>
  );
}

export default CartBtn;