import React, { createContext } from 'react';

export const RouteContext = createContext();

const RouteProvider = ({ children, routes }) => {
  return (
    <RouteContext.Provider value={{ routes }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
