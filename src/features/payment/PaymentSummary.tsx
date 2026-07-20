import { useContext } from 'react';
import CartContext from '../../contexts/cartContext';

import styles from './PaymentSummary.module.scss';
import Section from './Section';

const { addressData, itemPrice, listItem, twoColumns } = styles;

export interface PaymentSummaryProps {

}

const PaymentSummary: React.FC<PaymentSummaryProps> = () => {
  const cartCtx = useContext(CartContext);
  return <>
    <Section hTitle="Order details">
      <div className={twoColumns}>
        <div className={addressData}>
          <h4>Billing</h4>
          <p>Imie i Nazwisko</p>
          <p>Ulica</p>
          <p>Kod i Misato</p>
          <p>Kraj</p>
        </div>
        <div className={addressData}>
          <h4>Payment Method</h4>
          <p>{cartCtx.paymentMethod}</p>
        </div>
      </div>
    </Section>

    <Section hTitle='Products'>
      <ul>
        {cartCtx.productsInCart.map((item) => {
          return <li key={item.ebook_id} className={listItem}>
            <span>{item.title}</span>
            <span className={itemPrice}>{item.price} zł</span>
          </li>
        })}
      </ul>
    </Section>
  </>
}

export default PaymentSummary;