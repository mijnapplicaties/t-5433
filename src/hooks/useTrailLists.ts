
import { useContext } from 'react';
import { trails } from '../data/trails';
import { LanguageContext } from '../context/LanguageContext';
import { Trail, TrailType } from '../types/trail';

/**
 * Custom hook for retrieving filtered trail lists
 */
export const useTrailLists = () => {
  const { language } = useContext(LanguageContext);

  const getAllTrails = () => {
    return trails.map(trail => ({
      ...trail,
      description: {
        en: trail.description.en,
        es: trail.description.es
      }
    }));
  };

  const getTrailsByType = (type: TrailType) => {
    return trails
      .filter(trail => trail.type === type)
      .map(trail => ({
        ...trail,
        description: {
          en: trail.description.en,
          es: trail.description.es
        }
      }));
  };

  const getTrailsByCategory = (category: string) => {
    return trails
      .filter(trail => trail.category === category)
      .map(trail => ({
        ...trail,
        description: {
          en: trail.description.en,
          es: trail.description.es
        }
      }));
  };

  const getLocalizedTrailDescription = (trail: Trail) => {
    return language === 'en' ? trail.description.en : trail.description.es;
  };

  return {
    getAllTrails,
    getTrailsByType,
    getTrailsByCategory,
    getLocalizedTrailDescription
  };
};
