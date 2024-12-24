import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create Context
const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const [emailContext, setEmailContext] = useState(null);
  const [formDataContext, setFormDataContext] = useState({name: '',
                                                          phoneNumber: '',
                                                          address: ''});

  return (
    <AppContext.Provider value={{ emailContext, setEmailContext, formDataContext, setFormDataContext }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
    children: PropTypes.node, // Validates that `children` is a React node
  };

// Custom Hook for using context
export const useAppContext = () => useContext(AppContext);
