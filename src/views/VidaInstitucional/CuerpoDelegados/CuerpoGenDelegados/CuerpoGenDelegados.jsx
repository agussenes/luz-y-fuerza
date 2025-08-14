// DetalleDelegados.jsx
import { Container } from 'react-bootstrap';
import BannerPortadas from '../../../../components/reutilizables/bannerPortadas/BannerPortadas';
import './CuerpoGenDelegados.css';

// Imagenes
import portadaImg from '../../../../assets/images/vidaInstitucional/CuerpoDelegados/CuerpoGenDelegados/bannerPortada.jpg';
import cuerpoImg from '../../../../assets/images/vidaInstitucional/CuerpoDelegados/CuerpoGenDelegados/img1.jpg';

function CuerpoGenDelegados() {
  return (
    <>
      <BannerPortadas imagen={portadaImg} titulo="Cuerpo General de Delegados" />

      <section className="detalle-delegados-section py-5">
        <Container>
          <p className="subtitulo text-info fw-bold">Vida Institucional</p>
          <h2 className="lineBorderTitle fw-bold mb-4">Cuerpo General de Delegados 2022 - 2023</h2>

          <img src={cuerpoImg} alt="Cuerpo General de Delegados" className="img-fluid rounded mb-4 my-4 imgShadow" />

          <div className="caja-info">
            <p><strong>Presidente:</strong> PABLO GUTIÉRREZ</p>
            <p><strong>Vicepresidente:</strong> RODOLFO LEYRÍA</p>
            <p><strong>Secretario de Actas:</strong> RICARDO ACOSTA</p>
            <p><strong>Subsecretario de Actas:</strong> MARCOS COURROUX</p>
          </div>

          <h3 className="lineBorderTitle mt-5">SUBCOMISIONES</h3>
          <ul className="lista-bullets">
            <li>Subcomisión Gremial: MARCO BONINO</li>
            <li>Subcomisión de Organización y Actas: VÍCTOR ZAVORRA</li>
            <li>Subcomisión de Finanzas: PABLO SOSA</li>
            <li>Subcomisión de Prensa: PABLO MERCADO</li>
            <li>Subcomisión de Previsión Social: LUCIANA PETREI</li>
            <li>Subcomisión de Política Energética: JUAN BORCHES</li>
            <li>Subcomisión de Turismo y Cultura: CLAUDIA CÓRDOBA</li>
            <li>Subcomisión de Acción Social y Deportes: AGUSTÍN NICOLÁS TOSCO</li>
            <li>Subcomisión de Vivienda y Obras: ALICIA LÓPEZ</li>
            <li>Subcomisión de Bolsa de Trabajo: VILMA GÓMEZ Y GERMÁN AGÜERO</li>
            <li>Subcomisión de Obra Social: LUCAS MARTÍNEZ</li>
            <li>Subcomisión de Derechos Humanos: ROXANA MALDONADO</li>
          </ul>
        </Container>
      </section>
    </>
  );
}

export default CuerpoGenDelegados;
