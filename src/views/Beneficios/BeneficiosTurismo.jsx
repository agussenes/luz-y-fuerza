import SEO from "../../seo/SEO";
import BannerPortadas from "../../components/reutilizables/bannerPortadas/BannerPortadas";
import SectionHeader from "../../components/Beneficios/SectionHeader";
import FeatureList from "../../components/Beneficios/FeatureList";
import ContactCard from "../../components/Beneficios/ContactCard";
// import ContactPromoBanner from "../../components/reutilizables/ContactPromoBanner/ContactPromoBanner";

import { turismo } from "./data/beneficiosDetalle";
import "./Beneficios.css";

import portadaImg from "../../assets/images/beneficios/portadaPS/portadaTur.webp"

export default function BeneficiosTurismo() {
  const { hero, minaClavero, cosquin, inscripciones, guiñazu } = turismo;

  return (
    <>
      <SEO
        title={`${hero.titulo} - Luz y Fuerza Córdoba`}
        description={hero.bajada}
        url="http://localhost:5173/beneficios-turisticos"
        image="https://tusitio.com/img/beneficios-turismo-og.jpg"
      />
      <BannerPortadas imagen={portadaImg} titulo={hero.titulo} />

      <div className="container py-4">
        <p className="lead text-muted">{hero.bajada}</p>

        {/* Aviso: actividades aparte */}
        <div className="alert alert-info">
          <i className="bi bi-info-circle me-2"></i>
          ¿Buscabas trekking, pesca, karate o fútbol? Visitá la sección{" "}
          <a href="/actividades" className="alert-link">Actividades</a>.
        </div>

        {/* Mina Clavero */}
        <section className="section-gap">
          <SectionHeader icon="bi-building" title="Complejos en Mina Clavero" />
          <p className="text-secondary mb-2">
            <i className="bi bi-geo-alt me-1"></i>{minaClavero.direccion}
          </p>
          <p className="text-muted">{minaClavero.cercaDe}</p>

          <div className="row g-3">
            {minaClavero.hoteles.map((h, i) => (
              <div className="col-md-6" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{h.nombre}</h5>
                    <p className="mb-0 text-muted">
                      <i className="bi bi-person-badge me-1"></i>{h.plazas} plazas
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-calendar-week me-2"></i>Temporadas y modalidad
              </h5>
              <FeatureList items={minaClavero.temporadas} />
              <p className="mt-2 mb-0 text-muted">
                <i className="bi bi-info-circle me-2"></i>{minaClavero.modalidad}
              </p>
            </div>
          </div>
        </section>

        {/* Cosquín: Camping */}
        <section className="section-gap">
          <SectionHeader icon="bi-tree" title={cosquin.camping.nombre} />
          <p className="mb-1">
            <i className="bi bi-geo-alt me-1"></i>{cosquin.camping.ubicacion}
          </p>
          <p className="text-muted">{cosquin.camping.entorno}</p>

          <div className="row g-3">
            <div className="col-md-7">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Servicios e instalaciones</h5>
                  <FeatureList items={cosquin.camping.servicios} />
                  <p className="text-muted mt-2 mb-0">
                    <i className="bi bi-people me-2"></i>{cosquin.camping.publico}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <ContactCard
                title="Inscripciones"
                phones={[inscripciones.telefonos]}
                note={inscripciones.texto}
              />
            </div>
          </div>
        </section>

        {/* Campo de Deportes Guiñazú */}
        <section className="section-gap">
          <SectionHeader icon="bi-basket2" title={guiñazu.titulo} />
          <p className="text-muted">{guiñazu.resumen}</p>
          <div className="row g-3">
            <div className="col-md-7">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="fw-semibold">Servicios</h6>
                  <FeatureList items={guiñazu.servicios} />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="fw-semibold">Más informacion</h6>
                  <ul className="list-unstyled mb-0">
                    {guiñazu.notas.map((n, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-dot me-1"></i>{n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA contacto */}
        {/* <ContactPromoBanner
          title="¿Necesitás fechas, cupos o tarifas?"
          subtitle="La Secretaría de Turismo y Cultura te asesora para reservar."
          buttonLabel="Ir a Contacto"
          variant="brand"
          icon="bi-send"
        /> */}
      </div>
    </>
  );
}
