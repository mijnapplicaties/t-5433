
import React from 'react';
import { ArrowUpRight, Clock, Mountain } from 'lucide-react';
import { Trail } from '../../types/trail';
import { useLanguage } from '../../context/LanguageContext';

interface TrailStatsProps {
  trail: Trail;
  layout?: 'grid' | 'column';
  size?: 'sm' | 'md' | 'lg';
}

const TrailStats: React.FC<TrailStatsProps> = ({ 
  trail, 
  layout = 'grid',
  size = 'sm'
}) => {
  const { t, language } = useLanguage();

  const formatDistance = (trail: Trail) => {
    if (trail.name === "Lago Gutiérrez") {
      return `${trail.distance * 1000} ${t('meters')}`;
    }
    
    // Special handling for Cerro Otto
    if (trail.name === "Cerro Otto & Piedra de Habsburgo") {
      return language === 'es' ? "2 horas ida" : "2 hours one way";
    }
    
    return `${trail.distance} ${t('km')}`;
  };

  const formatDuration = (trail: Trail) => {
    const oneWayText = language === 'es' ? "ida" : "one way";
    
    // Skip duration display for Cerro Otto since it's shown in distance
    if (trail.name === "Cerro Otto & Piedra de Habsburgo") {
      return "";
    }
    
    if (trail.name === "Refugio Frey from Villa Catedral") {
      return language === 'es' ? `3 horas ${oneWayText}` : `3 ${t('hours')} ${oneWayText}`;
    }
    
    if (trail.name.includes("Jakob")) {
      return language === 'es' ? `5-6 horas ${oneWayText}` : `5-6 ${t('hours')} ${oneWayText}`;
    }
    
    if (trail.name === "Lago Gutiérrez" || trail.name === "Cascada de los Duendes" || 
        (trail.name === "Cerro Campanario" && trail.duration === 0.75)) {
      return `${Math.round(trail.duration * 60)} ${t('minutes')} ${oneWayText}`;
    }

    // Special handling for Spanish singular/plural
    if (language === 'es') {
      return `${trail.duration} ${trail.duration === 1 ? 'hora' : 'horas'} ${oneWayText}`;
    }
    
    return `${trail.duration} ${t('hours')} ${oneWayText}`;
  };

  const getElevation = (trail: Trail) => {
    if (trail.name === "Refugio Frey from Villa Catedral") {
      return 1080;
    }
    if (trail.name.includes("Jakob")) {
      return 1600;
    }
    return trail.elevation;
  };

  const sizeClasses = {
    sm: {
      container: '',
      icon: 'w-4 h-4',
      text: 'text-base font-semibold',
    },
    md: {
      container: 'gap-3',
      icon: 'w-5 h-5',
      text: 'text-lg font-semibold',
    },
    lg: {
      container: 'gap-3',
      icon: 'w-6 h-6',
      text: 'text-xl font-bold',
    },
  };

  const containerClass = layout === 'grid' 
    ? `grid grid-cols-3 gap-4 ${sizeClasses[size].container}`
    : `flex flex-col items-center gap-2 ${sizeClasses[size].container}`;

  const iconClasses = `${sizeClasses[size].icon} flex-shrink-0 text-blue-500`;
  const textClasses = sizeClasses[size].text;

  return (
    <div className={containerClass}>
      {(trail.distance > 0 || trail.name === "Cerro Otto & Piedra de Habsburgo") && (
        <div className="flex items-center gap-2">
          <ArrowUpRight className={iconClasses} />
          <span className={textClasses}>{formatDistance(trail)}</span>
        </div>
      )}
      {formatDuration(trail) && (
        <div className="flex items-center gap-2">
          <Clock className={iconClasses} />
          <span className={textClasses}>
            {formatDuration(trail)}
          </span>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Mountain className={iconClasses} />
        <span className={textClasses}>{getElevation(trail)}m</span>
      </div>
    </div>
  );
};

export default TrailStats;
