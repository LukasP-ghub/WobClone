import styles from './OrderProgress.module.scss';

const { active, orderProgressSeparator, orderProgressStep, orderProgressWrapper } = styles;

export interface OrderProgressProps {
  step: number
}

const OrderProgress: React.FC<OrderProgressProps> = ({ step }) => {

  return (
    <div className={orderProgressWrapper}>
      <div className={`${orderProgressStep} ${step >= 1 ? active : null}`} data-step={1} >
        Cart
      </div>
      <div className={orderProgressSeparator} />
      <div className={`${orderProgressStep} ${step >= 2 ? active : null}`} data-step={2} >
        Delivery and Payment
      </div>
      <div className={orderProgressSeparator} />
      <div className={`${orderProgressStep} ${step >= 3 ? active : null}`} data-step={3}>
        Summary
      </div>
    </div>
  );
}

export default OrderProgress;
