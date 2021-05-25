import Section from './Section';
import styles from './PaymentSummary.module.scss';

const { addressData, twoColumns } = styles;

export interface PaymentSummaryProps {

}

const PaymentSummary: React.FC<PaymentSummaryProps> = () => {
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
          <p>Bank</p>
        </div>
      </div>
    </Section>

    <Section hTitle='Products'>

    </Section>
  </>
}

export default PaymentSummary;