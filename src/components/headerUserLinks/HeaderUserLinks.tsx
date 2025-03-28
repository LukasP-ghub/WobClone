import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, selectUser } from '../../store/authSlice';
import styles from './HeaderUserLinks.module.scss';

const { header, logo, margins, topBarItem } = styles;

export interface HeaderUserLinksProps {

}

const HeaderUserLinks: React.FC<HeaderUserLinksProps> = () => {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <header className={header}>
      <Link to='/' className={`${topBarItem} ${logo}`}>WobClone</Link>

      {!currentUser ?
        <span>
          <Link to='/sign-page/login' className={margins}>
            Sign In
          </Link>
          <Link to='/sign-page/register' className={margins}>
            Sign Up
          </Link>
        </span> :
        <span>
          <button onClick={signOut} className={margins}>Sign Out</button>
        </span>}

    </header>
  );
}

export default HeaderUserLinks;