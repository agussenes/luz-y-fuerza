import SEO from "../../seo/SEO";
import BannerPortadas from "../../components/reutilizables/bannerPortadas/BannerPortadas";
import IntroStrip from "../../components/Beneficios/IntroStrip";
import ActividadesBannersSW from '../../components/Home/propuestas/ActividadesBannersSW';
import BeneficiosSection from "../../components/Home/home2/BeneficiosSectionH2";

import "./Beneficios.css";

import portadaImg from "../../assets/images/beneficios/portadaPS.webp";

export default function Beneficios() {
  return (
    <>
      <SEO
        title="Propuesta de servicios - Luz y Fuerza Córdoba"
        description="Conocé los beneficios turísticos, educativos y de asesoramiento para afiliados y su familia."
        url="http://localhost:5173/propuestas-de-servicios"
        image="https://tusitio.com/img/home-og-image.jpg"
      />
      <BannerPortadas imagen={portadaImg} titulo="Propuesta de servicios" />
      <div className="container py-4">
        <BeneficiosSection />
      </div>
      <section className="py-3">
        <ActividadesBannersSW />
      </section>
    </>
  );
}
