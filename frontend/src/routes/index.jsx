import { useAuth } from '@/context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { UserRoutes } from './client';
import { PublicRoutes } from './public';

export const RouterManager = () => {
  const { isAuthenticated } = useAuth();

  return <BrowserRouter>{isAuthenticated ? <UserRoutes /> : <PublicRoutes />}</BrowserRouter>;
};
