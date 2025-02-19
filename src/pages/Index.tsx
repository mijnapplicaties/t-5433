
import React from 'react';
import { trails } from '../data/trails';
import TrailGrid from '../components/TrailGrid';
import { Badge } from '../components/ui/badge';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-forest mb-4">
            Bariloche Trail Guide
          </h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Discover the best hiking trails in Bariloche, from scenic day hikes to challenging multi-day adventures.
          </p>
        </header>

        <section className="mb-12 animate-fadeIn">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-forest">Day Hikes</h2>
            <Badge variant="outline" className="text-forest-light">
              Perfect for day trips
            </Badge>
          </div>
          <TrailGrid trails={trails} type="day-hike" />
        </section>

        <section className="animate-fadeIn">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-forest">Multi-day Adventures</h2>
            <Badge variant="outline" className="text-forest-light">
              2-4 day expeditions
            </Badge>
          </div>
          <TrailGrid trails={trails} type="multi-day" />
        </section>
      </div>
    </div>
  );
};

export default Index;
