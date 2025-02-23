import React, { useState } from 'react';
import { Trail } from '../types/trail';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Mountain, ArrowUpRight, Bus, Car, Users, ThumbsUp } from 'lucide-react';
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

  const getTransportationInfo = (type: string) => {
    switch (type) {
      case 'bus':
        return {
          icon: <Bus className="w-4 h-4" />,
          label: "Bus service available"
        };
      case 'taxi':
        return {
          icon: <Car className="w-4 h-4" />,
          label: "Taxi/Uber available"
        };
      case 'private-transfer':
        return {
          icon: <Users className="w-4 h-4" />,
          label: "Private transfer available"
        };
      case 'hitchhiking':
        return {
          icon: <ThumbsUp className="w-4 h-4" />,
          label: "Hitchhiking possible"
        };
      default:
        return null;
    }
  };

  return (
    <>
      <Card 
        className="group hover:shadow-lg transition-all duration-300 animate-fadeIn cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
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
          {transportIcons && transportIcons.length > 0 && (
            <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 rounded-full px-3 py-1">
              {transportIcons.map((icon, index) => (
                <div key={index} className="text-forest-light">
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
          
          <p className="text-sm text-gray-600 line-clamp-2">{trail.description[language]}</p>
          
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">{t('howToGetThere')}</h4>
            <div className="space-y-2">
              {trail.transportation.map((type, index) => {
                const transportInfo = getTransportationInfo(type);
                if (!transportInfo) return null;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    {transportInfo.icon}
                    <span>{transportInfo.label}</span>
                    {trail.travelTime > 0 && type === 'bus' && (
                      <span className="ml-1">({trail.travelTime} min)</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {trail.highlights.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center justify-between">
              {trail.name}
              <Badge className={`${getDifficultyColor(trail.difficulty)} text-white`}>
                {trail.difficulty}
              </Badge>
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-base">
              <MapPin className="w-4 h-4" /> {trail.startingPoint}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <img
              src={trail.imageUrl}
              alt={trail.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-forest-light" />
                <div>
                  <p className="text-sm font-semibold">{t('distance')}</p>
                  <p className="text-base">{trail.distance} {t('km')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-forest-light" />
                <div>
                  <p className="text-sm font-semibold">{t('duration')}</p>
                  <p className="text-base">{trail.duration} {t('hours')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-forest-light" />
                <div>
                  <p className="text-sm font-semibold">{t('elevation')}</p>
                  <p className="text-base">{trail.elevation}m</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('description')}</h3>
                <p className="text-gray-700">{trail.description[language]}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('howToGetThere')}</h3>
                <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                  {trail.transportation.map((type, index) => {
                    const transportInfo = getTransportationInfo(type);
                    if (!transportInfo) return null;
                    return (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        {transportInfo.icon}
                        <span>{transportInfo.label}</span>
                        {trail.travelTime > 0 && type === 'bus' && (
                          <span className="ml-1">({trail.travelTime} min)</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('highlights')}</h3>
                <div className="flex flex-wrap gap-2">
                  {trail.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('reservationInfo')}</h3>
                <Badge 
                  variant={trail.requiresReservation ? "destructive" : "secondary"}
                  className="text-base"
                >
                  {trail.requiresReservation ? t('reservationRequired') : t('noReservation')}
                </Badge>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TrailCard;
