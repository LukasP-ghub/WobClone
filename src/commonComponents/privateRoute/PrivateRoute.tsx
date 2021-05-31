import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';

export interface PrivateRouteProps {
  component: any,
  path: string,
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (<Route {...rest} render={props => currentUser ? <Component {...props} /> : <Redirect to="/sign-page" />} />)
}

export default PrivateRoute;