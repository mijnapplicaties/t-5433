
import React from 'react';
import { Button } from './ui/button';
import { Map, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

const MapDownloadButton = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
  const buttonText = language === 'es' 
    ? 'APP MAPAS' 
    : 'MAP APP';

  return (
    <Button
      href="https://maps.me/"
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      className={`fixed ${isMobile ? 'top-20' : 'top-4'} left-4 flex gap-2 z-50 text-black`}
      asChild
    >
      <a>
        <Map className="w-4 h-4" />
        <Download className="w-4 h-4" />
        <span className="text-sm font-bold">{buttonText}</span>
      </a>
    </Button>
  );
};

export default MapDownloadButton;
