
import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, Map, Mountain, FootprintsIcon, TreePine, Waves, Filter } from 'lucide-react';
import { TrailCategory } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import { useMobile } from '../hooks/use-mobile';

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
  const isMobile = useMobile();
  const [isExpanded, setIsExpanded] = useState(false);

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

  // For mobile view, show a compact version with selected category + expand button
  if (isMobile && !isExpanded) {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <Badge 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className="text-base py-1.5 px-3"
            onClick={() => setIsExpanded(true)}
          >
            {getCategoryIcon(selectedCategory)}
            {selectedCategory === 'all' ? t('filterAll') : 
              selectedCategory === 'high-mountain' ? t('refugios') :
              selectedCategory === 'easy-mountain' ? t('categoryEasyMountain') :
              selectedCategory === 'walking-path' ? t('categoryWalkingPath') :
              t('categoryBeachesLakes')
            }
            <ChevronDown className="w-4 h-4 ml-1" />
          </Badge>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-black"
            onClick={() => setFiltersOpen(true)}
          >
            <Filter className="w-4 h-4 mr-1" />
            {t('filters')}
          </Button>
        </div>
      </div>
    );
  }

  // Show the full categories on desktop or when expanded on mobile
  return (
    <div className={`mb-${isMobile ? '4' : '8'} flex flex-col items-center gap-${isMobile ? '3' : '6'}`}>
      {isMobile && (
        <div className="w-full flex justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(false)}
            className="text-forest mb-1"
          >
            <ChevronUp className="w-4 h-4 mr-1" />
            {t('collapse')}
          </Button>
        </div>
      )}
      
      <div className="w-full max-w-4xl">
        {!isMobile && (
          <p className="text-xl font-semibold text-gray-600 mb-2 text-center">{t('category')}</p>
        )}
        
        <div className={`flex ${isMobile ? 'overflow-x-auto pb-2 justify-start' : 'flex-wrap justify-center'} gap-2 items-center`}>
          <Badge 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className="cursor-pointer text-base whitespace-nowrap"
            onClick={() => {
              setSelectedCategory('all');
              if (isMobile) setIsExpanded(false);
            }}
          >
            <Map className="w-4 h-4 mr-1" />
            {t('filterAll')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'high-mountain' ? 'default' : 'outline'}
            className="cursor-pointer text-base whitespace-nowrap"
            onClick={() => {
              setSelectedCategory('high-mountain');
              if (isMobile) setIsExpanded(false);
            }}
          >
            <Mountain className="w-4 h-4 mr-1" />
            {t('refugios')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'easy-mountain' ? 'default' : 'outline'}
            className="cursor-pointer text-base whitespace-nowrap"
            onClick={() => {
              setSelectedCategory('easy-mountain');
              if (isMobile) setIsExpanded(false);
            }}
          >
            <TreePine className="w-4 h-4 mr-1" />
            {t('categoryEasyMountain')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'walking-path' ? 'default' : 'outline'}
            className="cursor-pointer text-base whitespace-nowrap"
            onClick={() => {
              setSelectedCategory('walking-path');
              if (isMobile) setIsExpanded(false);
            }}
          >
            <FootprintsIcon className="w-4 h-4 mr-1" />
            {t('categoryWalkingPath')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'beaches-lakes' ? 'default' : 'outline'}
            className="cursor-pointer text-base whitespace-nowrap"
            onClick={() => {
              setSelectedCategory('beaches-lakes');
              if (isMobile) setIsExpanded(false);
            }}
          >
            <Waves className="w-4 h-4 mr-1" />
            {t('categoryBeachesLakes')}
          </Badge>
          
          {!isMobile && (
            <Badge 
              variant="outline" 
              className="cursor-pointer text-base border-black whitespace-nowrap"
              onClick={() => setFiltersOpen(true)}
            >
              <Filter className="w-4 h-4 mr-1" />
              {t('filters')}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
