import SmallHeaderLayout from "../../layouts/smallHeaderLayout/SmallHeaderLayout";
import Payment from "../../features/payment/Payment";

export interface PaymentPageProps {

}

const PaymentPage: React.FC<PaymentPageProps> = () => {

  return (
    <SmallHeaderLayout>
      <Payment />
    </SmallHeaderLayout>
  );
}

export default PaymentPage;