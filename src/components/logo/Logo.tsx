import { Link } from 'react-router-dom';

import styles from './Logo.module.scss'

const { logo } = styles;

function Logo() {
  return (
    <Link className={logo} to='/'>
      Wob&shy;Clone
    </Link>
  );
}

export default Logo;