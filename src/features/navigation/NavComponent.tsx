import { Link } from 'react-router-dom';
import useWidth from '../../helpers/useWidth';
import styles from './NavComponent.module.scss'

const { arrow, content, navComponent } = styles;

const NavComponent: React.FC<{ name: string, onClick: () => void, onClickDesktop?: () => void, extended?: boolean }> = ({ name, onClick, onClickDesktop, extended }) => {
  const { currWidth } = useWidth();

  return (
    <Link
      to={'/catalog/' + name}
      className={`${navComponent} ${extended ? arrow : null}`}
      onClick={currWidth < 950 ? onClick : onClickDesktop}>
      <div className={content}>{name}</div>
    </Link>
  );
}

export default NavComponent;
