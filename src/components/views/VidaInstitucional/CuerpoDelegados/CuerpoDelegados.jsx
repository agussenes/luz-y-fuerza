// CuerpoDelegados.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerPortadas from '../../../reutilizables/bannerPortadas/BannerPortadas';

// Importa imagenes
import imgPortada from '../../../../assets/images/vidaInstitucional/bannerPortada.jpg';
import imgCard1 from '../../../../assets/images/vidaInstitucional/CuerpoDelegados/img1.jpg';
import imgCard2 from '../../../../assets/images/vidaInstitucional/CuerpoDelegados/img2.jpg';

import './CuerpoDelegados.css';

function CuerpoDelegados() {
  return (
    <>
      <BannerPortadas imagen={imgPortada} title="Cuerpo General de Delegados" />

      <section className="delegados-section py-5">
        <Container>
          <p className="text-info fw-bold subtitulo">PARTICIPACIÓN Y REPRESENTACIÓN</p>
          <h2 className="fw-bold titulo mb-3">Nuestro Cuerpo General de Delegados</h2>
          <p className="bajada">El Cuerpo General de Delegados es el órgano máximo de representación gremial y expresión democrática de nuestros trabajadores.</p>
          <p className="bajada">Está integrado por delegados elegidos en cada sector y área de trabajo mediante votación directa y secreta.</p>
          <p className="bajada">Su función es canalizar las inquietudes de los compañeros y compañeras, defender sus derechos y participar activamente en la toma de decisiones sindicales.</p>

          <p className="text-info fw-bold subtitulo mt-5">FUNCIONES PRINCIPALES</p>
          <ol className="lista-ticks">
            <li>Representar a los trabajadores de su sector.</li>
            <li>Participar en reuniones del Cuerpo General.</li>
            <li>Transmitir información gremial a su área.</li>
            <li>Recoger inquietudes de sus compañeros.</li>
            <li>Velar por el cumplimiento de los derechos laborales.</li>
            <li>Asistir a las asambleas sindicales.</li>
            <li>Colaborar en campañas gremiales y sociales.</li>
            <li>Participar en instancias de formación sindical.</li>
            <li>Promover la unidad y organización entre trabajadores.</li>
            <li>Dar seguimiento a problemáticas del sector.</li>
            <li>Impulsar propuestas de mejora laboral.</li>
            <li>Ser nexo entre afiliados y conducción sindical.</li>
            <li>Ejercer su rol con compromiso y solidaridad.</li>
          </ol>

          <h2 className="fw-bold titulo mt-5">Período actual y nuevas elecciones</h2>
          <p className="bajada">El actual Cuerpo General de Delegados corresponde al período 2022 - 2023, habiendo sido electo por amplia participación.</p>
          <p className="bajada">Próximamente se iniciará el proceso electoral para renovar los representantes por sector.</p>

          <Row className="mt-5">
            <Col md={6} className="mb-4">
              <Link to="/delegados-generales" className="card-delegado">
                <div className="card-inner text-center shadow-sm">
                  <img src={imgCard1} alt="Cuerpo General de Delegados" className="img-fluid rounded-top" />
                  <div className="p-3">
                    <h5 className="fw-bold">Cuerpo General de Delegados</h5>
                    <p className="text-muted mb-0">2022 - 2023</p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={6} className="mb-4">
              <Link to="/delegados-zona" className="card-delegado">
                <div className="card-inner text-center shadow-sm">
                  <img src={imgCard2} alt="Delegados y Delegadas" className="img-fluid rounded-top" />
                  <div className="p-3">
                    <h5 className="fw-bold">Delegados y Delegadas</h5>
                    <p className="text-muted mb-0">2022 - 2023</p>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CuerpoDelegados;
