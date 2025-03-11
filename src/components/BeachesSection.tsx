
import React from 'react';
import { Beach } from '../types/beach';
import { useLanguage } from '../context/LanguageContext';
import BeachCard from './BeachCard';

interface BeachesSectionProps {
  beaches: Beach[];
  showSection: boolean;
}

const BeachesSection: React.FC<BeachesSectionProps> = ({ 
  beaches, 
  showSection 
}) => {
  const { t } = useLanguage();

  if (!showSection) {
    return null;
  }

  return (
    <div className="mb-12 mt-16">
      <h2 className="text-2xl font-bold text-forest mb-6">{t('beaches')}</h2>
      {beaches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beaches.map((beach) => (
            <BeachCard key={beach.id} beach={beach} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-8">{t('noBeachesFound')}</p>
      )}
    </div>
  );
};

export default BeachesSection;
