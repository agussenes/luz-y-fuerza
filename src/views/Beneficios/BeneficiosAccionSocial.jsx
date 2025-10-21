import SEO from "../../seo/SEO";
import BannerPortadas from "../../components/reutilizables/bannerPortadas/BannerPortadas";
import SectionHeader from "../../components/Beneficios/SectionHeader";
import FeatureList from "../../components/Beneficios/FeatureList";
// import ContactPromoBanner from "../../components/reutilizables/ContactPromoBanner/ContactPromoBanner";

import { accionSocial } from "./data/beneficiosDetalle";
import "./Beneficios.css";

import portadaImg from "../../assets/images/vidaInstitucional/bannerPortada.jpg";

export default function BeneficioCultura() {
  const { hero, centro, becas, utiles } = accionSocial;

  return (
    <>
      <SEO
        title={`${hero.titulo} - Luz y Fuerza Córdoba`}
        description={hero.bajada}
        url="http://localhost:5173/beneficios-educativos"
        image="https://tusitio.com/img/beneficios-educativos-og.jpg"
      />
      <BannerPortadas imagen={portadaImg} titulo={hero.titulo} />

      <div className="container py-4">
        <p className="lead text-muted">{hero.bajada}</p>

        {/* Centro de Actividades */}
        <section className="section-gap">
          <SectionHeader icon="bi-collection" title={centro.nombre} />
          <p className="mb-1">
            <i className="bi bi-buildings me-2"></i>{centro.gestion} · {centro.ubicacion}
          </p>
          <p className="text-muted">{centro.descripcion}</p>

          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-calendar2-week me-2"></i>Grilla de talleres
              </h5>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Día</th>
                      <th>Horario</th>
                      <th>Taller</th>
                      <th>Profesor/a</th>
                    </tr>
                  </thead>
                  <tbody>
                    {centro.grilla.map((g, i) => (
                      <tr key={i}>
                        <td>{g.dia}</td>
                        <td>{g.hora}</td>
                        <td>{g.taller}</td>
                        <td>{g.profe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small text-muted mt-2">
                <i className="bi bi-whatsapp me-1"></i>
                WhatsApp de la Secretaría: {centro.contacto.whatsapp} · Tel. sede: {centro.contacto.telefonoSede}
              </p>
            </div>
          </div>
        </section>

        {/* Becas */}
        <section className="section-gap">
          <SectionHeader icon="bi-mortarboard" title="Becas" />
          <div className="card shadow-sm">
            <div className="card-body">
              <FeatureList
                items={[
                  becas.marco,
                  becas.comision,
                  `¿Quiénes pueden postularse? ${becas.quienes}`,
                  `Inscripción: ${becas.inscripcion}`,
                ]}
              />
              <p className="mt-2 mb-0">
                <i className="bi bi-telephone me-2"></i>
                Más información: {becas.contacto}
              </p>
            </div>
          </div>
        </section>

        {/* Útiles escolares */}
        <section className="section-gap">
          <SectionHeader icon="bi-backpack2" title="Útiles escolares" />
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="mb-1">{utiles.descripcion}</p>
              <p className="mb-0 text-muted">
                <i className="bi bi-people me-1"></i>
                {utiles.contacto}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <ContactPromoBanner
          title="¿Necesitás orientación para inscribirte?"
          subtitle="Escribinos y te ayudamos con becas, talleres y útiles."
          buttonLabel="Ir a Contacto"
          variant="brand"
          icon="bi-envelope-heart"
        /> */}
      </div>
    </>
  );
}
