
import React from 'react';
import { Button } from './ui/button';
import { Map, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MapDownloadButton = () => {
  const { language } = useLanguage();
  
  const buttonText = language === 'es' 
    ? 'Descarga App - Senderos Offline' 
    : 'Download App - Offline Trails';

  return (
    <Button
      as="a"
      href="https://maps.me/"
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      className="fixed top-4 left-4 flex gap-2 z-50"
    >
      <Map className="w-4 h-4" />
      <Download className="w-4 h-4" />
      <span className="text-sm">{buttonText}</span>
    </Button>
  );
};

export default MapDownloadButton;
