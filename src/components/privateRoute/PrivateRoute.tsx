import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export interface PrivateRouteProps {
  children?: React.ReactNode; // Dla tras zagnieżdżonych
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/sign-page" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;