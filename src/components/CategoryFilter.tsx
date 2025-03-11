import React from 'react';
import { Badge } from './ui/badge';
import { Map, Mountain, FootprintsIcon, TreePine, Waves, Filter } from 'lucide-react';
import { TrailCategory } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';

interface CategoryFilterProps {
  selectedCategory: TrailCategory | 'all';
  setSelectedCategory: (category: TrailCategory | 'all') => void;
  setFiltersOpen: (open: boolean) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  setFiltersOpen
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

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
    <div className="mb-6 flex flex-col items-center gap-4">
      <div className="w-full max-w-4xl text-center">
        <p className="text-xl font-semibold text-gray-600 mb-2">{t('category')}</p>
        <div className={`flex flex-wrap justify-center ${isMobile ? 'gap-1.5' : 'gap-2'} items-center`}>
          <Badge 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className={`cursor-pointer ${isMobile ? 'text-sm py-0.5 px-2' : 'text-base'}`}
            onClick={() => setSelectedCategory('all')}
          >
            <Map className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
            {t('filterAll')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'high-mountain' ? 'default' : 'outline'}
            className={`cursor-pointer ${isMobile ? 'text-sm py-0.5 px-2' : 'text-base'}`}
            onClick={() => setSelectedCategory('high-mountain')}
          >
            <Mountain className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
            {isMobile ? t('refugiosShort') : t('refugios')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'easy-mountain' ? 'default' : 'outline'}
            className={`cursor-pointer ${isMobile ? 'text-sm py-0.5 px-2' : 'text-base'}`}
            onClick={() => setSelectedCategory('easy-mountain')}
          >
            <TreePine className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
            {isMobile ? t('categoryEasyMountainShort') : t('categoryEasyMountain')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'walking-path' ? 'default' : 'outline'}
            className={`cursor-pointer ${isMobile ? 'text-sm py-0.5 px-2' : 'text-base'}`}
            onClick={() => setSelectedCategory('walking-path')}
          >
            <FootprintsIcon className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
            {isMobile ? t('categoryWalkingPathShort') : t('categoryWalkingPath')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'beaches-lakes' ? 'default' : 'outline'}
            className={`cursor-pointer ${isMobile ? 'text-sm py-0.5 px-2' : 'text-base'}`}
            onClick={() => setSelectedCategory('beaches-lakes')}
          >
            <Waves className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
            {isMobile ? t('categoryBeachesLakesShort') : t('categoryBeachesLakes')}
          </Badge>
          
          <Button 
            variant="outline" 
            size={isMobile ? "sm" : "default"}
            className={`${isMobile ? 'mt-1 w-full max-w-48 border-forest text-forest hover:bg-forest hover:text-white' : 'border-black'}`}
            onClick={() => setFiltersOpen(true)}
          >
            <Filter className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
            {t('filters')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;

