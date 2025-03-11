
import React from 'react';
import { Trail } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';

interface MultiDayHikesSectionProps {
  otherMultiDayHikes: Trail[];
  pampLindaHikes: Trail[];
  showSection: boolean;
}

const MultiDayHikesSection: React.FC<MultiDayHikesSectionProps> = ({ 
  otherMultiDayHikes, 
  pampLindaHikes, 
  showSection 
}) => {
  const { t } = useLanguage();

  if (!showSection) {
    return null;
  }

  // Check if the specific trails we're looking for are in the otherMultiDayHikes array
  const findTrail = (name: string) => {
    return otherMultiDayHikes.find(trail => 
      trail.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const hasLopez = findTrail('lópez') || findTrail('lopez');
  const hasJakob = findTrail('jakob');
  const hasTraversia = findTrail('travesía') || findTrail('travesia');
  const hasLagunaNegra = findTrail('laguna negra');
  const hasOttoMeiling = pampLindaHikes.find(trail => 
    trail.name.toLowerCase().includes('otto meiling')
  );
  const hasLagunaIlon = pampLindaHikes.find(trail => 
    trail.name.toLowerCase().includes('laguna ilón') || trail.name.toLowerCase().includes('laguna ilon')
  );
  const hasAgostinoRocca = pampLindaHikes.find(trail => 
    trail.name.toLowerCase().includes('agostino rocca')
  );
  
  // Find Jakob trail by ID for more specific debugging
  const jakobTrailById = otherMultiDayHikes.find(t => t.id === "11");
  
  console.log('Jakob trail found by name:', hasJakob);
  console.log('Jakob trail found by ID:', jakobTrailById);
  console.log('All other multi-day hikes IDs:', otherMultiDayHikes.map(t => t.id));
  console.log('All other multi-day hikes names:', otherMultiDayHikes.map(t => t.name));
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-forest mb-6">{t('filterMultiDay')}</h2>
      
      {otherMultiDayHikes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('bariloche')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMultiDayHikes.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
          {/* Debug info - can be removed once confirmed working */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 text-xs">
              <p>Debug - Searching for: López, Jakob, Travesía, Laguna Negra</p>
              <p>Found López: {hasLopez ? 'Yes' : 'No'}</p>
              <p>Found Jakob: {hasJakob ? 'Yes' : 'No'}</p>
              <p>Found Jakob by ID (11): {jakobTrailById ? 'Yes' : 'No'}</p>
              <p>Found Travesía: {hasTraversia ? 'Yes' : 'No'}</p>
              <p>Found Laguna Negra: {hasLagunaNegra ? 'Yes' : 'No'}</p>
              <p>Total trails: {otherMultiDayHikes.length}</p>
              <p>Trail IDs: {otherMultiDayHikes.map(t => t.id).join(', ')}</p>
              <p>Trail names: {otherMultiDayHikes.map(t => t.name).join(', ')}</p>
            </div>
          )}
        </div>
      )}
      
      {pampLindaHikes.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('pampLinda')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pampLindaHikes.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 text-xs">
              <p>Debug - Pampa Linda trails:</p>
              <p>Found Otto Meiling: {hasOttoMeiling ? 'Yes' : 'No'}</p>
              <p>Found Laguna Ilón: {hasLagunaIlon ? 'Yes' : 'No'}</p>
              <p>Found Agostino Rocca: {hasAgostinoRocca ? 'Yes' : 'No'}</p>
              <p>Total trails: {pampLindaHikes.length}</p>
              <p>Trail IDs: {pampLindaHikes.map(t => t.id).join(', ')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiDayHikesSection;
