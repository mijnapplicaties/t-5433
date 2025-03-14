import { useLanguage } from '../context/LanguageContext';
import { trails } from '../data/trails';
import { Trail, TrailType } from '../types/trail';

export const useTrailLists = (allHikes: Trail[], dayHikes: Trail[], multiDayHikes: Trail[]) => {
  const { language } = useLanguage();

  const getAllTrails = () => {
    return trails.map(trail => ({
      ...trail,
      description: trail.description // Preserve the whole description object for language switching
    }));
  };

  const getTrailsByType = (type: TrailType) => {
    return trails
      .filter(trail => trail.type === type)
      .map(trail => ({
        ...trail,
        description: trail.description // Preserve the whole description object
      }));
  };

  const getTrailsByCategory = (category: string) => {
    return trails
      .filter(trail => trail.category === category)
      .map(trail => ({
        ...trail,
        description: trail.description // Preserve the whole description object
      }));
  };

  const getLocalizedTrailDescription = (trail: Trail) => {
    if (typeof trail.description === 'object') {
      return language === 'en' 
        ? (trail.description.en || Object.values(trail.description)[0])
        : (trail.description.es || Object.values(trail.description)[0]);
    }
    return trail.description;
  };

  const directAccessHikes = dayHikes.filter(trail => trail.distanceFromCampsite <= 2);
  const otherDayHikes = dayHikes.filter(trail => trail.distanceFromCampsite > 2);
  const pampLindaHikes = multiDayHikes.filter(trail => trail.region === 'pampa-linda');
  const otherMultiDayHikes = multiDayHikes.filter(trail => trail.region !== 'pampa-linda');
  const categoryBarilochieHikes = allHikes.filter(trail => trail.region === 'bariloche');
  const categoryPampLindaHikes = allHikes.filter(trail => trail.region === 'pampa-linda');

  return {
    getAllTrails,
    getTrailsByType,
    getTrailsByCategory,
    getLocalizedTrailDescription,
    directAccessHikes,
    otherDayHikes,
    pampLindaHikes,
    otherMultiDayHikes,
    categoryBarilochieHikes,
    categoryPampLindaHikes
  };
};
