import { type StaticImageData } from "next/image";

import AdelgazamientoImg from "@/app/assets/treatments/corporal/Adelgazamiento_localizado.png";
import ReduccionCelulitisImg from "@/app/assets/treatments/corporal/Reduccion_de_celulitis.png";
import ReduccionEstriasImg from "@/app/assets/treatments/corporal/Reduccion_de_estrias.png";
import RemodelacionCorportalImg from "@/app/assets/treatments/corporal/Remodelacion_Corporal.png";
import TonificacionMuscularImg from "@/app/assets/treatments/corporal/Tonificacion_muscular.png";
import ReduccionMedidasImg from "@/app/assets/treatments/corporal/Reduccion_de_medidas.png";
import TratamientoFlacidezImg from "@/app/assets/treatments/corporal/Tratamiento_de_flacidez.png";

import RejuvenecimientoFacialImg from "@/app/assets/treatments/facial/Rejuvenecimiento_Facial.png";
import ReafirmacionOvaloFacialImg from "@/app/assets/treatments/facial/Reafirmacion_ovalo_facial.png";
import HidratacionProfundaImg from "@/app/assets/treatments/facial/Hidratacion_profunda.png";
import TratamientoAntiacneImg from "@/app/assets/treatments/facial/Tratamientos_antiacne.png";
import CorrecionManchasImg from "@/app/assets/treatments/facial/Correccion_manchas.png";
import TratamientoAntiarrugasImg from "@/app/assets/treatments/facial/Tratamiento_antiarrugas.png";
import LimpiezaFacialProfundaImg from "@/app/assets/treatments/facial/Limpieza_facial_profunda.png";

export interface Service {
  id: number;
  title: string;
  description: string;
  image?: string | StaticImageData;
  category: "corporal" | "facial";
}

export const corporalServices: Service[] = [
  {
    id: 1,
    title: "Adelgazamiento localizado y general",
    description: "Reducción efectiva de grasa localizada mediante tecnología avanzada",
    image: AdelgazamientoImg,
    category: "corporal"
  },
  {
    id: 2,
    title: "Reducción de celulitis",
    description: "Tratamiento integral para mejorar la textura y apariencia de la piel",
    image: ReduccionCelulitisImg,
    category: "corporal"
  },
  {
    id: 3,
    title: "Reducción de estrías",
    description: "Protocolo especializado para minimizar la apariencia de estrías",
    image: ReduccionEstriasImg,
    category: "corporal"
  },
  {
    id: 4,
    title: "Remodelación corporal integral",
    description: "Transformación completa de la silueta con resultados duraderos",
    image: RemodelacionCorportalImg,
    category: "corporal"
  },
  {
    id: 5,
    title: "Tonificación muscular y reafirmación",
    description: "Fortalecimiento y definición muscular sin cirugía",
    image: TonificacionMuscularImg,
    category: "corporal"
  },
  {
    id: 6,
    title: "Reducción de medidas",
    description: "Protocolo completo para reducción de medidas corporales",
    image: ReduccionMedidasImg,
    category: "corporal"
  },
  {
    id: 7,
    title: "Tratamiento de flacidez",
    description: "Reafirmación de la piel con tecnología de radiofrecuencia",
    image: TratamientoFlacidezImg,
    category: "corporal"
  }
];

export const facialServices: Service[] = [
  {
    id: 8,
    title: "Rejuvenecimiento facial",
    description: "Restauración de la juventud y luminosidad natural del rostro",
    image: RejuvenecimientoFacialImg,
    category: "facial"
  },
  {
    id: 9,
    title: "Reafirmación y redefinición del óvalo facial",
    description: "Lifting no quirúrgico para contornos faciales definidos",
    image: ReafirmacionOvaloFacialImg,
    category: "facial"
  },
  {
    id: 10,
    title: "Hidratación profunda",
    description: "Nutrición intensiva para una piel radiante y saludable",
    image: HidratacionProfundaImg,
    category: "facial"
  },
  {
    id: 11,
    title: "Tratamientos antiacné y post-acné",
    description: "Soluciones efectivas para piel propensa al acné y sus secuelas",
    image: TratamientoAntiacneImg,
    category: "facial"
  },
  {
    id: 12,
    title: "Corrección de manchas",
    description: "Eliminación de hiperpigmentación para un tono uniforme",
    image: CorrecionManchasImg,
    category: "facial"
  },
  {
    id: 13,
    title: "Tratamiento antiarrugas",
    description: "Prevención y corrección de líneas de expresión",
    image: TratamientoAntiarrugasImg,
    category: "facial"
  },
  {
    id: 14,
    title: "Limpieza facial profunda",
    description: "Desintoxicación y purificación de la piel del rostro",
    image: LimpiezaFacialProfundaImg,
    category: "facial"
  }
];

export const allServices: Service[] = [...corporalServices, ...facialServices];