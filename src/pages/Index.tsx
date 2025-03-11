
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

const Index = () => {
  const { t } = useLanguage();
  
  // Use custom hooks for filtering and organizing trails
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

  // Determine which sections to show based on filters
  const shouldShowBeaches = filters.selectedCategory === 'all' || filters.selectedCategory === 'beaches-lakes';
  const shouldShowDayHikes = filters.selectedCategory === 'all' && (filters.selectedType === 'all' || filters.selectedType === 'day-hike');
  const shouldShowMultiDayHikes = filters.selectedCategory === 'all' && (filters.selectedType === 'all' || filters.selectedType === 'multi-day');
  const shouldShowCategorySection = filters.selectedCategory !== 'all' && filters.selectedCategory !== 'beaches-lakes';

  // Filter category hikes by category
  const categoryHikes = allHikes.filter(trail => 
    filters.selectedCategory === 'all' || trail.category === filters.selectedCategory
  );

  // Create region-specific groups for the category section
  const categoryRegionHikes = {
    bariloche: categoryBarilochieHikes.filter(trail => 
      filters.selectedCategory === 'all' || trail.category === filters.selectedCategory
    ),
    pampLinda: categoryPampLindaHikes.filter(trail => 
      filters.selectedCategory === 'all' || trail.category === filters.selectedCategory
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fadeIn pt-12 sm:pt-0">
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
