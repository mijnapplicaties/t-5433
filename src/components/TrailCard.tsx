
import React, { useState } from 'react';
import { Trail } from '../types/trail';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import DifficultyBadge from './trail/DifficultyBadge';
import ReservationBadge from './trail/ReservationBadge';
import TrailStats from './trail/TrailStats';
import TrailDescription from './trail/TrailDescription';
import TransportationInfo from './trail/TransportationInfo';
import TrailDetailDialog from './trail/TrailDetailDialog';

interface TrailCardProps {
  trail: Trail;
  transportIcons?: React.ReactNode[];
}

const TrailCard: React.FC<TrailCardProps> = ({ trail, transportIcons }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Special handling for Jakob trails to ensure they're displayed correctly
  const isJakobCircuitTrail = trail.id === "11" || 
    (trail.name.toLowerCase().includes('jakob') && trail.name.toLowerCase().includes('frey'));
  
  const isJakobTamboTrail = trail.id === "12" || 
    (trail.name.toLowerCase().includes('jakob') && trail.name.toLowerCase().includes('tambo'));
  
  const isJakobRefugioTrail = trail.id === "17" || 
    trail.name === "Refugio San Martin Jakob";
    
  const isRefugioCerroLopez = trail.id === "18" || 
    trail.name === "Refugio Cerro López";
    
  // Special handling for Pampa Linda trails
  const isPampaLindaTrail = trail.region === "pampa-linda" || 
    ["14", "15", "16"].includes(trail.id) ||
    ["Refugio Otto Meiling", "Laguna Ilón", "Refugio Agostino Rocca"].includes(trail.name);
  
  const getDefaultImage = () => {
    if (isJakobCircuitTrail) return "/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png";
    if (isJakobTamboTrail) return "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png";
    if (isJakobRefugioTrail) return "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png";
    if (isRefugioCerroLopez) return "/lovable-uploads/18aa5c8f-d10c-4295-a1d7-665ad54ba5c5.png";
    return "/placeholder.svg";
  };
  
  // Function to localize starting point information
  const getLocalizedStartingPoint = () => {
    if (language === 'en' || !trail.startingPointEs) {
      return trail.startingPoint;
    } else {
      return trail.startingPointEs;
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
            src={trail.imageUrl || getDefaultImage()}
            alt={trail.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = getDefaultImage();
            }}
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <ReservationBadge requiresReservation={trail.requiresReservation} />
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
                <MapPin className="w-4 h-4 flex-shrink-0" /> {getLocalizedStartingPoint()}
              </CardDescription>
            </div>
            <DifficultyBadge difficulty={trail.difficulty} />
          </div>
        </CardHeader>

        <CardContent>
          <div className="mb-4">
            <TrailStats trail={trail} />
          </div>
          
          <TrailDescription trail={trail} truncate />
          
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">{t('howToGetThere')}</h4>
            <TransportationInfo trail={trail} compact />
          </div>
        </CardContent>
      </Card>
      
      <TrailDetailDialog 
        trail={trail} 
        open={isOpen} 
        onOpenChange={setIsOpen} 
      />
    </>
  );
};

export default TrailCard;
