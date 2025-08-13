// Secretarias.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Secretaria.css';

import BannerPortadas from '../../../components/reutilizables/bannerPortadas/BannerPortadas';
import imgPortada from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';

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
    id: 'prensa',
    titulo: 'Secretaría de Prensa',
    descripcion: 'Encargada de la difusión de información gremial y comunicados oficiales.',
    icono: 'bi bi-megaphone-fill',
  },
  {
    id: 'cultura',
    titulo: 'Secretaría de Cultura',
    descripcion: 'Promueve actividades culturales, recreativas y de formación sindical.',
    icono: 'bi bi-easel3-fill',
  },
  {
    id: 'turismo',
    titulo: 'Secretaría de Turismo',
    descripcion: 'Organiza propuestas turísticas y beneficios para los afiliados.',
    icono: 'bi bi-airplane-engines',
  },
];

function Secretarias() {
  return (
    <>
      <BannerPortadas imagen={imgPortada} title="Secretarías" />

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
