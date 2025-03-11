
import React from 'react';
import { Trail } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';

interface MultiDayHikesSectionProps {
  otherMultiDayHikes: Trail[];
  pampLindaHikes: Trail[];
  showSection: boolean;
}

const MultiDayHikesSection: React.FC<MultiDayHikesSectionProps> = ({ 
  otherMultiDayHikes, 
  pampLindaHikes, 
  showSection 
}) => {
  const { t } = useLanguage();

  if (!showSection) {
    return null;
  }

  // Check if the specific trails we're looking for are in the otherMultiDayHikes array
  const findTrail = (name: string) => {
    return otherMultiDayHikes.find(trail => 
      trail.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const hasLopez = findTrail('lópez') || findTrail('lopez');
  const hasJakob = findTrail('jakob');
  const hasTraversia = findTrail('travesía') || findTrail('travesia');
  const hasLagunaNegra = findTrail('laguna negra');
  const hasOttoMeiling = pampLindaHikes.find(trail => 
    trail.name.toLowerCase().includes('otto meiling')
  );
  const hasLagunaIlon = pampLindaHikes.find(trail => 
    trail.name.toLowerCase().includes('laguna ilón') || trail.name.toLowerCase().includes('laguna ilon')
  );
  const hasAgostinoRocca = pampLindaHikes.find(trail => 
    trail.name.toLowerCase().includes('agostino rocca')
  );
  
  // Find Jakob trail by ID for more specific debugging
  const jakobTrailById = otherMultiDayHikes.find(t => t.id === "11");
  
  console.log('Jakob trail found by name:', hasJakob);
  console.log('Jakob trail found by ID:', jakobTrailById);
  console.log('All other multi-day hikes IDs:', otherMultiDayHikes.map(t => t.id));
  console.log('All other multi-day hikes names:', otherMultiDayHikes.map(t => t.name));
  
  // Create a manual Jakob trail if not found in the list
  const jakobTrail: Trail = {
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
      de: "Der Weg beginnt auf einer Ranch namens Tambo Baez, einem Ort in der Nähe von Colonia Suiza. Sie können mit dem Auto oder öffentlichen Verkehrsmitteln von Bariloche aus dorthin gelangen. In Tambo Baez gibt es einen Parkplatz, Sie bezahlen den Besitzer der Ranch und können Ihr Auto problemlos dort abstellen.\n\nDer Weg weist keine größeren Schwierigkeiten auf, es ist ein ruhiger und langer Weg. Er folgt dem Bach Casa de Piedra auf dem größten Teil seiner Reise, es gibt viel Schatten und es ist sehr angenehm.\n\nIn der letzten Stunde auf dem Weg zur Hütte wird der Hang ziemlich steil. Sobald diese „Schnecke" beendet ist, gehen Sie noch ein paar mehr oder weniger horizontale Meter und erreichen die Hütte.\n\nDie Hütte ist eine der neuesten. Sie können entweder zelten oder in der Hütte schlafen. Sie können auch zu Abend essen, zu Mittag essen und einige Lebensmittel kaufen.",
    },
    imageUrl: "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png",
    startingPoint: "Tambo Baez, Colonia Suiza",
    highlights: ["Beautiful forest", "Riverside trail", "Mountain views", "Comfortable refuge"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 16,
    travelTime: 25,
    region: "bariloche"
  };
  
  // Make sure we have a complete list of trails including Jakob
  const completeBarilochieTrails = [...otherMultiDayHikes];
  
  // Add Jakob if not already present
  if (!hasJakob && !jakobTrailById) {
    completeBarilochieTrails.unshift(jakobTrail);
  }
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-forest mb-6">{t('filterMultiDay')}</h2>
      
      {completeBarilochieTrails.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('bariloche')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completeBarilochieTrails.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
          {/* Debug info - can be removed once confirmed working */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 text-xs">
              <p>Debug - Searching for: López, Jakob, Travesía, Laguna Negra</p>
              <p>Found López: {hasLopez ? 'Yes' : 'No'}</p>
              <p>Found Jakob: {hasJakob ? 'Yes' : 'No'}</p>
              <p>Found Jakob by ID (11): {jakobTrailById ? 'Yes' : 'No'}</p>
              <p>Added Manual Jakob: {!hasJakob && !jakobTrailById ? 'Yes' : 'No'}</p>
              <p>Found Travesía: {hasTraversia ? 'Yes' : 'No'}</p>
              <p>Found Laguna Negra: {hasLagunaNegra ? 'Yes' : 'No'}</p>
              <p>Total trails: {completeBarilochieTrails.length}</p>
              <p>Trail IDs: {completeBarilochieTrails.map(t => t.id).join(', ')}</p>
              <p>Trail names: {completeBarilochieTrails.map(t => t.name).join(', ')}</p>
            </div>
          )}
        </div>
      )}
      
      {pampLindaHikes.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('pampLinda')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pampLindaHikes.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 text-xs">
              <p>Debug - Pampa Linda trails:</p>
              <p>Found Otto Meiling: {hasOttoMeiling ? 'Yes' : 'No'}</p>
              <p>Found Laguna Ilón: {hasLagunaIlon ? 'Yes' : 'No'}</p>
              <p>Found Agostino Rocca: {hasAgostinoRocca ? 'Yes' : 'No'}</p>
              <p>Total trails: {pampLindaHikes.length}</p>
              <p>Trail IDs: {pampLindaHikes.map(t => t.id).join(', ')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiDayHikesSection;
