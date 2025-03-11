
import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Enhanced debug logs to track all multi-day hikes
    console.log('MultiDayHikesSection - Bariloche Multi-day Hikes:', {
      count: otherMultiDayHikes.length,
      names: otherMultiDayHikes.map(t => t.name),
      ids: otherMultiDayHikes.map(t => t.id),
      trails: otherMultiDayHikes
    });
    console.log('MultiDayHikesSection - Pampa Linda Hikes:', {
      count: pampLindaHikes.length,
      names: pampLindaHikes.map(t => t.name),
      ids: pampLindaHikes.map(t => t.id),
      trails: pampLindaHikes
    });
  }, [otherMultiDayHikes, pampLindaHikes]);

  if (!showSection) {
    return null;
  }
  
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
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 text-xs">
              <p>Debug - Bariloche multi-day hikes:</p>
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
              <p>Debug - Pampa Linda multi-day hikes:</p>
              <p>Total trails: {pampLindaHikes.length}</p>
              <p>Trail IDs: {pampLindaHikes.map(t => t.id).join(', ')}</p>
              <p>Trail names: {pampLindaHikes.map(t => t.name).join(', ')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiDayHikesSection;
