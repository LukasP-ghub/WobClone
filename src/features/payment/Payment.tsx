import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import styles from './Payment.module.scss';

import BigNextLinkBtn from '../../components/buttons/BigNextLinkBtn';
import BigReturnBtn from '../../components/buttons/BigReturnBtn';
import PriceSummary from '../cart/PriceSummary';
import OrderProgress from './OrderProgress';
import PaymentOptions from './PaymentOptions';
import PaymentSummary from './PaymentSummary';

const { nextBtn, prevBtn, routesWrapper, wrapper } = styles;

export interface PaymentProps {

}

const Payment: React.FC<PaymentProps> = () => {
  const [paymentStep, setPaymentStep] = useState(2);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
    setPaymentStep(2);
  };

  const handleGoNext = () => {
    setPaymentStep(3);
  }


  return (
    <div className={wrapper}>
      <OrderProgress step={paymentStep} />

      <div className={routesWrapper}>
        <Routes>
          <Route path={`/cart/payment`} element={<PaymentOptions />} />
          <Route path={`/cart/payment/summary`} element={<PaymentSummary />} />
        </Routes>
      </div>
      <span className={nextBtn}>
        <PriceSummary />
        {paymentStep !== 3 ? <BigNextLinkBtn linkPath={`/cart/payment/summary`} clickHandler={handleGoNext}>Go to summary</BigNextLinkBtn> : null}
      </span>
      <span className={prevBtn}><BigReturnBtn clickHandler={handleGoBack}>Back</BigReturnBtn></span>
    </div>
  );
}

export default Payment;