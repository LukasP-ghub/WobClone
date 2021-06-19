import { useContext } from 'react';
import { useAppSelector } from '../../helpers/types/hooks';

import { selectProduct } from './productPageSlice';
import CartContext from '../../store/cartContext';

import CartIcon from '../../assets/svg/CartIcon';
import styles from './ProductBuy.module.scss';


const { price, toCartBtn, toCartWrapper } = styles;

export interface ProductBuyProps {

}

const ProductBuy: React.FC<ProductBuyProps> = () => {
  const cartCtx = useContext(CartContext);
  const product = useAppSelector(selectProduct);


  return (<div className={toCartWrapper}>
    <button className={toCartBtn} onClick={() => cartCtx.addToCart(product)}>
      <CartIcon width={26} height={26} strokeColor='white' />
    </button>
    <div className={price}>{`${product?.price} zł`}</div>
  </div>);
}

export default ProductBuy;