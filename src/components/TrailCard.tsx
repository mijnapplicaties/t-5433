
import React from 'react';
import { Trail } from '../types/trail';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Mountain, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TrailCardProps {
  trail: Trail;
}

const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  const { t } = useLanguage();

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'bg-green-500',
      moderate: 'bg-yellow-500',
      hard: 'bg-orange-500',
      expert: 'bg-red-500',
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 animate-fadeIn">
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <img
          src={trail.imageUrl}
          alt={trail.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge 
            variant={trail.requiresReservation ? "destructive" : "secondary"}
            className="backdrop-blur-sm bg-opacity-90"
          >
            {trail.requiresReservation ? t('reservationRequired') : t('noReservation')}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold">{trail.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <MapPin className="w-4 h-4" /> {trail.startingPoint}
            </CardDescription>
          </div>
          <Badge className={`${getDifficultyColor(trail.difficulty)} text-white`}>
            {trail.difficulty}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <ArrowUpRight className="w-4 h-4 text-forest-light" />
            <span className="text-sm">{trail.distance} {t('km')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-forest-light" />
            <span className="text-sm">
              {trail.duration} {t('hours')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-forest-light" />
            <span className="text-sm">{trail.elevation}m</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2">{trail.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {trail.highlights.map((highlight, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {highlight}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrailCard;
