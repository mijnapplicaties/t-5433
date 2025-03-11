
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
    return `${trail.distance} ${t('km')}`;
  };

  const formatDuration = (trail: Trail) => {
    if (trail.name === "Refugio Frey from Villa Catedral") {
      return language === 'es' ? "3 horas" : "3 " + t('hours');
    }
    
    if (trail.name.includes("Jakob")) {
      return language === 'es' ? "5-6 horas" : "5-6 " + t('hours');
    }
    
    if (trail.name === "Lago Gutiérrez" || trail.name === "Cascada de los Duendes") {
      return `${Math.round(trail.duration * 60)} ${t('minutes')}`;
    }

    // Special handling for Spanish singular/plural
    if (language === 'es') {
      return `${trail.duration} ${trail.duration === 1 ? 'hora' : 'horas'}`;
    }
    
    return `${trail.duration} ${t('hours')}`;
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
      text: 'text-sm',
    },
    md: {
      container: 'gap-3',
      icon: 'w-5 h-5',
      text: 'text-base',
    },
    lg: {
      container: 'gap-3',
      icon: 'w-6 h-6',
      text: 'text-lg font-bold',
    },
  };

  const containerClass = layout === 'grid' 
    ? `grid grid-cols-3 gap-4 ${sizeClasses[size].container}`
    : `flex flex-col items-center gap-2 ${sizeClasses[size].container}`;

  const iconClasses = `${sizeClasses[size].icon} flex-shrink-0 text-blue-500`;
  const textClasses = sizeClasses[size].text;

  return (
    <div className={containerClass}>
      {trail.distance > 0 && (
        <div className="flex items-center gap-2">
          <ArrowUpRight className={iconClasses} />
          <span className={textClasses}>{formatDistance(trail)}</span>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Clock className={iconClasses} />
        <span className={textClasses}>
          {formatDuration(trail)}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Mountain className={iconClasses} />
        <span className={textClasses}>{getElevation(trail)}m</span>
      </div>
    </div>
  );
};

export default TrailStats;
