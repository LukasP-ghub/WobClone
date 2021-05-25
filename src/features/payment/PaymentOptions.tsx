import Section from './Section';
import styles from './PaymentOptions.module.scss';

const { addressData, paymentOption, paymentOptions, toPay, } = styles;

export interface PaymentOptionsProps {

}

const PaymentOptions: React.FC<PaymentOptionsProps> = () => {
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
      <div className={paymentOptions}>
        <div className={paymentOption}>Bank transfer</div>
        <div className={paymentOption}>Card</div>
        <div className={paymentOption}>PayPal</div>
        <div className={paymentOption}>PayU</div>
      </div>
    </Section>

    <section className={toPay}>
      <h3>To pay:</h3>
      <span>11111 zł</span>
    </section>
  </>
}

export default PaymentOptions;