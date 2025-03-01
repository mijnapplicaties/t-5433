
import React, { useState } from 'react';
import { Beach } from '../types/beach';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Droplet, Clock, Waves, Utensils, ParkingCircle, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface BeachCardProps {
  beach: Beach;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const getBeachTypeTranslation = (type: string) => {
    switch (type) {
      case 'sandy': return t('sandy');
      case 'rocky': return t('rocky');
      case 'mixed': return t('mixed');
      case 'pebbly': return t('pebbly');
      default: return type;
    }
  };

  const getActivityIcon = (activity: string) => {
    switch (activity) {
      case 'swimming': return <Waves className="w-4 h-4" title={t('swimming')} />;
      case 'kayaking': return <Activity className="w-4 h-4" title={t('kayaking')} />;
      case 'fishing': return <Activity className="w-4 h-4" title={t('fishing')} />;
      case 'picnic': return <Utensils className="w-4 h-4" title={t('picnic')} />;
      case 'viewpoint': return <MapPin className="w-4 h-4" title={t('viewpoint')} />;
      case 'sunbathing': return <Droplet className="w-4 h-4" title={t('sunbathing')} />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getFacilityIcon = (facility: string) => {
    switch (facility) {
      case 'parkingAvailable': return <ParkingCircle className="w-4 h-4" title={t('parkingAvailable')} />;
      case 'restrooms': return <Activity className="w-4 h-4" title={t('restrooms')} />;
      case 'foodVendors': return <Utensils className="w-4 h-4" title={t('foodVendors')} />;
      default: return <Activity className="w-4 h-4" />;
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
            src={beach.imageUrl}
            alt={beach.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Badge 
              variant="secondary"
              className="backdrop-blur-sm bg-opacity-90"
            >
              {getBeachTypeTranslation(beach.beachType)}
            </Badge>
          </div>
        </div>
        
        <CardHeader>
          <div>
            <CardTitle className="text-xl font-semibold">{beach.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <MapPin className="w-4 h-4" /> {beach.location}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Droplet className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{t('waterTemp')}: {beach.waterTemp.summer}°C ({t('summer')})</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Clock className="w-4 h-4 text-forest-light" />
              <span className="text-sm">
                {beach.travelTime} {t('minutes')} {t('howToGetThere').split(' ').pop()}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2">{beach.description[language]}</p>
          
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">{t('activities')}</h4>
            <div className="flex flex-wrap gap-2">
              {beach.activities.map((activity, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1 text-xs">
                  {getActivityIcon(activity)}
                  <span>{t(activity)}</span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">{t('facilities')}</h4>
            <div className="flex flex-wrap gap-2">
              {beach.facilities.map((facility, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1 text-xs">
                  {getFacilityIcon(facility)}
                  <span>{t(facility)}</span>
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {beach.name}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-base">
              <MapPin className="w-4 h-4" /> {beach.location}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <img
              src={beach.imageUrl}
              alt={beach.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm font-semibold">{t('waterTemp')}</p>
                  <p className="text-base">{beach.waterTemp.summer}°C ({t('summer')})</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ParkingCircle className="w-5 h-5 text-forest-light" />
                <div>
                  <p className="text-sm font-semibold">{t('beachType')}</p>
                  <p className="text-base">{getBeachTypeTranslation(beach.beachType)}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('description')}</h3>
                <p className="text-gray-700">{beach.description[language]}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('howToGetThere')}</h3>
                <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span>{beach.travelTime} {t('minutes')} {t('howToGetThere').split(' ').pop()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4" />
                    <span>{beach.distanceFromCampsite} km</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('activities')}</h3>
                <div className="flex flex-wrap gap-2">
                  {beach.activities.map((activity, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {getActivityIcon(activity)}
                      <span>{t(activity)}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('facilities')}</h3>
                <div className="flex flex-wrap gap-2">
                  {beach.facilities.map((facility, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {getFacilityIcon(facility)}
                      <span>{t(facility)}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t('bestTimeToVisit')}</h3>
                <Badge variant="outline" className="text-base">
                  {beach.bestTimeToVisit}
                </Badge>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BeachCard;
