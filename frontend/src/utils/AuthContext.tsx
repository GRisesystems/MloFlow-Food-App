import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../components/signin/constants';

interface AuthContextProps {
  isAuthenticated: boolean;
  errorMessage:String,  
  login: (email: string, password: string) => Promise<{ access: string; refresh: string }>;
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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
  
    const login = async (email: string, password: string) => {
      try {
        const response = await axios.post(`${BASE_URL}/auth/jwt/create/`, { email, password });
  
        if (response.status === 200) {
            
          const data = response.data; 
          setIsAuthenticated(true);
          return data; // Returning the response data
        } else {
          setErrorMessage('Invalid email or password');
        }
      } catch (error) {
        setErrorMessage('Invalid email or password');
      }
    };
  
    const logout = () => {      
      setIsAuthenticated(false);
      // Clear tokens from storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated,errorMessage,login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  