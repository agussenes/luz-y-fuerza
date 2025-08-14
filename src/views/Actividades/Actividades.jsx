// src/views/Actividades/Actividades.jsx
import { useMemo, useState } from "react";
import SEO from "../../seo/SEO";
import BannerPortadas from "../../components/reutilizables/bannerPortadas/BannerPortadas";

// Componentes de Actividades
import FilterBar from "../../components/Actividades/FilterBar";
import Section from "../../components/Actividades/Section";
import ActivityCard from "../../components/Actividades/ActivityCard";
import ScheduleTable from "../../components/Actividades/ScheduleTable";
import DateList from "../../components/Actividades/DateList";
import ContactBlock from "../../components/Actividades/ContactBlock";
import FaqAccordion from "../../components/Actividades/FaqAccordion";
import StickySidebar from "../../components/Actividades/StickySidebar";

// Data/Utils de esta vista
import { categoriasUI, trekking, pesca, karate, futbol } from "./data/actividadesData";

// Estilos y portada
import "./Actividades.css";
import portadaImg from "../../assets/images/vidaInstitucional/bannerPortada.jpg";

export default function Actividades() {
  const [q, setQ] = useState("");

  const filter = (arr) =>
    arr.filter(it =>
      (it.title + " " + it.desc).toLowerCase().includes(q.toLowerCase())
    );

  const trekItems = useMemo(() => filter(trekking.items), [q]);
  const pescaItems = useMemo(() => filter(pesca.items), [q]);
  const karateItems = useMemo(() => filter(karate.items), [q]);
  const futbolItems = useMemo(() => filter(futbol.items), [q]);

  const jumpTo = (anchor) => {
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="Actividades - Luz y Fuerza Córdoba"
        description="Programa de Trekking y Excursiones, Concurso de Pesca, Karate, Campeonato de Fútbol y más actividades para la familia lucifuercista."
        url="https://tu-dominio/actividades"
        image="https://tusitio.com/img/home-og-image.jpg"
      />
      <BannerPortadas imagen={portadaImg} titulo="Actividades" />

      <div className="container py-4">
        <FilterBar
          categorias={categoriasUI}
          onSearch={setQ}
          onJump={jumpTo}
        />

        <div className="row g-4">
          {/* Columna principal */}
          <div className="col-lg-8">
            {/* Trekking */}
            <Section
              id="trekking"
              icon={trekking.icono}
              title={trekking.titulo}
              desc={trekking.bajada}
            >
              <div className="row g-3">
                <div className="col-md-12">
                  <ActivityCard items={trekItems} />
                </div>
                <div className="col-md-8 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="bi bi-info-circle me-2" aria-hidden="true"></i>Resumen
                      </h5>
                      <p className="mb-2">Salidas seguras, en grupo, ideales para toda la familia.</p>
                      <ul className="list-unstyled small text-muted mb-0">
                        <li><i className="bi bi-geo-alt me-1"></i>Córdoba y destinos nacionales</li>
                        <li><i className="bi bi-person-walking me-1"></i>Trekking & senderismo</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <ContactBlock mainTel={trekking.contacto?.tel} mainWa={trekking.contacto?.whatsapp} />

                </div>
                
              </div>
              <div className="row">
                {/* <div className="col-md-8">
                  <FaqAccordion id="faq-trekking" items={trekking.faq} />
                </div> */}
                <div className="col">
                  <FaqAccordion id="faq-trekking" items={trekking.faq} />

                </div>
              </div>
            </Section>

            {/* Pesca */}
            <Section
              id="pesca"
              icon={pesca.icono}
              title={pesca.titulo}
              desc={pesca.bajada}
            >
              <div className="row g-3">
                <div className="col-12">
                  <ActivityCard items={pescaItems} />

                </div>
                <div className="col-12">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <FaqAccordion id="faq-pesca" items={pesca.faq} />


                    </div>
                    <div className="col-md-6">
                      <ContactBlock phones={pesca.contacto} />

                    </div>
                  </div>

                </div>
                <div className="col-12">
                  <ScheduleTable rows={pesca.calendario} />

                </div>
              </div>
            </Section>

            {/* Karate */}
            <Section
              id="karate"
              icon={karate.icono}
              title={karate.titulo}
              desc={karate.bajada}
            >
              <div className="row g-3">
                <div className="col-12">
                  <ActivityCard items={karateItems} />
                </div>

                <div className="row g-3">
                  <div className="col-12">

                  </div>
                  <div className="col-md-8">
                    <div className="alert alert-success ">
                      <strong>50% de descuento</strong> para afiliados y grupo familiar.
                    </div>
                    <FaqAccordion id="faq-karate" items={karate.faq} />
                  </div>
                  <div className="col-md-4">
                    <ContactBlock phones={karate.contacto} />
                  </div>

                </div>
              </div>
            </Section>

            {/* Fútbol */}
            <Section
              id="futbol"
              icon={futbol.icono}
              title={futbol.titulo}
              desc={futbol.bajada}
            >
              <div className="row g-3">
                <div className="col-12">
                  <ActivityCard items={futbolItems} />
                </div>
                <div className="col-md-8">
                  <div className="card mb-2">
                    <div className="card-body small text-muted ">
                      <i className="bi bi-people me-1"></i>
                      Equipos de 11 jugadores · Apertura/Clausura · Categorías por edad
                    </div>
                  </div>
                  <FaqAccordion id="faq-futbol" items={futbol.faq} />
                </div>
                <div className="col-md-4">
                  <ContactBlock phones={futbol.contacto} />

                </div>
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <StickySidebar>
              <div className="card shadow-sm mb-3">
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="bi bi-calendar-week me-2" aria-hidden="true"></i>Próximas fechas
                  </h5>
                  <ul className="list-unstyled m-0 small">
                    {pesca.calendario.slice(0, 3).map((r, i) => (
                      <li className="mb-2" key={i}>
                        <i className="bi bi-dot me-1"></i>
                        <strong>{r.fecha}</strong> — {r.modalidad}
                        <div className="text-muted">{r.lugar}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="bi bi-telephone me-2" aria-hidden="true"></i>Contactos útiles
                  </h5>
                  <ul className="list-unstyled small mb-0">
                    <li><i className="bi bi-person-lines-fill me-1"></i> Trekking: <a href="tel:3512069354">351 206 9354</a></li>
                    <li><i className="bi bi-person-lines-fill me-1"></i> Pesca: <a href="tel:3543579663">3543 579 663</a>, <a href="tel:3542517694">3542 517 694</a>, <a href="tel:3516243136">351 624 3136</a></li>
                    <li><i className="bi bi-person-lines-fill me-1"></i> Fútbol: <a href="tel:3516615993">351 661 5993</a></li>
                  </ul>
                </div>
              </div>
            </StickySidebar>
          </div>
        </div>
      </div>
    </>
  );
}
