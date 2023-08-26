import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BASE_URL } from '../components/signin/constants';

interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  isFirstTimeLogin: boolean;
  isProfileComplete: boolean;
  errorMessage: string;
  first_name: string;
  surname: string;
  accessToken: string;
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
  // const [isProfileComplete, setIsProfileComplete] = useState(false);


  // set logged in user first name
  const [first_name, setFirstName] = useState(() => {
    const storedFirstName = localStorage.getItem('first_name');
    return storedFirstName || '';
  });
  // Set logged in user surname
  const [surname, setSurname] = useState(() => {
    const storedSurname = localStorage.getItem('surname');
    return storedSurname || '';
  });
  // set User Authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  // set first Time Login
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(() => {
    const storedFirstTimeLogin = localStorage.getItem('isFirstTimeLogin');
    return storedFirstTimeLogin ? JSON.parse(storedFirstTimeLogin) : false;
  });

  // set logged in user access token
  const [accessToken, setAccessToken] = useState(() => {
    const storedAccessToken = localStorage.getItem('access_token');
    return storedAccessToken || '';
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      console.log('access Token', accessToken)
    }
  }, [accessToken]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('isFirstTimeLogin', JSON.stringify(isFirstTimeLogin));
  }, [isFirstTimeLogin]);

  const [isProfileComplete, setIsProfileComplete] = useState(() => {
    const storedProfileComplete = localStorage.getItem('is_profile_complete');
    return storedProfileComplete ? JSON.parse(storedProfileComplete) : false;
  });


  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/authapp/login/`, { email, password });

      if (response.status === 200) {
        const data = response.data;
        setIsAuthenticated(true);
        setIsFirstTimeLogin(true);
        setIsProfileComplete(data.is_profile_complete);
        setFirstName(data.firstname)
        setSurname(data.surname)
        setLoading(false);

        setAccessToken(data.tokens.access);

        localStorage.setItem('first_name', data.firstname);
        localStorage.setItem('surname', data.surname);
        localStorage.setItem('is_profile_complete', data.is_profile_complete);

        return { ...data, first_name, surname };
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
        first_name,
        surname,
        isFirstTimeLogin,
        accessToken,
        isProfileComplete,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
