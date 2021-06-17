import { useContext, useState } from 'react';

import CartContext from '../../../store/cartContext';
import Section from './Section';
import styles from './PaymentOptions.module.scss';


const { addressData, paymentOption, paymentOptions, selectedPayment, } = styles;

export interface PaymentOptionsProps {

}

const PaymentOptions: React.FC<PaymentOptionsProps> = () => {
  const cartCtx = useContext(CartContext);
  const [prevOption, setPrevOption] = useState<HTMLDivElement | null>(null);

  const handlePaymentMethod = (e: any) => {
    const method = e.target.textContent;
    const paymentOption = e.target;
    if (prevOption) prevOption.classList.toggle(selectedPayment);
    paymentOption.classList.toggle(selectedPayment);
    setPrevOption(paymentOption);
    cartCtx.choosePaymentMethod(method);
  }

  return <>
    <Section hTitle="Billing">
      <div className={addressData}>
        <p>Imie i Nazwisko</p>
        <p>Ulica</p>
        <p>Kod i Misato</p>
        <p>Kraj</p>
      </div>
    </Section>

    <Section hTitle='Payment Method'>
      <div className={paymentOptions} onClick={handlePaymentMethod}>
        <div className={paymentOption} >Bank transfer</div>
        <div className={paymentOption} >Card</div>
        <div className={paymentOption} >PayPal</div>
        <div className={paymentOption} >PayU</div>
      </div>
    </Section>
  </>
}

export default PaymentOptions;