import React, { useState } from 'react';
import { trails } from '../data/trails';
import { beaches } from '../data/beaches';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Trail, TrailType, Difficulty, TransportationType, TravelTimeCategory, TrailCategory } from '../types/trail';
import TrailCard from '../components/TrailCard';
import BeachCard from '../components/BeachCard';
import { Bus, Car, Filter, FootprintsIcon, Map, Mountain, ThumbsUp, TreePine, Users, Waves } from 'lucide-react';
import FiltersDialog from '../components/FiltersDialog';

type TravelTimeCategoryFilter = 'all' | TravelTimeCategory;
type TrailCategoryFilter = 'all' | TrailCategory;

const Index = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<TrailType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedTravelTime, setSelectedTravelTime] = useState<TravelTimeCategory | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<TrailCategory | 'all'>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const getAccessibilityCategory = (trail: Trail): TravelTimeCategory => {
    if (trail.distanceFromCampsite <= 2) return 'direct-access';
    if (trail.travelTime <= 30 && ['bus', 'taxi'].some(t => trail.transportation.includes(t as TransportationType))) {
      return 'easy-access';
    }
    return 'medium-access';
  };

  const filteredTrails = trails.filter(trail => {
    const typeMatch = selectedType === 'all' || trail.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || trail.difficulty === selectedDifficulty;
    const accessibilityMatch = selectedTravelTime === 'all' || getAccessibilityCategory(trail) === selectedTravelTime;
    const categoryMatch = selectedCategory === 'all' || trail.category === selectedCategory;
    return typeMatch && difficultyMatch && accessibilityMatch && categoryMatch;
  });

  const filteredBeaches = beaches.filter(beach => {
    if (selectedCategory === 'beaches-lakes') return true;
    
    const showAllCategories = selectedCategory === 'all';
    const travelTimeMatch = selectedTravelTime === 'all' || 
      (selectedTravelTime === 'direct-access' && beach.distanceFromCampsite <= 2) ||
      (selectedTravelTime === 'easy-access' && beach.travelTime <= 30) ||
      (selectedTravelTime === 'medium-access' && beach.travelTime > 30);
    
    return showAllCategories && travelTimeMatch;
  });

  const allHikes = filteredTrails;
  
  const dayHikes = filteredTrails.filter(trail => trail.type === 'day-hike');
  const multiDayHikes = filteredTrails.filter(trail => trail.type === 'multi-day');
  
  const directAccessTrailNames = [
    'Cascada de los Duendes',
    'Mirador Lago Gutiérrez',
    'Cerro San Martín',
    'Playa Muñoz',
    'Lago Gutiérrez'
  ];
  
  const directAccessHikes = dayHikes.filter(trail => 
    directAccessTrailNames.includes(trail.name)
  );
  
  const otherDayHikes = dayHikes.filter(trail => 
    !directAccessTrailNames.includes(trail.name)
  );

  const pampLindaHikes = multiDayHikes.filter(trail => trail.region === 'pampa-linda');
  const otherMultiDayHikes = multiDayHikes.filter(trail => trail.region !== 'pampa-linda');

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
      case 'walking':
        return <FootprintsIcon className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category: TrailCategory | 'all') => {
    switch(category) {
      case 'high-mountain':
        return <Mountain className="w-4 h-4 mr-1" />;
      case 'easy-mountain':
        return <TreePine className="w-4 h-4 mr-1" />;
      case 'walking-path':
        return <FootprintsIcon className="w-4 h-4 mr-1" />;
      case 'beaches-lakes':
        return <Waves className="w-4 h-4 mr-1" />;
      default:
        return <Map className="w-4 h-4 mr-1" />;
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
            {t('tagline')}
          </p>
        </header>

        <div className="mb-8 flex flex-col items-center gap-6">
          <div className="w-full max-w-4xl text-center">
            <p className="text-xl font-semibold text-gray-600 mb-2">{t('category')}</p>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <Badge 
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('all')}
              >
                <Map className="w-4 h-4 mr-1" />
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedCategory === 'high-mountain' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('high-mountain')}
              >
                <Mountain className="w-4 h-4 mr-1" />
                {t('categoryHighMountain')}
              </Badge>
              <Badge 
                variant={selectedCategory === 'easy-mountain' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('easy-mountain')}
              >
                <TreePine className="w-4 h-4 mr-1" />
                {t('categoryEasyMountain')}
              </Badge>
              <Badge 
                variant={selectedCategory === 'walking-path' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('walking-path')}
              >
                <FootprintsIcon className="w-4 h-4 mr-1" />
                {t('categoryWalkingPath')}
              </Badge>
              <Badge 
                variant={selectedCategory === 'beaches-lakes' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('beaches-lakes')}
              >
                <Waves className="w-4 h-4 mr-1" />
                {t('categoryBeachesLakes')}
              </Badge>
              
              <Badge 
                variant="outline" 
                className="cursor-pointer text-base border-black"
                onClick={() => setFiltersOpen(true)}
              >
                <Filter className="w-4 h-4 mr-1" />
                {t('filters')}
              </Badge>
            </div>
          </div>
        </div>

        <FiltersDialog 
          open={filtersOpen}
          onOpenChange={setFiltersOpen}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedTravelTime={selectedTravelTime}
          setSelectedTravelTime={setSelectedTravelTime}
        />

        {selectedCategory !== 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t(`category${selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allHikes.map((trail) => (
                <TrailCard 
                  key={trail.id} 
                  trail={trail}
                  transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                />
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'all' && (selectedType === 'all' || selectedType === 'day-hike') && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('filterDayHike')}</h2>
            
            {directAccessHikes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
                  {t('accessibilityDirect')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {directAccessHikes.map((trail) => (
                    <TrailCard 
                      key={trail.id} 
                      trail={trail} 
                      transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {otherDayHikes.length > 0 && (
              <div>
                {directAccessHikes.length > 0 && (
                  <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
                    {t('nearByBusOrUber')}
                  </h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherDayHikes.map((trail) => (
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
        )}

        {(selectedType === 'all' || selectedType === 'multi-day') && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('filterMultiDay')}</h2>
            
            {otherMultiDayHikes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
                  {t('bariloche')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherMultiDayHikes.map((trail) => (
                    <TrailCard 
                      key={trail.id} 
                      trail={trail}
                      transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {pampLindaHikes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
                  {t('pampLinda')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pampLindaHikes.map((trail) => (
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
        )}

        <div className="mb-12 mt-16">
          <h2 className="text-2xl font-bold text-forest mb-6">{t('beaches')}</h2>
          {filteredBeaches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBeaches.map((beach) => (
                <BeachCard key={beach.id} beach={beach} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">{t('noBeachesFound')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
