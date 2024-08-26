import React, { createContext, useContext, useState } from 'react';

// Create the context
const DomainContext = createContext();

// Custom hook to use domain context
export const useDomainContext = () => useContext(DomainContext);

// Provider component to wrap the app
export const DomainProvider = ({ children }) => {
  const [domainData, setDomainData] = useState({
    domain: '',
    nameserverData: '',
    propagationData: '',
    whoisData: '',
    sslCertData: '',
});

  return (
    <DomainContext.Provider value={{ domainData, setDomainData }}>
      {children}
    </DomainContext.Provider>
  );
};
