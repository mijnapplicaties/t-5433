import { useMemo } from 'react';
import { Trail, TrailType } from '../types/trail';

export const useTrailLists = (allTrails: Trail[], dayHikes: Trail[], multiDayHikes: Trail[]) => {
  const directAccessTrailNames = [
    'Cascada de los Duendes',
    'Mirador Lago Gutiérrez',
    'Cerro San Martín',
    'Refugio Frey',
    'Lago Gutiérrez',
    'Playa Muñoz'
  ];

  const pampLindaTrailIds = ['13', '14', '15', '16'];

  const barilochieMultiDayTrailIds = ['17', '11', '7', '18', '1'];

  const excludedFromBarilochieMultiDay = ['Playa Muñoz', 'Cascada de los Duendes'];
  const excludedTrailIds = ['7', '12'];

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
  
  const freyTrailForMultiDay = useMemo(() => {
    if (!freyTrail) return null;
    return {
      ...freyTrail,
      id: "1-multi",
      type: "multi-day" as TrailType,
      name: "Refugio Frey Multi-Day",
      description: {
        ...freyTrail.description,
        en: freyTrail.description.en + "\n\nThis version is designed as a multi-day experience, allowing you to stay at the refuge overnight and explore the surrounding areas.",
        es: freyTrail.description.es + "\n\nEsta versión está diseñada como una experiencia de varios días, lo que le permite alojarse en el refugio durante la noche y explorar las áreas circundantes.",
        fr: freyTrail.description.fr + "\n\nCette version est conçue comme une expérience de plusieurs jours, vous permettant de séjourner au refuge pour la nuit et d'explorer les environs.",
        de: freyTrail.description.de + "\n\nDiese Version ist als mehrtägige Erfahrung konzipiert, die es Ihnen ermöglicht, im Refuge zu übernachten und die umliegenden Gebiete zu erkunden."
      },
      imageUrl: "/lovable-uploads/5fd20688-6816-43ff-87bc-fb5b01ab43eb.png"
    };
  }, [freyTrail]);
  
  const cerroLopezLagunaNegra: Trail = useMemo(() => {
    return {
      id: "19",
      name: "Travesía Cerro López-Laguna Negra",
      type: "multi-day" as TrailType,
      difficulty: "hard",
      distance: 18,
      duration: 12,
      elevation: 1800,
      requiresReservation: true,
      description: {
        en: "This impressive traverse connects two of Bariloche's iconic mountain areas: Cerro López and Laguna Negra. The trail begins at the base of Cerro López, climbing steeply through ancient forests to reach Refugio López. From there, it follows a challenging alpine route across high mountain passes and dramatic landscapes before descending to the beautiful Laguna Negra and its refuge. This is a demanding multi-day adventure that requires good physical condition and prior mountain experience.",
        es: "Esta impresionante travesía conecta dos de las áreas montañosas icónicas de Bariloche: Cerro López y Laguna Negra. El sendero comienza en la base del Cerro López, ascendiendo empinadamente a través de bosques antiguos hasta llegar al Refugio López. Desde allí, sigue una ruta alpina desafiante a través de pasos de montaña altos y paisajes dramáticos antes de descender a la hermosa Laguna Negra y su refugio. Esta es una aventura de varios días exigente que requiere buena condición física y experiencia previa en montaña.",
        fr: "",
        de: ""
      },
      imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
      startingPoint: "Cerro López Trailhead (25 km from Bariloche)",
      highlights: [
        "highlightTwoMountainRefuges",
        "highlightAlpineLakes",
        "highlightHighMountainPasses",
        "highlightPanoramicViews"
      ],
      transportation: ["private-transfer", "taxi"],
      distanceFromCampsite: 22,
      travelTime: 45,
      category: "high-mountain",
      region: "bariloche"
    };
  }, []);
  
  const directAccessHikes = useMemo(() => {
    const hikes = dayHikes.filter(trail => 
      directAccessTrailNames.includes(trail.name) && 
      trail.id !== "1"
    );
    
    if (freyTrailForDirectAccess) {
      const existingIndex = hikes.findIndex(trail => trail.name === 'Playa Muñoz');
      if (existingIndex !== -1) {
        hikes.splice(existingIndex + 1, 0, freyTrailForDirectAccess);
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
      (trail.name.toLowerCase().includes('pampa linda') || 
      trail.name.toLowerCase().includes('meiling') ||
      trail.name.toLowerCase().includes('tronador') ||
      trail.startingPoint.toLowerCase().includes('pampa linda') ||
      trail.name.toLowerCase().includes('5 lagunas') ||
      trail.name.toLowerCase().includes('laguna ilón') ||
      trail.name.toLowerCase().includes('mirada del doctor') ||
      trail.name.toLowerCase().includes('agostino rocca') ||
      pampLindaTrailIds.includes(trail.id)) &&
      !trail.name.toLowerCase().includes('laguna negra')
    );
  }, [multiDayHikes]);
  
  const jakobCircuitTrail: Trail = useMemo(() => {
    const existingCircuit = allTrails.find(t => 
      t.id === "11" || 
      (t.name.toLowerCase().includes('jakob') && t.name.toLowerCase().includes('frey'))
    );
    
    if (existingCircuit) return existingCircuit;
    
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
  
  const jakobTamboTrail: Trail = useMemo(() => {
    const existingJakob = allTrails.find(t => 
      t.id === "12" || 
      (t.name.toLowerCase().includes('jakob') && t.name.toLowerCase().includes('tambo'))
    );
    
    if (existingJakob) return existingJakob;
    
    return {
      id: "12",
      name: "Refugio Jakob desde Tambo Baez",
      type: "multi-day",
      difficulty: "moderate",
      distance: 14,
      duration: 5.5,
      elevation: 1600,
      requiresReservation: false,
      description: {
        en: "The trail starts at a ranch called Tambo Baez, a place very close to Colonia Suiza. You can get there from Bariloche by car or public transport. At Tambo Baez there is parking, you pay the owner of the ranch and you can leave your car there without problems.\n\nThe trail does not present major complications, it is a quiet and long trail. It follows the Casa de Piedra stream for most of its journey, there is plenty of shade and it is very enjoyable.\n\nThe last hour on the way to the refuge the slope becomes quite steep. Once this \"snail\" is finished, you walk a few more or less horizontal meters and reach the refuge.\n\nThe refuge is one of the newest. You can camp or sleep inside the refuge. You can also have dinner, lunch, and buy some food.",
        es: "El sendero comienza en una estancia llamada tambo Baez, un lugar muy cercano a Colonia Suiza. Se puede llegar desde Bariloche en auto o transporte público. En Tambo Baez hay un estacionamiento, se paga al dueño de la estancia y se puede dejar el auto ahí sin problemas.\n\nEl sendero no presenta mayores complicaciones, es un sendero tranquilo, y largo. Recorre al arroyo casa de piedra en casi todo su recorrido, hay bastante sombra y se disfruta mucho.\n\nLa ultima hora camino al refugio la pendiente se hace bastante empinada. Una vez terminado este \"caracol\" se recorren algunos metros mas o menos horizontales y se llega al refugio.\n\nEl refugio es de los mas nuevos, cuenta Se puede acampar o dormir dentro del refugio. También se puede cenar, almorzar, y comprar algunos alimentos.",
        fr: "",
        de: ""
      },
      imageUrl: "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png",
      startingPoint: "Tambo Baez, Colonia Suiza",
      highlights: ["Beautiful forest", "Riverside trail", "Mountain views", "Comfortable refuge"],
      transportation: ["private-transfer", "taxi"],
      distanceFromCampsite: 16,
      travelTime: 25,
      region: "bariloche",
      category: "high-mountain"
    };
  }, [allTrails]);
  
  const otherMultiDayHikes = useMemo(() => {
    const hikes = multiDayHikes.filter(trail => {
      if (trail.id === "12") {
        return false;
      }
      
      if (trail.id === "14" || trail.id === "15" || trail.id === "16") {
        return false;
      }
      
      if (pampLindaHikes.some(plTrail => plTrail.id === trail.id)) {
        return false;
      }
      
      if (excludedFromBarilochieMultiDay.includes(trail.name)) {
        return false;
      }
      
      if (excludedTrailIds.includes(trail.id)) {
        return false;
      }
      
      // Explicitly include Refugio Laguna Negra in Bariloche region
      if (trail.name.toLowerCase().includes('laguna negra')) {
        return true;
      }
      
      return true;
    });
    
    const hasJakobCircuit = hikes.some(trail => 
      trail.id === "11" || 
      (trail.name.toLowerCase().includes('jakob') && trail.name.toLowerCase().includes('frey'))
    );
    
    const hasJakobTambo = hikes.some(trail => 
      trail.id === "12" || 
      (trail.name.toLowerCase().includes('jakob') && trail.name.toLowerCase().includes('tambo'))
    );
    
    const result = [...hikes];
    
    if (!hasJakobCircuit) {
      result.unshift(jakobCircuitTrail);
    }
    
    if (!hasJakobTambo) {
      result.push(jakobTamboTrail);
    }
    
    // Make sure Refugio San Martin Jakob uses the updated image if it exists in the results
    const jakobIndex = result.findIndex(trail => trail.id === "17");
    if (jakobIndex >= 0) {
      result[jakobIndex] = {
        ...result[jakobIndex],
        imageUrl: "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png"
      };
    }
    
    // Add the Cerro López-Laguna Negra trail to the Bariloche multi-day hikes
    result.unshift(cerroLopezLagunaNegra);
    
    barilochieMultiDayTrailIds.forEach(id => {
      if (id === "11" || id === "12" || excludedTrailIds.includes(id)) return;
      
      const alreadyIncluded = result.some(t => t.id === id);
      if (!alreadyIncluded) {
        const trail = allTrails.find(t => t.id === id);
        if (trail && !excludedTrailIds.includes(trail.id)) {
          result.push(trail);
        }
      }
    });
    
    return result.filter(trail => trail.id !== "12" && trail.name !== "Playa Muñoz");
  }, [multiDayHikes, pampLindaHikes, allTrails, jakobCircuitTrail, jakobTamboTrail, excludedTrailIds, cerroLopezLagunaNegra]);
  
  const categoryBarilochieHikes = useMemo(() => {
    return allTrails.filter(trail => {
      if (pampLindaTrailIds.includes(trail.id)) {
        return false;
      }
      
      if (pampLindaHikes.some(plTrail => plTrail.id === trail.id)) {
        return false;
      }
      
      if (excludedFromBarilochieMultiDay.includes(trail.name)) {
        return false;
      }
      
      if (excludedTrailIds.includes(trail.id)) {
        return false;
      }
      
      return true;
    });
  }, [allTrails, pampLindaHikes]);

  const categoryPampLindaHikes = useMemo(() => {
    return allTrails.filter(trail => 
      pampLindaHikes.some(plTrail => plTrail.id === trail.id) ||
      ["14", "15", "16"].includes(trail.id)
    );
  }, [allTrails, pampLindaHikes]);

  return {
    directAccessHikes,
    otherDayHikes,
    pampLindaHikes,
    otherMultiDayHikes,
    categoryBarilochieHikes,
    categoryPampLindaHikes,
    jakobCircuitTrail,
    jakobTamboTrail,
    cerroLopezLagunaNegra
  };
};
