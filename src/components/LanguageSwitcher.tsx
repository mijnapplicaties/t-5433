
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        onClick={() => setLanguage('es')}
        className="text-sm"
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        onClick={() => setLanguage('en')}
        className="text-sm"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
