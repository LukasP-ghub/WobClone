import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

import SignUp from '../features/signUp/SignUp'
import SignIn from '../features/signIn/SignIn'
import HeaderUserLinks from '../commonComponents/headerUserLinks/HeaderUserLinks'

import styles from './SignPage.module.scss'

const { main, wrapper } = styles;

const SignPage = () => {
  const { currentUser } = useAuth();

  return <div className={wrapper}>
    <HeaderUserLinks />
    <main className={main}>
      <Switch>
        {currentUser ? <Redirect to="/" /> : null}
        <Route exact path="/sign-page">
          <Redirect to="/sign-page/login" />
        </Route>
        <Route path='/sign-page/register' exact><SignUp /></Route>
        <Route path='/sign-page/login' exact><SignIn /></Route>
      </Switch>
    </main>

  </div>
}

export default SignPage;