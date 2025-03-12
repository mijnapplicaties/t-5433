
import React from 'react';
import { Bus, Car, Clock, PersonStanding } from 'lucide-react';
import { Trail } from '../../types/trail';
import { useLanguage } from '../../context/LanguageContext';

interface TransportationInfoProps {
  trail: Trail;
  compact?: boolean;
}

const TransportationInfo: React.FC<TransportationInfoProps> = ({ trail, compact = false }) => {
  const { t, language } = useLanguage();

  const { transportation = [], busLines = [], travelTimeMinutes = 0 } = trail;

  const formatTravelTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} ${t('minutes')}`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours} ${t('hours')}`;
      } else {
        return `${hours} ${t('hours')} ${remainingMinutes} ${t('minutes')}`;
      }
    }
  };

  return (
    <div className={`space-y-${compact ? '1' : '3'}`}>
      {travelTimeMinutes > 0 && (
        <div className="flex items-center gap-2">
          <Clock className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-gray-600`} />
          <span className={`${compact ? 'text-sm' : 'text-base'}`}>
            {formatTravelTime(travelTimeMinutes)} {language === 'es' ? 'desde' : 'from'} {language === 'es' ? 'Camping Los Coihues' : 'Camping Los Coihues'}
          </span>
        </div>
      )}

      {transportation.includes('bus') && busLines.length > 0 && (
        <div className="flex items-center gap-2">
          <Bus className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-blue-600`} />
          <span className={`${compact ? 'text-sm' : 'text-base'}`}>
            {language === 'es' ? 'Líneas de Bus: ' : 'Bus Lines: '}
            {busLines.join(', ')}
          </span>
        </div>
      )}

      {transportation.includes('taxi') && (
        <div className="flex items-center gap-2">
          <Car className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-yellow-600`} />
          <span className={`${compact ? 'text-sm' : 'text-base'}`}>
            {t('taxiService')} ({formatTravelTime(Math.round(travelTimeMinutes * 0.6))})
          </span>
        </div>
      )}

      {transportation.includes('walking') && (
        <div className="flex items-center gap-2">
          <PersonStanding className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-green-600`} />
          <span className={`${compact ? 'text-sm' : 'text-base'}`}>
            {t('walkingDistance')}
          </span>
        </div>
      )}

      {transportation.includes('transfer') && (
        <div className="flex items-center gap-2">
          <Car className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-purple-600`} />
          <span className={`${compact ? 'text-sm' : 'text-base'}`}>
            {t('transferService')}
          </span>
        </div>
      )}

      {transportation.includes('hitchhiking') && (
        <div className="flex items-center gap-2">
          <PersonStanding className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-orange-600`} />
          <span className={`${compact ? 'text-sm' : 'text-base'}`}>
            {t('hitchhiking')}
          </span>
        </div>
      )}
    </div>
  );
};

export default TransportationInfo;
