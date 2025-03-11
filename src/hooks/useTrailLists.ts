
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
        fr: "Le sentier commence dans un ranch appelé Tambo Baez, un endroit très proche de Colonia Suiza. Vous pouvez y accéder depuis Bariloche en voiture ou en transport en commun. À Tambo Baez, il y a un parking, vous payez le propriétaire du ranch et vous pouvez y laisser votre voiture sans problème.\n\nLe sentier ne présente pas de difficultés majeures, c'est un sentier calme et long. Il suit le ruisseau Casa de Piedra sur la majeure partie de son parcours, il y a beaucoup d'ombre et c'est très agréable.\n\nLa dernière heure en direction du refuge, la pente devient assez raide. Une fois cet « escargot » terminé, vous parcourez quelques mètres plus ou moins horizontaux et atteignez le refuge.\n\nLe refuge est l'un des plus récents. Vous pouvez camper ou dormir à l'intérieur du refuge. Vous pouvez également dîner, déjeuner et acheter de la nourriture.",
        de: "Der Weg beginnt auf einer Ranch namens Tambo Baez, einem Ort in der Nähe von Colonia Suiza. Sie können mit dem Auto oder öffentlichen Verkehrsmitteln von Bariloche aus dorthin gelangen. In Tambo Baez gibt es einen Parkplatz, Sie bezahlen den Besitzer der Ranch und können Ihr Auto problemlos dort abstellen.\n\nDer Weg weist keine größeren Schwierigkeiten auf, es ist ein ruhiger und langer Weg. Er folgt dem Bach Casa de Piedra auf dem größten Teil seiner Reise, es gibt viel Schatten und es ist sehr angenehm.\n\nIn der letzten Stunde auf dem Weg zur Hütte wird der Hang ziemlich steil. Sobald diese \"Schnecke\" beendet ist, gehen Sie noch ein paar mehr oder weniger horizontale Meter und erreichen die Hütte.\n\nDie Hütte ist eine der neuesten. Sie können entweder zelten oder in der Hütte schlafen. Sie können auch zu Abend essen, zu Mittag essen und einige Lebensmittel kaufen."
      },
      imageUrl: "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png",
      startingPoint: "Tambo Baez, Colonia Suiza",
      highlights: ["Beautiful forest", "Riverside trail", "Mountain views", "Comfortable refuge"],
      transportation: ["private-transfer", "taxi"],
      distanceFromCampsite: 16,
      travelTime: 25,
      region: "bariloche"
    };
  }, [allTrails]);
  
  const otherMultiDayHikes = useMemo(() => {
    const hikes = multiDayHikes.filter(trail => 
      !pampLindaHikes.some(plTrail => plTrail.id === trail.id)
    );
    
    if (jakobTrail && !hikes.some(trail => trail.id === jakobTrail.id || trail.name.toLowerCase().includes('jakob'))) {
      hikes.unshift(jakobTrail);
    }
    
    barilochieMultiDayTrailIds.forEach(id => {
      if (id === "11") return;
      const trail = allTrails.find(t => t.id === id);
      if (trail && !hikes.some(t => t.id === id)) {
        hikes.push(trail);
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
