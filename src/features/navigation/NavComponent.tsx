import { Link } from 'react-router-dom';
import useWidth from '../../helpers/useWidth';
import styles from './NavComponent.module.scss'

const { arrow, content, navComponent } = styles;

type navComponentType = {
  name: string,
  onClick: () => void,
  onClickDesktop?: () => void,
  extended?: boolean,
  transDelay?: number;
}

const NavComponent: React.FC<navComponentType> = ({ name, onClick, onClickDesktop, extended, transDelay }) => {
  const { currWidth } = useWidth();

  return (
    <Link
      to={'/catalog/' + name}
      className={`${navComponent} ${extended ? arrow : null}`}
      style={{ transitionDelay: `${transDelay}ms` }}
      onClick={currWidth < 950 ? onClick : onClickDesktop}
    >
      <div className={content}>{name}</div>
    </Link>
  );
};

export default NavComponent;
