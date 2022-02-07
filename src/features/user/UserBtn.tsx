import { Link } from 'react-router-dom';

import UserIcon from '../../assets/svg/UserIcon';

function UserBtn() {
  return (
    <Link to="/sign-page" >
      <UserIcon />
    </Link>
  );
}

export default UserBtn;