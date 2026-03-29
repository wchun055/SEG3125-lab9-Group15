'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [english, setEnglish] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    const saved = window.localStorage.getItem('language');
    return saved !== null ? saved === 'true' : true;
  });

  const changeLanguage = () => {
    const newEnglish = !english;
    setEnglish(newEnglish);
    localStorage.setItem('language', newEnglish.toString());
  };

  return (
    <LanguageContext.Provider value={{ english, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}