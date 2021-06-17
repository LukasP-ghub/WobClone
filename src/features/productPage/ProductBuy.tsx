import { useContext } from 'react';
import { useAppSelector } from '../../helpers/types/hooks';
import useWidth from '../../helpers/useWidth';

import { selectProduct } from './productPageSlice';
import CartContext from '../../store/cartContext';

import styles from './ProductBuy.module.scss';


const { price, toCartBtn, toCartWrapper } = styles;

export interface ProductBuyProps {

}

const ProductBuy: React.FC<ProductBuyProps> = () => {
  const cartCtx = useContext(CartContext);
  const { currWidth } = useWidth();
  const product = useAppSelector(selectProduct);


  return (<div className={toCartWrapper}>
    <button className={toCartBtn} onClick={() => cartCtx.addToCart(product)}>
      <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
        <circle cx="25" cy="27" r="2" />
        <circle cx="12" cy="27" r="2" />
      </svg>
    </button>
    <div className={price}>{`${product?.price} zł`}</div>
  </div>);
}

export default ProductBuy;