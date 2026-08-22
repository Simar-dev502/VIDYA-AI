import { createContext, useState, useContext, useEffect } from 'react';
import { languages } from '../data/mockData';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('vidyaai_language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('vidyaai_language', language);
  }, [language]);

  const currentLanguage = languages.find((l) => l.code === language) || languages[0];

  const changeLanguage = (code) => {
    setLanguage(code);
  };

  const value = {
    language,
    currentLanguage,
    languages,
    changeLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};