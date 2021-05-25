import { useHistory } from 'react-router-dom';

import TopBarFixed from '../../commonComponents/topBarFixed/TopBarFixed';
import HeaderUserLinks from '../../commonComponents/headerUserLinks/HeaderUserLinks';
import BigNextLinkBtn from '../../commonComponents/buttons/BigNextLinkBtn';
import BigReturnBtn from '../../commonComponents/buttons/BigReturnBtn';

import OrderProgress from './OrderProgress';
import PaymentOptions from './PaymentOptions';

import styles from './PaymentPage.module.scss';

const { wrapper } = styles;

export interface PaymentPageProps {

}

const PaymentPage: React.FC<PaymentPageProps> = () => {
  const history = useHistory();
  const handleGoBack = () => history.goBack();

  return (
    <div className={wrapper}>
      <TopBarFixed>
        <HeaderUserLinks />
      </TopBarFixed>
      <OrderProgress step={2} />
      <PaymentOptions />
      <BigNextLinkBtn linkPath={`${history.location.pathname}/summary`}>Go to summary</BigNextLinkBtn>
      <BigReturnBtn clickHandler={handleGoBack}>Back</BigReturnBtn>
    </div>
  );
}

export default PaymentPage;