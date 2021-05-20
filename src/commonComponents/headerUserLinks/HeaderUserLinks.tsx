import { Link } from 'react-router-dom';

import styles from './HeaderUserLinks.module.scss';

const { header, logo, margins, topBarItem } = styles;

export interface HeaderUserLinksProps {

}

const HeaderUserLinks: React.FC<HeaderUserLinksProps> = () => {
  return (
    <header className={header}>
      <Link to='/' className={`${topBarItem} ${logo}`}>WobClone</Link>
      <span >
        <Link to='/sign-page/login' className={margins}>
          Sign In
        </Link>
        <Link to='/sign-page/register' className={margins}>
          Sign Up
        </Link>
      </span>

    </header>
  );
}

export default HeaderUserLinks;