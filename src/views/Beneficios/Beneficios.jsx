import SEO from "../../seo/SEO";
import BannerPortadas from "../../components/reutilizables/bannerPortadas/BannerPortadas";
import IntroStrip from "../../components/Beneficios/IntroStrip";
import BenefitCard from "../../components/Beneficios/BenefitCard";
import ActividadesBannersSW from '../../components/Home/propuestas/ActividadesBannersSW';

import { beneficiosCategorias } from "./data/beneficiosData";
import "./Beneficios.css";

// imagen de portada (ya la tenés)
import portadaImg from "../../assets/images/vidaInstitucional/bannerPortada.jpg";

export default function Beneficios() {
  return (
    <>
      <SEO
        title="Beneficios - Luz y Fuerza Córdoba"
        description="Conocé los beneficios turísticos, educativos y de asesoramiento para afiliados y su familia."
        url="http://localhost:5173/propuestas-de-servicios"
        image="https://tusitio.com/img/home-og-image.jpg"
      />
      <BannerPortadas imagen={portadaImg} titulo="Propuestas de servicios" />

      <div className="container py-4">
        {/* Intro / resumen */}
        <div className="d-flex justify-content-center">
          <h2 className="lineBorderTitle">Propuestas de servicios</h2>
        </div>
        <IntroStrip />

        {/* Grid 3 columnas */}
        <div className="row g-4 d-flex justify-content-center">
          {beneficiosCategorias.map((c) => (
            <div className="col-12 col-md-6 col-lg-4" key={c.id}>
              <BenefitCard
                title={c.title}
                icon={c.icon}
                image={c.image}
                bullets={c.bullets}
                link={c.link}
              />
            </div>
          ))}
        </div>
      </div>

      <ActividadesBannersSW />
    </>
  );
}
