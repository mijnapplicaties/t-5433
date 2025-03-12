
import React from 'react';
import { trails } from '../data/trails';
import { beaches } from '../data/beaches';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import FiltersDialog from '../components/FiltersDialog';
import CategoryFilter from '../components/CategoryFilter';
import DayHikesSection from '../components/DayHikesSection';
import MultiDayHikesSection from '../components/MultiDayHikesSection';
import CategorySection from '../components/CategorySection';
import BeachesSection from '../components/BeachesSection';
import { useTrailFilters } from '../hooks/useTrailFilters';
import { useTrailLists } from '../hooks/useTrailLists';
import { useMobile } from '../hooks/use-mobile';

// Trails to exclude from category views
const excludedTrailNames = ['Playa Muñoz', 'Cascada de los Duendes'];
// Specific IDs to exclude (more reliable than name matching)
const excludedTrailIds = ['7', '12']; // 7=Cascada de los Duendes, 12=Playa Muñoz

const Index = () => {
  const { t } = useLanguage();
  const isMobile = useMobile();
  
  const {
    filters,
    filteredBeaches,
    allHikes,
    dayHikes,
    multiDayHikes,
  } = useTrailFilters(trails, beaches);

  const {
    directAccessHikes,
    otherDayHikes,
    pampLindaHikes,
    otherMultiDayHikes,
    categoryBarilochieHikes,
    categoryPampLindaHikes
  } = useTrailLists(allHikes, dayHikes, multiDayHikes);

  const shouldShowBeaches = filters.selectedCategory === 'all' || filters.selectedCategory === 'beaches-lakes';
  const shouldShowDayHikes = filters.selectedCategory === 'all' && (filters.selectedType === 'all' || filters.selectedType === 'day-hike');
  const shouldShowMultiDayHikes = filters.selectedCategory === 'all' && (filters.selectedType === 'all' || filters.selectedType === 'multi-day');
  const shouldShowCategorySection = filters.selectedCategory !== 'all' && filters.selectedCategory !== 'beaches-lakes';

  const categoryHikes = allHikes.filter(trail => 
    (filters.selectedCategory === 'all' || trail.category === filters.selectedCategory) &&
    !excludedTrailNames.includes(trail.name) &&
    !excludedTrailIds.includes(trail.id)
  );

  const categoryRegionHikes = {
    bariloche: categoryBarilochieHikes.filter(trail => 
      (filters.selectedCategory === 'all' || trail.category === filters.selectedCategory) &&
      !excludedTrailNames.includes(trail.name) &&
      !excludedTrailIds.includes(trail.id)
    ),
    pampLinda: categoryPampLindaHikes.filter(trail => 
      filters.selectedCategory === 'all' || trail.category === filters.selectedCategory
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <header className={`text-center ${isMobile ? 'mb-6' : 'mb-12'} animate-fadeIn ${isMobile ? 'pt-4' : 'pt-12 sm:pt-0'}`}>
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src="/lovable-uploads/18170e0a-a211-46c5-97e6-3a78c27402e0.png"
              alt="Camping Los Coihues"
              className={`${isMobile ? 'h-16' : 'h-24'} w-auto`}
            />
          </div>
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-forest mb-1 sm:mb-2`}>
            {t('title')}
          </h1>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-stone mb-2 sm:mb-4`}>
            {t('tagline')}
          </p>
        </header>

        <CategoryFilter 
          selectedCategory={filters.selectedCategory}
          setSelectedCategory={filters.setSelectedCategory}
          setFiltersOpen={filters.setFiltersOpen}
        />

        <FiltersDialog 
          open={filters.filtersOpen}
          onOpenChange={filters.setFiltersOpen}
          selectedType={filters.selectedType}
          setSelectedType={filters.setSelectedType}
          selectedDifficulty={filters.selectedDifficulty}
          setSelectedDifficulty={filters.setSelectedDifficulty}
          selectedTravelTime={filters.selectedTravelTime}
          setSelectedTravelTime={filters.setSelectedTravelTime}
        />

        {shouldShowCategorySection && (
          <CategorySection 
            categoryHikes={categoryHikes}
            sectionTitle={t(`category${filters.selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`)}
            regionHikes={categoryRegionHikes}
          />
        )}

        <DayHikesSection 
          directAccessHikes={directAccessHikes}
          otherDayHikes={otherDayHikes}
          showSection={shouldShowDayHikes}
        />

        <MultiDayHikesSection 
          otherMultiDayHikes={otherMultiDayHikes}
          pampLindaHikes={pampLindaHikes}
          showSection={shouldShowMultiDayHikes}
        />

        <BeachesSection 
          beaches={filteredBeaches}
          showSection={shouldShowBeaches}
        />
      </div>
    </div>
  );
};

export default Index;
