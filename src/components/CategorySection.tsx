
import React from 'react';
import { Trail } from '../types/trail';
import { Beach } from '../types/beach';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import BeachCard from './BeachCard';
import { getTransportIcon } from '../utils/transportationIcons';

interface CategorySectionProps {
  categoryHikes: Trail[];
  sectionTitle: string;
  regionHikes: {
    bariloche: Trail[];
    pampLinda: Trail[];
  };
  selectedCategory?: string;
  beaches?: Beach[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  categoryHikes, 
  sectionTitle, 
  regionHikes, 
  selectedCategory,
  beaches = []
}) => {
  const { t } = useLanguage();

  // If there are no hikes in this category at all and no beaches, don't show the section
  if (categoryHikes.length === 0 && beaches.length === 0) {
    return null;
  }

  // If there are no region-specific hikes but we have categoryHikes, show all of them
  const hasRegionalHikes = regionHikes.bariloche.length > 0 || regionHikes.pampLinda.length > 0;
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-forest mb-6">{sectionTitle}</h2>
      
      {/* Show region-specific grouping if we have regional hikes */}
      {hasRegionalHikes ? (
        <>
          {regionHikes.bariloche.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
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
              <h3 className="text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
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
        </>
      ) : (
        // If no region-specific hikes, show all category hikes and beaches without region grouping
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryHikes.map((trail) => (
            <TrailCard 
              key={trail.id} 
              trail={trail}
              transportIcons={trail.transportation.map(t => getTransportIcon(t))}
            />
          ))}
          
          {/* Render beach cards if any are provided */}
          {beaches && beaches.length > 0 && beaches.map((beach) => (
            <BeachCard
              key={beach.id}
              beach={beach}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySection;
