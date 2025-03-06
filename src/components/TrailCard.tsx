import React, { useState } from 'react';
import { Trail } from '../types/trail';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Mountain, ArrowUpRight, Bus, Car, Users, ThumbsUp, Footprints } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface TrailCardProps {
  trail: Trail;
  transportIcons?: React.ReactNode[];
}

const TrailCard: React.FC<TrailCardProps> = ({ trail, transportIcons }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'bg-green-500',
      moderate: 'bg-yellow-500',
      hard: 'bg-orange-500',
      expert: 'bg-red-500',
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-500';
  };

  const getTranslatedDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return t('difficultyEasy');
      case 'moderate':
        return t('difficultyModerate');
      case 'hard':
        return t('difficultyHard');
      case 'expert':
        return t('difficultyExpert');
      default:
        return difficulty;
    }
  };

  const getTransportationInfo = (type: string) => {
    const getTimeLabel = (minutes: number) => `(${minutes} ${t('minutes')})`;

    switch (type) {
      case 'walking':
        return {
          icon: <Footprints className="w-4 h-4 text-blue-500" />,
          label: `${t('walkingDistance')}`
        };
      case 'bus':
        return {
          icon: <Bus className="w-4 h-4 text-blue-500" />,
          label: `${t('busService')} - ${trail.busLines ? `Line 50 + ${trail.busLines}` : 'Line 50'} ${getTimeLabel(trail.travelTime)}`
        };
      case 'taxi':
        return {
          icon: <Car className="w-4 h-4 text-blue-500" />,
          label: `${t('taxiService')} ${getTimeLabel(Math.round(trail.distanceFromCampsite * 2))}`
        };
      case 'private-transfer':
        return {
          icon: <Users className="w-4 h-4 text-blue-500" />,
          label: `${t('privateTransfer')} ${getTimeLabel(Math.round(trail.distanceFromCampsite * 2))}`
        };
      case 'hitchhiking':
        return {
          icon: <ThumbsUp className="w-4 h-4 text-blue-500" />,
          label: t('hitchhiking')
        };
      default:
        return null;
    }
  };

  const getBusInfo = (trail: Trail) => {
    if (!trail.transportation.includes('bus')) return null;
    
    switch(trail.id) {
      case 't1': // Cerro Llao Llao
        return "Bus 20";
      case 't2': // Cerro Lopez
        return "Bus 20, 21";
      case 't3': // Refugio Frey
        return "Bus 55";
      case 't4': // Cerro Campanario
        return "Bus 20, 21";
      case 't5': // Laguna Negra
        return "Bus 55";
      case 't6': // Cerro Catedral
        return "Bus 55";
      case 't7': // Circuito Chico
        return "Bus 20";
      case 't8': // Cascada de los Duendes
        return "Walking distance";
      case 't9': // Lago Escondido
        return "Bus 20";
      case 't10': // Mirador Lago Gutiérrez
        return "Walking distance";
      case 't11': // Cerro San Martín
        return "Walking distance";
      case 't12': // Refugio Otto Meiling
        return "Bus 50 + Pampa Linda Transfer";
      case 't13': // Refugio San Martín
        return "Bus 50 + Pampa Linda Transfer";
      case 't14': // Cerro Tronador
        return "Bus 50 + Pampa Linda Transfer";
      default:
        return null;
    }
  };

  return (
    <Card 
        className="group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <img
          src={trail.imageUrl}
          alt={trail.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge 
            variant={trail.requiresReservation ? "destructive" : "secondary"}
            className="backdrop-blur-sm bg-opacity-90"
          >
            {trail.requiresReservation ? t('reservationRequired') : t('noReservation')}
          </Badge>
        </div>
        {transportIcons && transportIcons.length > 0 && (
          <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
            {transportIcons.map((icon, index) => (
              <div key={index} className="text-blue-500">
                {icon}
              </div>
            ))}
          </div>
        )}
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
            {getTranslatedDifficulty(trail.difficulty)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <ArrowUpRight className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{trail.distance} {t('km')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-sm">
              {trail.duration} {t('hours')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{trail.elevation}m</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2">{trail.description[language]}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">{t('howToGetThere')}</h4>
          <div className="space-y-2">
            {trail.transportation.map((type, index) => {
              const transportInfo = getTransportationInfo(type);
              if (!transportInfo) return null;
              return (
                <div key={index} className="flex items-center gap-2 text-sm font-bold text-blue-600">
                  {transportInfo.icon}
                  <span>{transportInfo.label}</span>
                  {trail.travelTime > 0 && type === 'bus' && (
                    <span className="ml-1">({trail.travelTime} min)</span>
                  )}
                </div>
              );
            })}
          </div>
          
          {getBusInfo(trail) && (
            <div className="mt-2 bg-blue-50 p-3 rounded-md">
              <p className="font-medium">{t('busLines')}: {getBusInfo(trail)}</p>
              <p className="text-sm mt-1">{t('checkSchedules')}</p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {trail.highlights.map((highlight, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {t(highlight)}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrailCard;
