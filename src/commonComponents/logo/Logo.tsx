import { Link } from 'react-router-dom';

import styles from './Logo.module.scss'

const { logo, logoWrapper } = styles;

function Logo() {
  return (
    <div className={logoWrapper}>
      <Link className={logo} to='/'>
        Wob&shy;Clone
      </Link>
    </div>
  );
}

export default Logo;