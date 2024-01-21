import { auth_user } from '@/helpers/constants';
import { storage } from '@/helpers/storage';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authLogin = (user) => {
    storage.set(auth_user, user, 'object');

    setUser(user);
    setIsAuthenticated(true);
  };

  const authLogout = () => {
    setUser(null);
    setIsAuthenticated(false);

    storage.remove(auth_user);
    setIsAuthenticated(false);
  };

  /*const getInfo = () => {
    const userString = storage.get(auth_user, 'string');

    if (userString) {
      try {
        const user = JSON.parse(userString);

        setUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user JSON:', error);
      }
    }
  };

  useEffect(() => {
    getInfo();
  }, [isAuthenticated]);*/

  return (
    <AuthContext.Provider value={{ authLogin, user, authLogout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
