import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../../store/authSlice';

export interface PrivateRouteProps {
  children?: React.ReactNode; // Dla tras zagnieżdżonych
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const currentUser = useSelector(selectUser);

  if (!currentUser) {
    return <Navigate to="/sign-page" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;