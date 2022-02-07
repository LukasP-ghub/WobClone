import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
    setPaymentStep(2);
  };

  const handleGoNext = () => {
    setPaymentStep(3);
  }


  return (
    <div className={wrapper}>
      <OrderProgress step={paymentStep} />

      <div className={routesWrapper}>
        <Switch>
          <Route path={`/cart/payment`} exact ><PaymentOptions /></Route>
          <Route path={`/cart/payment/summary`} exact><PaymentSummary /> </Route>
        </Switch>
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