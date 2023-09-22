/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { BASE_URL } from '../components/signin/constants';

const AuthContext = createContext(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);


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
    try {
      return storedProfileComplete ? JSON.parse(storedProfileComplete) : false;
    } catch (error) {
      console.error('Error parsing storedProfileComplete:', error);
      return false;
    }
  });


  // update profile function
  const updateProfileData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Include the accessToken
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/vendors/profile`, config); // Replace with your actual API endpoint

      if (response.status === 200) {
        const data = response.data;
        setIsProfileComplete(data.is_profile_complete);
        localStorage.setItem('is_profile_complete', JSON.stringify(data.is_profile_complete));
        return data;
      }
    } catch (error) {
      console.log(error)
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/authapp/login/`, { email, password });

      if (response.status === 200) {
        const data = response.data;
        // console.log(data)
        setIsAuthenticated(true);
        setIsFirstTimeLogin(true);
        setIsProfileComplete(data.is_profile_complete);
        setFirstName(data.first_name)
        setSurname(data.surname)
        setLoading(false);

        setAccessToken(data.tokens.access);

        localStorage.setItem('first_name', data.first_name);
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
        updateProfileData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
