import styles from './OrderProgress.module.scss';

const { active, orderProgressSeparator, orderProgressStep, orderProgressWrapper } = styles;

export interface OrderProgressProps {
  step: number;
}

const OrderProgress: React.FC<OrderProgressProps> = ({ step }) => {

  const activeStep = (e: any) => {
    //const target=e.target as Element;
    //const act= step <= e.target.getAttribute('data-step') ? active : null;
    console.log('sss');
    // console.log(e.currentTarget.getAttribute('data-step'));
    //  if (step <= e.currentTarget.getAttribute('data-step')) {
    //   e.currentTarget.classList.toggle(active);
    // }

  }

  return (
    <div className={orderProgressWrapper}>
      <div className={`${orderProgressStep} `} data-step={1} >
        Cart
      </div>
      <div className={orderProgressSeparator} />
      <div className={`${orderProgressStep} `} data-step={2} >
        Delivery and Payment
      </div>
      <div className={orderProgressSeparator} />
      <div className={`${orderProgressStep} `} data-step={3}>
        Summary
      </div>
    </div>
  );
}

export default OrderProgress;