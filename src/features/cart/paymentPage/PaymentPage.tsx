import { lazy, Suspense, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import styles from './PaymentPage.module.scss';

const TopBarFixed = lazy(() => import('../../../commonComponents/topBarFixed/TopBarFixed'));
const HeaderUserLinks = lazy(() => import('../../../commonComponents/headerUserLinks/HeaderUserLinks'));
const BigNextLinkBtn = lazy(() => import('../../../commonComponents/buttons/BigNextLinkBtn'));
const BigReturnBtn = lazy(() => import('../../../commonComponents/buttons/BigReturnBtn'));
const PriceSummary = lazy(() => import('../PriceSummary'));
const OrderProgress = lazy(() => import('./OrderProgress'));
const PaymentOptions = lazy(() => import('./PaymentOptions'));
const PaymentSummary = lazy(() => import('./PaymentSummary'));

const { nextBtn, prevBtn, routesWrapper, wrapper } = styles;

export interface PaymentPageProps {

}

const PaymentPage: React.FC<PaymentPageProps> = () => {
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
      <Suspense fallback={<div>Loading...</div>}>
        <TopBarFixed>
          <HeaderUserLinks />
        </TopBarFixed>

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
      </Suspense>
    </div>
  );
}

export default PaymentPage;