
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
