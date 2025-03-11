
import React from 'react';
import { Trail } from '../../types/trail';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import DifficultyBadge from './DifficultyBadge';
import ReservationBadge from './ReservationBadge';
import TrailStats from './TrailStats';
import TrailDescription from './TrailDescription';
import TransportationInfo from './TransportationInfo';

interface TrailDetailDialogProps {
  trail: Trail;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrailDetailDialog: React.FC<TrailDetailDialogProps> = ({ 
  trail, 
  open, 
  onOpenChange 
}) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-2xl">{trail.name}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {trail.startingPoint}
          </DialogDescription>
        </DialogHeader>
        
        <div>
          <div className="mb-3 relative h-56 sm:h-64 overflow-hidden rounded-lg">
            <img 
              src={trail.imageUrl} 
              alt={trail.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <ReservationBadge requiresReservation={trail.requiresReservation} />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-3">
            <TrailStats trail={trail} layout="grid" size="lg" />
          </div>
          
          <div className="mb-3 flex items-start gap-2">
            <div className="w-full">
              <h4 className="text-lg font-semibold mb-1">{t('difficulty')}</h4>
              <div className="flex items-center gap-2">
                <DifficultyBadge difficulty={trail.difficulty} size="md" />
                <span className="text-sm text-gray-600">
                  {(() => {
                    switch(trail.difficulty) {
                      case 'easy': return t('difficultyEasyDescription');
                      case 'moderate': return t('difficultyModerateDescription');
                      case 'hard': return t('difficultyHardDescription');
                      case 'expert': return t('difficultyExpertDescription');
                      default: return '';
                    }
                  })()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            <h4 className="text-lg font-semibold mb-1">{t('description')}</h4>
            <TrailDescription trail={trail} />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-1">{t('howToGetThere')}</h4>
            <TransportationInfo trail={trail} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrailDetailDialog;
