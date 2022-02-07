import { useContext } from 'react';
import CartContext from '../../contexts/cartContext';

import CartIcon from '../../assets/svg/CartIcon';
import styles from './BuyBtn.module.scss';
import { ProductModel } from '../../types/types';


const { price, toCartBtn, toCartWrapper } = styles;

export interface BuyBtnProps {
  product: ProductModel
}

const BuyBtn: React.FC<BuyBtnProps> = ({ product }) => {
  const cartCtx = useContext(CartContext);

  return (<div className={toCartWrapper}>
    <button className={toCartBtn} onClick={() => cartCtx.addToCart(product)}>
      <CartIcon width={26} height={26} strokeColor='white' />
    </button>
    <div className={price}>{`${product?.price} zł`}</div>
  </div>);
}

export default BuyBtn;