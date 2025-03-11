
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
  
  // Add specific IDs for trails that should be included in Bariloche multi-day hikes
  // Adding "Jakob" to make sure the Refugio Jakob trail is included
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
    // Include the specific Bariloche multi-day trails by ID
    const specificTrailsToInclude = barilochieMultiDayTrailIds;
    
    // Filter out the trails that are already in pampLindaHikes
    const hikes = multiDayHikes.filter(trail => 
      !pampLindaHikes.some(plTrail => plTrail.id === trail.id)
    );
    
    // Make sure we include specific multi-day trails that might be missing
    // especially Refugio López, Travesía Cerro López - Laguna Negra, Refugio Jakob
    const allHikes = [...hikes];
    
    specificTrailsToInclude.forEach(id => {
      const trail = allTrails.find(t => t.id === id);
      if (trail && !allHikes.some(t => t.id === id) && 
          (trail.type === 'multi-day' || id === "11" || id === "7" || 
           trail.name.toLowerCase().includes('lópez') || 
           trail.name.toLowerCase().includes('lopez') ||
           trail.name.toLowerCase().includes('jakob'))) {
        allHikes.push(trail);
      }
    });
    
    // Add missing trails by name if they're not already included
    const missingTrailNames = [
      'Refugio López', 
      'Travesía Cerro López - Laguna Negra',
      'Refugio Jakob',
      'Jakob'
    ];
    
    missingTrailNames.forEach(name => {
      const trail = allTrails.find(t => 
        t.name === name || 
        t.name.toLowerCase().includes(name.toLowerCase())
      );
      
      if (trail && !allHikes.some(t => t.id === trail.id)) {
        allHikes.push(trail);
      }
    });
    
    return allHikes;
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
