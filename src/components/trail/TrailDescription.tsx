
import React from 'react';
import { Trail } from '../../types/trail';
import { useLanguage } from '../../context/LanguageContext';

interface TrailDescriptionProps {
  trail: Trail;
  truncate?: boolean;
}

const TrailDescription: React.FC<TrailDescriptionProps> = ({ 
  trail, 
  truncate = false 
}) => {
  const { language } = useLanguage();

  const getDescription = (trail: Trail, lang: string) => {
    if (trail.name === "Refugio Frey from Villa Catedral") {
      switch(lang) {
        case 'en':
          return "We recommend taking an Uber from Camping to the base of Cerro Catedral. The trip takes approximately 15 minutes. Buses often involve a long wait. This trail starts at a higher point than the one from Lake Gutiérrez, saving about 1 hour of hiking. From the base of Cerro Catedral, you can begin your ascent to Refugio Frey, enjoying spectacular views as you progress through the mountainous landscape. The effort is truly worth it when you reach the panoramic views of Lake Gutiérrez, Bariloche, and the valley that extends to the summit of Frey, an impressive landscape that rewards every step of the ascent.";
        case 'es':
          return "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera. Este sendero comienza en un punto más alto que el que parte desde el Lago Gutiérrez, lo que permite ahorrar alrededor de 1 hora de caminata. Desde la base del Cerro Catedral, podrás iniciar el ascenso al Refugio Frey, disfrutando de vistas espectaculares mientras avanzas a través del paisaje montañoso. El esfuerzo realmente vale la pena al llegar a las vistas panorámicas del Lago Gutiérrez, Bariloche y el valle que se extiende hasta la cumbre del Frey, un paisaje impresionante que recompensa cada paso del ascenso.";
        case 'fr':
          return "Nous vous recommandons de prendre un Uber depuis le Camping jusqu'à la base de Cerro Catedral. Le trajet dure environ 15 minutes. Les bus impliquent souvent une longue attente. Ce sentier commence à un point plus élevé que celui du lac Gutiérrez, ce qui permet d'économiser environ 1 heure de marche. Depuis la base de Cerro Catedral, vous pouvez commencer votre ascension vers le Refugio Frey, en profitant de vues spectaculaires tout en progressant à travers le paysage montagneux. L'effort en vaut vraiment la peine lorsque vous atteignez les vues panoramiques du lac Gutiérrez, de Bariloche et de la vallée qui s'étend jusqu'au sommet du Frey, un paysage impressionnant qui récompense chaque pas de l'ascension.";
        case 'de':
          return "Wir empfehlen, einen Uber vom Camping zur Basis des Cerro Catedral zu nehmen. Die Fahrt dauert etwa 15 Minuten. Busse sind oft mit langen Wartezeiten verbunden. Dieser Weg beginnt an einem höheren Punkt als der vom Lago Gutiérrez, was etwa 1 Stunde Wanderzeit spart. Von der Basis des Cerro Catedral aus können Sie Ihren Aufstieg zum Refugio Frey beginnen und dabei spektakuläre Aussichten genießen, während Sie durch die Berglandschaft wandern. Die Anstrengung lohnt sich wirklich, wenn Sie die Panoramablicke auf den Lago Gutiérrez, Bariloche und das Tal erreichen, das sich bis zum Gipfel des Frey erstreckt, eine beeindruckende Landschaft, die jeden Schritt des Aufstiegs belohnt.";
        default:
          return trail.description[lang as keyof typeof trail.description] || "";
      }
    }
    return trail.description[lang as keyof typeof trail.description] || "";
  };

  const description = getDescription(trail, language);

  return (
    <p 
      className={
        truncate 
          ? "text-sm text-gray-600 line-clamp-2" 
          : "text-gray-600 whitespace-pre-line"
      }
    >
      {description}
    </p>
  );
};

export default TrailDescription;
