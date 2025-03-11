import { useMemo } from 'react';
import { Trail, TrailType } from '../types/trail';

export const useTrailLists = (allTrails: Trail[], dayHikes: Trail[], multiDayHikes: Trail[]) => {
  const directAccessTrailNames = [
    'Refugio Frey',
    'Cascada de los Duendes',
    'Mirador Lago Gutiérrez',
    'Cerro San Martín',
    'Playa Muñoz',
    'Lago Gutiérrez'
  ];

  const pampLindaTrailIds = ['12', '13a', '14a'];
  
  // Ensure Jakob (id: 11) is included in multi-day hikes
  const barilochieMultiDayTrailIds = ['15', '16', '17', '13', '14', '11', '7'];

  const freyTrail = useMemo(() => allTrails.find(trail => trail.id === "1"), [allTrails]);
  
  const freyTrailForDirectAccess = useMemo(() => {
    if (!freyTrail) return null;
    return {
      ...freyTrail,
      name: "Refugio Frey desde Lago Gutierrez",
      imageUrl: "/lovable-uploads/5fd20688-6816-43ff-87bc-fb5b01ab43eb.png"
    };
  }, [freyTrail]);
  
  const freyTrailForBusAccess = useMemo(() => {
    if (!freyTrail) return null;
    return {
      ...freyTrail,
      name: "Refugio Frey from Villa Catedral",
      imageUrl: "/lovable-uploads/5fd20688-6816-43ff-87bc-fb5b01ab43eb.png"
    };
  }, [freyTrail]);
  
  const directAccessHikes = useMemo(() => {
    const hikes = dayHikes.filter(trail => 
      directAccessTrailNames.includes(trail.name) && trail.id !== "1"
    );
    
    if (freyTrailForDirectAccess) {
      const llaoLlaoIndex = hikes.findIndex(trail => trail.name === 'Cerro Llao Llao');
      if (llaoLlaoIndex !== -1) {
        hikes.splice(llaoLlaoIndex, 0, freyTrailForDirectAccess);
      } else {
        hikes.unshift(freyTrailForDirectAccess);
      }
    }
    
    return hikes;
  }, [dayHikes, freyTrailForDirectAccess]);
  
  const otherDayHikes = useMemo(() => {
    const hikes = dayHikes.filter(trail => 
      (!directAccessTrailNames.includes(trail.name) || trail.name === 'Refugio Frey') && trail.id !== "1"
    );
    
    const result = [...hikes];
    
    if (freyTrailForBusAccess) {
      const freyIndex = result.findIndex(trail => trail.name === 'Refugio Frey');
      if (freyIndex !== -1) {
        result[freyIndex] = freyTrailForBusAccess;
      } else {
        result.push(freyTrailForBusAccess);
      }
    }
    
    return result;
  }, [dayHikes, freyTrailForBusAccess]);
  
  const pampLindaHikes = useMemo(() => {
    return multiDayHikes.filter(trail => 
      trail.name.toLowerCase().includes('pampa linda') || 
      trail.name.toLowerCase().includes('meiling') ||
      trail.name.toLowerCase().includes('tronador') ||
      trail.startingPoint.toLowerCase().includes('pampa linda') ||
      trail.name.toLowerCase().includes('5 lagunas') ||
      trail.name.toLowerCase().includes('laguna ilón') ||
      trail.name.toLowerCase().includes('mirada del doctor') ||
      pampLindaTrailIds.includes(trail.id)
    );
  }, [multiDayHikes]);
  
  const otherMultiDayHikes = useMemo(() => {
    // Filter out the trails that are already in pampLindaHikes
    const hikes = multiDayHikes.filter(trail => 
      !pampLindaHikes.some(plTrail => plTrail.id === trail.id)
    );
    
    // Add specific trails from allTrails if they're not already included
    barilochieMultiDayTrailIds.forEach(id => {
      const trail = allTrails.find(t => t.id === id);
      if (trail && !hikes.some(t => t.id === id)) {
        hikes.push(trail);
      }
    });
    
    // Add any trails with Jakob in the name that might be missing
    const jakobTrails = allTrails.filter(t => 
      t.name.toLowerCase().includes('jakob') && 
      !hikes.some(h => h.id === t.id)
    );
    hikes.push(...jakobTrails);
    
    return hikes;
  }, [multiDayHikes, pampLindaHikes, allTrails]);

  const categoryBarilochieHikes = useMemo(() => {
    return allTrails.filter(trail => 
      !pampLindaHikes.some(plTrail => plTrail.id === trail.id)
    );
  }, [allTrails, pampLindaHikes]);
  
  const categoryPampLindaHikes = useMemo(() => {
    return allTrails.filter(trail => 
      pampLindaHikes.some(plTrail => plTrail.id === trail.id)
    );
  }, [allTrails, pampLindaHikes]);

  return {
    directAccessHikes,
    otherDayHikes,
    pampLindaHikes,
    otherMultiDayHikes,
    categoryBarilochieHikes,
    categoryPampLindaHikes
  };
};
