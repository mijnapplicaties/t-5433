
import React, { useState } from 'react';
import { trails } from '../data/trails';
import { Badge } from '../components/ui/badge';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Trail, TrailType, Difficulty, TransportationType } from '../types/trail';
import TrailCard from '../components/TrailCard';
import { Bus, Car, ThumbsUp, Users } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<TrailType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  const filteredTrails = trails.filter(trail => {
    const typeMatch = selectedType === 'all' || trail.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || trail.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const dayHikes = filteredTrails.filter(trail => trail.type === 'day-hike');
  const multiDayHikes = filteredTrails.filter(trail => trail.type === 'multi-day');

  const getTransportIcon = (type: TransportationType) => {
    switch(type) {
      case 'bus':
        return <Bus className="w-4 h-4" />;
      case 'taxi':
        return <Car className="w-4 h-4" />;
      case 'hitchhiking':
        return <ThumbsUp className="w-4 h-4" />;
      case 'private-transfer':
        return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fadeIn">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/18170e0a-a211-46c5-97e6-3a78c27402e0.png"
              alt="Camping Los Coihues"
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-forest mb-2">
            {t('title')}
          </h1>
          <p className="text-xl text-stone mb-4">
            Discover Patagonia's Wonders
          </p>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{t('filterByType')}</p>
            <div className="flex gap-2">
              <Badge 
                variant={selectedType === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedType('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedType === 'day-hike' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedType('day-hike')}
              >
                {t('filterDayHike')}
              </Badge>
              <Badge 
                variant={selectedType === 'multi-day' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedType('multi-day')}
              >
                {t('filterMultiDay')}
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{t('filterByDifficulty')}</p>
            <div className="flex gap-2">
              <Badge 
                variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'easy' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('easy')}
              >
                {t('difficultyEasy')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'moderate' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('moderate')}
              >
                {t('difficultyModerate')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'hard' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('hard')}
              >
                {t('difficultyHard')}
              </Badge>
            </div>
          </div>
        </div>

        {(selectedType === 'all' || selectedType === 'day-hike') && dayHikes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('filterDayHike')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayHikes.map((trail) => (
                <TrailCard 
                  key={trail.id} 
                  trail={trail} 
                  transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                />
              ))}
            </div>
          </div>
        )}

        {(selectedType === 'all' || selectedType === 'multi-day') && multiDayHikes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('filterMultiDay')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {multiDayHikes.map((trail) => (
                <TrailCard 
                  key={trail.id} 
                  trail={trail}
                  transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
