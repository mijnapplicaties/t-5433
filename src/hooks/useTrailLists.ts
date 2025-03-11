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
  
  const jakobTrail: Trail = useMemo(() => {
    const existingJakob = allTrails.find(t => 
      t.id === "11" || 
      t.name.toLowerCase().includes('jakob')
    );
    
    if (existingJakob) return existingJakob;
    
    return {
      id: "11",
      name: "Refugio Frey-Jakob Circuit",
      type: "multi-day",
      difficulty: "hard",
      distance: 9,
      duration: 6,
      elevation: 1600,
      requiresReservation: true,
      description: {
        en: "We recommend taking an Uber from Camping to the base of Cerro Catedral. The trip takes approximately 15 minutes...",
        es: "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos...",
        fr: "Nous recommandons de prendre un Uber depuis le Camping jusqu'à la base de Cerro Catedral...",
        de: "Wir empfehlen, einen Uber vom Camping zur Basis des Cerro Catedral zu nehmen..."
      },
      imageUrl: "/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png",
      startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
      highlights: [
        "highlightTwoMountainRefuges",
        "highlightAlpineLakes",
        "highlightHighMountainPasses"
      ],
      transportation: ["private-transfer", "taxi", "bus"],
      distanceFromCampsite: 8,
      travelTime: 16,
      busLines: "Bus to Colonia Suiza",
      category: "high-mountain",
      region: "bariloche"
    };
  }, [allTrails]);
  
  const otherMultiDayHikes = useMemo(() => {
    // First create a copy of multi-day hikes excluding Pampa Linda hikes
    const hikes = multiDayHikes.filter(trail => 
      !pampLindaHikes.some(plTrail => plTrail.id === trail.id)
    );
    
    // Force add Jakob trail to the beginning of the list if not already present
    const hasJakob = hikes.some(trail => 
      trail.id === "11" || 
      trail.name.toLowerCase().includes('jakob')
    );
    
    if (!hasJakob) {
      hikes.unshift(jakobTrail);
    }
    
    // Add any additional trails from barilochieMultiDayTrailIds that might be missing
    barilochieMultiDayTrailIds.forEach(id => {
      if (id === "11") return; // Skip Jakob as we've already handled it
      
      const alreadyIncluded = hikes.some(t => t.id === id);
      if (!alreadyIncluded) {
        const trail = allTrails.find(t => t.id === id);
        if (trail) {
          hikes.push(trail);
        }
      }
    });
    
    return hikes;
  }, [multiDayHikes, pampLindaHikes, allTrails, jakobTrail]);

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
    categoryPampLindaHikes,
    jakobTrail
  };
};
