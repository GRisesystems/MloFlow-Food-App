import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BASE_URL } from '../components/signin/constants';

interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  isFirstTimeLogin: boolean;
  errorMessage: string;
  login: (
    email: string,
    password: string
  ) => Promise<{
    access: string;
    refresh: string;
    category: string;
    first_time_login: boolean;
  }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
    const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(() => {
    const storedFirstTimeLogin = localStorage.getItem('isFirstTimeLogin');
    return storedFirstTimeLogin ? JSON.parse(storedFirstTimeLogin) : false;
  });
  const [errorMessage, setErrorMessage] = useState('');

  
  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('isFirstTimeLogin', JSON.stringify(isFirstTimeLogin));
  }, [isFirstTimeLogin]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/authapp/token/`, { email, password });

      if (response.status === 200) {
        const data = response.data;
        setIsAuthenticated(true);
        setIsFirstTimeLogin(data.first_time_login);
        setLoading(false);

        return data;
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsFirstTimeLogin(false);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        errorMessage,
        login,
        logout,
        loading,
        isFirstTimeLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
