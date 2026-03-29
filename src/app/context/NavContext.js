'use client';

import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export function NavProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNav must be used within NavProvider');
  }
  return context;
}
