import SEO from "../../seo/SEO";
import BannerPortadas from "../../components/reutilizables/bannerPortadas/BannerPortadas";
import SectionHeader from "../../components/Beneficios/SectionHeader";
import FeatureList from "../../components/Beneficios/FeatureList";
import ContactCard from "../../components/Beneficios/ContactCard";
// import ContactPromoBanner from "../../components/reutilizables/ContactPromoBanner/ContactPromoBanner";

import { juridicos } from "./data/beneficiosDetalle";
import "./Beneficios.css";

import portadaImg from "../../assets/images/beneficios/portadaPS/portadaAse.webp"

export default function BeneficiosJuridicos() {
  const { hero, previsional, vivienda } = juridicos;

  return (
    <>
      <SEO
        title={`${hero.titulo} - Luz y Fuerza Córdoba`}
        description={hero.bajada}
        url="http://localhost:5173/beneficios-juridicos-y-de-asesoramiento"
        image="https://tusitio.com/img/beneficios-juridicos-og.jpg"
      />
      <BannerPortadas imagen={portadaImg} titulo={hero.titulo} />

      <div className="container py-4">
        <p className="lead text-muted">{hero.bajada}</p>

        {/* Inicio trámite */}
        <section className="section-gap">
          <SectionHeader icon="bi-person-vcard" title={previsional.inicio.titulo} />
          <div className="row g-3">
            <div className="col-md-7">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="mb-1"><i className="bi bi-clock me-2"></i>{previsional.inicio.horario}</p>
                  <p className="mb-2"><i className="bi bi-person-badge me-2"></i>{previsional.inicio.atencion}</p>
                  <h6 className="fw-semibold">Documentación a presentar</h6>
                  <FeatureList items={previsional.inicio.llevar} />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <ContactCard
                title="Consultas y turnos"
                phones={["351 422 8079", "351 422 8081"]}
                note="Secretaría de Previsión Social – 3º piso"
              />
            </div>
          </div>
        </section>

        {/* Asesoramiento general */}
        <section className="section-gap">
          <SectionHeader icon="bi-balance-scale" title={previsional.asesoramiento.titulo} />
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="mb-1"><i className="bi bi-clock me-2"></i>{previsional.asesoramiento.horario}</p>
              <p className="mb-0 text-muted">{previsional.asesoramiento.alcance}</p>
            </div>
          </div>
        </section>

        {/* Continuidad de afiliación */}
        <section className="section-gap">
          <SectionHeader icon="bi-person-check" title={previsional.continuidad.titulo} />
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="mb-2">{previsional.continuidad.quienes}</p>
              <p className="mb-2"><i className="bi bi-clock me-2"></i>{previsional.continuidad.horario}</p>
              <h6 className="fw-semibold">Documentación requerida</h6>
              <FeatureList items={previsional.continuidad.documentacion} />
            </div>
          </div>
        </section>

        {/* Vivienda */}
        <section className="section-gap">
          <SectionHeader icon="bi-house-gear" title={vivienda.titulo} />
          <div className="row g-3">
            <div className="col-md-7">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <FeatureList items={vivienda.asistencia} />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <ContactCard
                title="Contacto Vivienda"
                phones={[
                  "351 422 8079/81",
                  "351 313 0413",
                  "351 381 1001",
                ]}
                email="luzyfuerzavivienda@gmail.com"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <ContactPromoBanner
          title="¿Necesitás iniciar un trámite o asesorarte?"
          subtitle="Coordinemos por /contacto una atención en la Secretaría de Previsión Social."
          buttonLabel="Ir a Contacto"
          variant="brand"
          icon="bi-person-gear"
        /> */}
      </div>
    </>
  );
}
