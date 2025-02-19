
import React from 'react';
import { trails } from '../data/trails';
import TrailGrid from '../components/TrailGrid';
import { Badge } from '../components/ui/badge';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-forest mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        <section className="mb-12 animate-fadeIn">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-forest">{t('dayHikes')}</h2>
            <Badge variant="outline" className="text-forest-light">
              {t('perfectForDayTrips')}
            </Badge>
          </div>
          <TrailGrid trails={trails} type="day-hike" />
        </section>

        <section className="animate-fadeIn">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-forest">{t('multiDayAdventures')}</h2>
            <Badge variant="outline" className="text-forest-light">
              {t('expeditionDuration')}
            </Badge>
          </div>
          <TrailGrid trails={trails} type="multi-day" />
        </section>
      </div>
    </div>
  );
};

export default Index;
