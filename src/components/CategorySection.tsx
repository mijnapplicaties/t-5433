
import React from 'react';
import { Trail } from '../types/trail';
import { Beach } from '../types/beach';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import BeachCard from './BeachCard';
import { getTransportIcon } from '../utils/transportationIcons';
import { useIsMobile } from '../hooks/use-mobile';

interface CategorySectionProps {
  trails: Trail[];
  sectionTitle: string;
  showSection: boolean;
  beaches?: Beach[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  trails, 
  sectionTitle,
  showSection,
  beaches = []
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  if (!showSection) {
    return null;
  }

  const barilochieTrails = trails.filter(trail => trail.region === "bariloche");
  const pampLindaTrails = trails.filter(trail => trail.region === "pampa-linda");

  const headingClasses = isMobile 
    ? "text-3xl font-bold text-black mb-6 text-center" 
    : "text-3xl font-bold text-black mb-6";

  const subheadingClasses = isMobile 
    ? "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3 text-center" 
    : "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3";

  return (
    <div className="mb-12">
      <h2 className={headingClasses}>{sectionTitle}</h2>
      
      {beaches && beaches.length > 0 && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beaches.map((beach) => (
              <BeachCard key={`beach-${beach.id}`} beach={beach} />
            ))}
          </div>
        </div>
      )}
      
      {barilochieTrails.length > 0 && (
        <div className="mb-8">
          <h3 className={subheadingClasses}>
            {t('bariloche')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barilochieTrails.map((trail) => (
              <TrailCard 
                key={`bariloche-${trail.id}`} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
        </div>
      )}
      
      {pampLindaTrails.length > 0 && (
        <div>
          <h3 className={subheadingClasses}>
            {t('pampLinda')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pampLindaTrails.map((trail) => (
              <TrailCard 
                key={`pampa-linda-${trail.id}`} 
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
