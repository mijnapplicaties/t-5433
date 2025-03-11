
import React from 'react';
import { Trail } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';

interface CategorySectionProps {
  categoryHikes: Trail[];
  sectionTitle: string;
  regionHikes: {
    bariloche: Trail[];
    pampLinda: Trail[];
  };
}

const CategorySection: React.FC<CategorySectionProps> = ({ categoryHikes, sectionTitle, regionHikes }) => {
  const { t } = useLanguage();

  if (categoryHikes.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-forest mb-6">{sectionTitle}</h2>
      
      {regionHikes.bariloche.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('bariloche')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionHikes.bariloche.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
        </div>
      )}
      
      {regionHikes.pampLinda.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('pampLinda')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionHikes.pampLinda.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
