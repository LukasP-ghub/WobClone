import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

import styles from './SignPage.module.scss'

const SignUp = lazy(() => import('../features/signUp/SignUp'));
const SignIn = lazy(() => import('../features/signIn/SignIn'));
const HeaderUserLinks = lazy(() => import('../commonComponents/headerUserLinks/HeaderUserLinks'));
const TopBarFixed = lazy(() => import('../commonComponents/topBarFixed/TopBarFixed'));

const { main, wrapper } = styles;

const SignPage = () => {
  const { currentUser } = useAuth();

  return <div className={wrapper}>
    <Suspense fallback={<div>Loading...</div>}>
      <TopBarFixed>
        <HeaderUserLinks />
      </TopBarFixed>
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
    </Suspense>
  </div>
}

export default SignPage;