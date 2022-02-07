import HeaderItem from '../../components/HeaderItem/HeaderItem';
import CartBtn from '../cart/CartBtn';
import styles from './AppHeader.module.scss';
const { cartItemWrapper } = styles;

function CartItem() {

  return (
    <HeaderItem classes={[cartItemWrapper]}>
      <CartBtn />
    </HeaderItem>
  );
}

export default CartItem;