import { Link } from 'react-router-dom';

import styles from './NavComponent.module.scss'

const { arrow, content, navComponent } = styles;

const NavComponent: React.FC<{ name: string, onClick: () => void, extended?: boolean }> = ({ name, onClick, extended }) => {

  return (

    <Link
      to={'/catalog/' + name}
      className={`${navComponent} ${extended ? arrow : null}`}
      onClick={onClick}>

      <div className={content}>{name}</div>

    </Link>

  );
}

export default NavComponent;
