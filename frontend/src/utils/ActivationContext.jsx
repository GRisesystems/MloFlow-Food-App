// ActivationContext.js
import React, { createContext, useState } from 'react';

const ActivationContext = createContext();

const ActivationProvider = ({ children }) => {
  const [activationEmail, setActivationEmail] = useState('');

  return (
    <ActivationContext.Provider value={{ activationEmail, setActivationEmail }}>
      {children}
    </ActivationContext.Provider>
  );
};

export { ActivationProvider, ActivationContext };
