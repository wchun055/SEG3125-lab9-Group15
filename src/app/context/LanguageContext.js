'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [english, setEnglish] = useState(true);

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('language');
    if (saved !== null) {
      setEnglish(saved === 'true');
    }
  }, []);

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