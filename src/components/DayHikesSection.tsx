
import React from 'react';
import { Trail } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';

interface DayHikesSectionProps {
  directAccessHikes: Trail[];
  otherDayHikes: Trail[];
  showSection: boolean;
}

const DayHikesSection: React.FC<DayHikesSectionProps> = ({ 
  directAccessHikes, 
  otherDayHikes, 
  showSection 
}) => {
  const { t } = useLanguage();

  if (!showSection) {
    return null;
  }

  // Function to sort direct access trails with specific trails at the top
  const sortedDirectAccessHikes = [...directAccessHikes].sort((a, b) => {
    // First, check if it's Cerro San Martin (ID 4)
    if (a.id === "4") return -1;
    if (b.id === "4") return 1;
    
    // Then, check if it's Refugio Frey desde Lago Gutierrez (ID 19)
    if (a.id === "19") return -1;
    if (b.id === "19") return 1;
    
    // For all other trails, maintain original order
    return 0;
  });

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-forest mb-6">{t('filterDayHike')}</h2>
      
      {directAccessHikes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('accessibilityDirect')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedDirectAccessHikes.map((trail) => (
              <TrailCard 
                key={`direct-${trail.id}`} 
                trail={trail} 
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
        </div>
      )}
      
      {otherDayHikes.length > 0 && (
        <div>
          {directAccessHikes.length > 0 && (
            <h3 className="text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
              {t('nearByBusOrUber')}
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDayHikes.map((trail) => (
              <TrailCard 
                key={`bus-${trail.id}`} 
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

export default DayHikesSection;
