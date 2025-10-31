import SEO from "../../seo/SEO";
import BannerPortadas from "../../components/reutilizables/bannerPortadas/BannerPortadas";
import { Link } from "react-router-dom";

import { accionSocial } from "./data/beneficiosDetalle";
import "./Beneficios.css";

import portadaImg from "../../assets/images/beneficios/portadaPS/portadaASD.webp";

export default function BeneficioCultura() {
  const { hero, mantenimiento } = accionSocial;

  return (
    <>
      <SEO
        title={`${hero.titulo} - Luz y Fuerza Córdoba`}
        description={hero.bajada}
        url="http://localhost:5173/beneficios-educativos"
        image="https://tusitio.com/img/beneficios-educativos-og.jpg"
      />
      <BannerPortadas imagen={portadaImg} titulo={hero.titulo} />

      <div className="container my-4 py-4">
        <div className="d-flex justify-content-center my-4">

          <div className="card p-4" style={{ width: '900px' }}>
            <h1 className="fw-bold text-center text-uppercase display-6">{mantenimiento.bajada}</h1>
            <div className="d-flex justify-content-center my-4">
              <i className="bi bi-tools display-2"></i>
            </div>
            <div className="d-flex justify-content-center">
              <Link to='/' className="btn px-4 py-2  estiloBotonH2">
                <span style={{ fontSize: '1.5rem' }}>
                  <i className="bi bi-arrow-bar-left"></i> Volver
                </span></Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
