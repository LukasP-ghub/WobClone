import { Link } from 'react-router-dom';

import UserIcon from '../../assets/svg/UserIcon';
import styles from './User.module.scss';

const { userIcon, userIconWrapper } = styles;

function User() {
  return (
    <div className={userIconWrapper}>
      <Link to="/sign-page" className={userIcon}>
        <UserIcon />
      </Link>
    </div>
  );
}

export default User;