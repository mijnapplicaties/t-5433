
import React from 'react';
import { Trail } from '../types/trail';
import { Beach } from '../types/beach';
import TrailGrid from './TrailGrid';
import BeachCard from './BeachCard';
import { useLanguage } from '../context/LanguageContext';

interface CategorySectionProps {
  trails: Trail[];
  sectionTitle: string;
  showSection: boolean;
  beaches?: Beach[];
}

const CategorySection = ({ trails, sectionTitle, showSection, beaches = [] }: CategorySectionProps) => {
  const { t } = useLanguage();
  
  if (!showSection) return null;

  // Split trails by region (Bariloche vs Pampa Linda)
  const barilocheTrails = trails.filter(trail => 
    trail.region === "bariloche" || trail.region === undefined || trail.region === ""
  );
  
  const pampLindaTrails = trails.filter(trail => 
    trail.region === "pampa-linda"
  );

  // Check if we have any Pampa Linda trails
  const hasPampLindaTrails = pampLindaTrails.length > 0;

  return (
    <section className="mb-12 animate-fadeIn">
      <h2 className="text-2xl font-bold text-forest mb-6">{sectionTitle}</h2>
      
      {barilocheTrails.length > 0 && (
        <div className="mb-8">
          {hasPampLindaTrails && (
            <h3 className="text-xl font-semibold text-forest mb-4">{t('bariloche')}</h3>
          )}
          <TrailGrid trails={barilocheTrails} type="day-hike" />
        </div>
      )}
      
      {hasPampLindaTrails && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-forest mb-4">{t('pampLinda')}</h3>
          <TrailGrid trails={pampLindaTrails} type="day-hike" />
        </div>
      )}
      
      {beaches && beaches.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {beaches.map(beach => (
            <BeachCard key={beach.id} beach={beach} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
