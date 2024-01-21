import { Login } from '@/pages/client/Login';
import { Routes, Route, Navigate } from 'react-router-dom';

export const PublicRoutes = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
