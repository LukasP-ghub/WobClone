import { useContext } from 'react';
import CartContext from '../../contexts/cartContext';

import styles from './PriceSummary.module.scss';

const { centerVH, colorReddy, price, summary, totalDiscount } = styles;

export interface PriceSummaryProps {

}

const PriceSummary: React.FC<PriceSummaryProps> = () => {
  const cartCtx = useContext(CartContext);
  const discount: number = cartCtx.pricing.totalDiscount || 0;
  const nominalPrice: number = cartCtx.pricing.nominalPrice || 0;
  const actualPrice: number = cartCtx.pricing.actualPrice;

  return (
    <section className={summary}>
      {discount > 0 ? <div className={price}>
        <span>Products value:</span>
        <span>{nominalPrice} zł</span>
      </div> : null}

      <div className={price}>
        <strong >Total:</strong>
        <strong className={colorReddy} >{actualPrice} zł</strong>
      </div>

      {discount > 0 ? <div className={totalDiscount}>
        <strong className={centerVH}>You save: {discount} zł</strong>
      </div> : null}
    </section>);
}

export default PriceSummary;