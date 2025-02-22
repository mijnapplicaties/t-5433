
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        onClick={() => setLanguage('en')}
        className="text-sm"
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        onClick={() => setLanguage('es')}
        className="text-sm"
      >
        ES
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        onClick={() => setLanguage('fr')}
        className="text-sm"
      >
        FR
      </Button>
      <Button
        variant={language === 'de' ? 'default' : 'outline'}
        onClick={() => setLanguage('de')}
        className="text-sm"
      >
        DE
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

