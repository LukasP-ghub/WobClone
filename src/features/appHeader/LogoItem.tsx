import HeaderItem from '../../components/HeaderItem/HeaderItem';
import Logo from '../../components/logo/Logo';
import styles from './AppHeader.module.scss';
const { logoItemWrapper } = styles;

function LogoItem() {

  return (
    <HeaderItem classes={[logoItemWrapper]}>
      <Logo />
    </HeaderItem>
  );
}

export default LogoItem;