// Secretarias.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Secretaria.css';

import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';
import imgPortada from '../../assets/images/vidaInstitucional/portadaVI.webp';

const secretariasData = [
  {
    id: 'general',
    titulo: 'Secretaría General',
    descripcion: 'Representa legalmente a la organización sindical y es la voz y representación principal del Sindicato en su actividad tanto interna como externa.',
    icono: 'bi bi-person-fill-check',
  },
  {
    id: 'adjunta',
    titulo: 'Secretaría Adjunta',
    descripcion: 'Información de la Secretaría y Contacto',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'gremial',
    titulo: 'Secretaría Gremial',
    descripcion: 'Asume la defensa de las reclamaciones y derechos establecidos en el Convenio Colectivo.',
    icono: 'bi bi-briefcase-fill',
  },
  {
    id: 'organizacion-y-actas',
    titulo: 'Secretaría de Organización y Actas',
    descripcion: 'Tiene un papel fundamental en la vida institucional del gremio. Fomenta e impulsa la afiliación al sindicato de los trabajadores de la energía eléctrica',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'finanzas-y-administracion',
    titulo: 'Secretaría de Finanzas y Administración',
    descripcion: 'La Secretaría de Finanzas y Administración lleva la contabilidad, la recaudación y el manejo de los fondos del Sindicato.',
    icono: 'bi bi-book-fill',
  },
  {
    id: 'prensa-y-propaganda',
    titulo: 'Secretaría de Prensa y Propaganda',
    descripcion: 'Redacta, elabora, diagrama y difunde las noticias de interés sindical que en distintos formatos deben darse a publicidad.',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'prevision-social',
    titulo: 'Secretaría de Previsión Social',
    descripcion: 'La Secretaría de Previsión Social acompaña y asesora a los afiliados activos al momento de jubilarse.',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'politica-energetica',
    titulo: 'Secretaría de Política Energética',
    descripcion: 'Analiza y estudia lo vinculado a la producción y planificación eléctrica, en sus aspectos técnicos y estratégicos.',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'turismo-y-cultura',
    titulo: 'Secretaría de Turismo y Cultura',
    descripcion: 'El turismo social como derecho para nuestros afiliados, está reconocido en nuestro Convenio Colectivo de Trabajo y es la premisa de trabajo de la Secretaría.',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'accion-social-y-deportes',
    titulo: 'Secretaría de Acción Social y Deportes',
    descripcion: 'Tiene a su cargo la promoción del deporte lucifuercista, la acción social hacia la familia y la comunidad, dentro de lo que se encuentra el cuidado de la salud.',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'vivienda-y-obras',
    titulo: 'Secretaría de Vivienda y Obras',
    descripcion: 'Controla y supervisa todas las obras de infraestructura que realice el Sindicato, así como el mantenimineto y/o refacción de toda la infraestructura edilicia.',
    icono: 'bi bi-info-circle',
  },
  {
    id: 'derechos-humanos',
    titulo: 'Secretaría de Derechos Humanos',
    descripcion: 'Impulsa y difunde las banderas de Memoria, Verdad y Justicia, así como la reivindicacion de nuestros compañeros desaparecidos y perseguidos.',
    icono: 'bi bi-info-circle',
  },
];

function Secretarias() {
  return (
    <>
      <BannerPortadas imagen={imgPortada} titulo="Secretarías" />

      <section className="secretaria-seccion">
        <Container>
          <h2 className="text-center fw-bold mb-5 lineBorderTitle my-4">Conocé nuestras Secretarías</h2>

          <Row>
            {secretariasData.map((sec) => (
              <Col md={4} className="mb-4" key={sec.id}>
                <div className="secretaria-card">
                  <Link to={`/secretarias/${sec.id}`} className="text-decoration-none">
                    <div className="secretaria-card-inner">
                      <div className="secretaria-card-front">
                        <i className={sec.icono}></i>
                        <h5>{sec.titulo}</h5>
                      </div>
                      <div className="secretaria-card-back">
                        <p>{sec.descripcion}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Secretarias;
