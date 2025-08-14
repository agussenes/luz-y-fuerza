// IMPORTÁ tus imágenes reales. Estos paths son de ejemplo:
import imgTurismo from "../../../assets/images/home/swipperBeneficios/imgB5.jpeg";
import imgEducacion from "../../../assets/images/beneficios/imgCardBeneficioEducacion.webp";
import imgJuridico from "../../../assets/images/beneficios/cardJudicialBene.webp";

export const beneficiosCategorias = [
  {
    id: "turisticos",
    title: "Turísticos",
    icon: "bi-geo-alt-fill",
    image: imgTurismo,
    bullets: [
      {
        title: "Complejos Turísticos",
        desc: "Mina Clavero y Cosquín. Pensión completa para afiliados y familia."
      },
      {
        title: "Campo de Deportes Guiñazú",
        desc: "3 canchas, pileta, quinchos y asadores. Temporada de pileta con tarifa diferencial."
      }
    ],
    link: "/beneficios-turisticos"
  },
  {
    id: "educativos",
    title: "Educativos",
    icon: "bi-mortarboard",
    image: imgEducacion,
    bullets: [
      {
        title: "Becas",
        desc: "Para hijos/as de afiliados en nivel secundario, terciario o universitario."
      },
      {
        title: "Útiles escolares",
        desc: "Kit para primaria y vouchers/descuentos para secundaria."
      }
    ],
    link: "/beneficios-educativos"
  },
  {
    id: "juridicos",
    title: "Jurídicos y de Asesoramiento",
    icon: "bi-journal-text",
    image: imgJuridico,
    bullets: [
      {
        title: "Asesoramiento previsional y jurídico",
        desc: "Inicio de trámite jubilatorio, consultas generales y continuidad de afiliación."
      },
      {
        title: "Vivienda",
        desc: "Asistencia para edificación/refacción y atención prioritaria ante siniestros estructurales."
      }
    ],
    link: "/beneficios-juridicos-y-de-asesoramiento"
  }
];
