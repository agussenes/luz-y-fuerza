// NuestraLucha.jsx
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';


import SEO from '../../seo/SEO';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';


// Importa imágenes, videos y PDFs
import portadaImg from '../../assets/images/nuestraLucha/portadaNL.webp';
import img1 from '../../assets/images/nuestraLucha/img1.webp';
import img2 from '../../assets/images/nuestraLucha/img2.webp';
import img3 from '../../assets/images/nuestraLucha/img3.webp';
import img4 from '../../assets/images/nuestraLucha/img4.webp';

// imagen banner epec no es anonima 
import imgPcENEA from '../../assets/images/nuestraLucha/bannerEpecNoEsAnonima/Banner-ENEA-web.webp'
import imgPcENEAmobile from '../../assets/images/nuestraLucha/bannerEpecNoEsAnonima/Banner-ENEA-web-mobile.webp'

// estilo 
import './NuestraLucha.css';

function NuestraLucha() {


  return (
    <>
      <SEO
        title="Nuestra Lucha - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="https://tusitio.com/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <BannerPortadas imagen={portadaImg} titulo="NUestra lucha" />


      <section className="nuestra-lucha-content py-5">
        <Container>
          <Container>
            <h2 className="fw-bold mb-3 lineBorderTitle">Luz y Fuerza de pie en defensa de EPEC y el Convenio Colectivo de Trabajo</h2>
            <p className="bajada">El Gobierno de Córdoba y el Directorio de la Empresa emprendieron, desde abril de 2018, un camino de ataque a nuestro Convenio Colectivo de Trabajo y de vaciamiento privatista de la EPEC (Empresa Provincial de Energía de Córdoba).</p>

            <Col lg={12} className='d-flex align-items-center'>
              <div className="d-flex justify-content-center">
                <img src={img1} alt="" loading='lazy' className='img-fluid rounded-3' />
              </div>
            </Col>
            {/* 66/33 Section */}
            <Row className="mt-5">
              <Col lg={12} >
                <div>
                  <h3 className="fw-bold lineBorderSubTitle">El Conflicto</h3>
                  <p>
                    El 9 de abril de 2018 se inicia el conflicto, cuando el Directorio de EPEC emite cuatro resoluciones que representaban una traba al funcionamiento operativo y violaban varios artículos del Convenio.
                  </p>
                  <p>
                    En mayo, denuncian nuestro Convenio Colectivo de Trabajo y el entonces ministro de Agua, Ambiente y Servicios Públicos, <strong>Fabián López</strong>, anuncia —a espaldas de los trabajadores y del pueblo de Córdoba— la intención de vaciamiento privatista del Gobierno provincial. En conferencia de prensa informó la apertura de la pasividad anticipada, el envío de dos proyectos de recorte de fondos previsionales y de eliminación de artículos del Convenio, además de la intención de aprobar un nuevo <strong>Marco Regulatorio Eléctrico</strong>, encargado a la consultora privatista Quantum, que iba a significar la desregulación del sector y la atomización de EPEC.
                  </p>
                </div>

              </Col>

              <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">Defensa del Convenio</h3>
                  <p>
                    La estrategia de nuestra organización sindical en defensa del Convenio Colectivo fue <strong>desconocer al Ministerio de Trabajo de la Provincia</strong> como autoridad de aplicación para discutir el Convenio, en tanto el Convenio Colectivo de Luz y Fuerza 165/75 posee <strong>ultraactividad</strong>, amparada en la <strong>Ley Nacional de Convenciones Colectivas N.º 14.250.</strong>
                  </p>
                  <p>
                    Exigimos que la discusión se realizara en el ámbito que corresponde: el <strong>Ministerio de Trabajo de la Nación</strong>, donde se iniciaron audiencias que se extendieron durante largos meses. Mientras tanto, Luz y Fuerza desarrollaba un intenso plan de lucha y se negaba a firmar cualquier modificación del Convenio con la Empresa, que aplicó extorsiones de todo tipo, incluso negándonos la actualización salarial si no firmábamos la modificación.
                  </p>
                  <p>
                    La discusión en el ámbito del Ministerio, ajustada a derecho y en el marco de la legislación vigente, significó un <strong>empantanamiento para la Empresa y el Gobierno</strong> en sus planes, más aún cuando no pudieron presentar los balances financieros y sociales como corresponde. Ante esa situación, recurrieron a la arbitrariedad, violando todos los marcos legales, y sancionaron en la <strong>Legislatura Unicameral</strong> tres leyes inconstitucionales e ilegales mediante las cuales modificaron tres artículos del Convenio Colectivo.
                  </p>
                  <p>
                    Desde el gremio mantuvimos la estrategia de <strong>defender el Convenio en su ámbito de aplicación legal</strong>, y el resultado fue que <strong>no pudieron derogarlo</strong>. El Convenio sigue teniendo <strong>plena vigencia</strong>, y su incumplimiento por parte de la Empresa constituye una ilegalidad que seguimos denunciando y sosteniendo en todos los ámbitos correspondientes, nacionales e internacionales.
                  </p>
                </div>
              </Col>
              <Col lg={12} className='d-flex align-items-center'>
                <div className="d-flex justify-content-center">
                  <img src={img2} alt="" loading='lazy' className='img-fluid rounded-3' />

                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">NO al Marco Regulatorio</h3>
                  <p>
                    El proyecto de nuevo Marco Regulatorio Eléctrico, encargado a la consultora Quantum, pretendía dividir a la EPEC en unidades de negocio, desintegrando la Empresa en sus áreas de Generación, Distribución y Comercialización, lo que significaba la antesala de la privatización. Además implicaba actualización automática de tarifas, atadas a costos dolarizados. Frente a este nuevo proyecto privatista, el gremio reaccionó con un intenso plan de lucha, y campaña de esclarecimiento, en articulación con distintos sectores de la sociedad, organizaciones vecinales, sociales, estudiantiles, gremiales y de derechos humanos, así como sectores políticos de la oposición, nos acompañaron en distintas acciones, confluyendo en dos masivas marchas multisectoriales del 15 de agosto y del 18 de diciembre de 2018, convocadas en rechazo al Marco Regulatorio privatista, las políticas de vaciamiento y contra el tarifazo. En diciembre de 2018, el entonces presidente de la unicameral González, informa a la comitiva gremial lucifuercista, mientras una movilización esperaba afuera, que no estaba en carpeta un proyecto de nuevo marco eléctrico. Se frenaba así, con la lucha del gremio y el acompañamiento de la sociedad lo que era el desguace seguro de la EPEC.
                  </p>
                  <a href="https://luzyfuerzacordobaelectrum.com.ar/wp-content/uploads/2023/04/marco-regulatorio-gremio.pdf " target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3">Descargar Marco regulatorio</a>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">Privatización sectorizada, vaciamiento y precarización</h3>
                  <p>
                    Caído el proyecto de Marco Regulatorio Eléctrico y, paralelamente al ataque a nuestro Convenio, la Empresa emprendió una política claramente privatista, con medidas de achicamiento, ajuste, tarifazos, tercerizaciones y vaciamiento.
                  </p>
                  <p>
                    Todo ello fue impulsado por la apertura de un proceso de <strong>Pasividad Anticipada Voluntaria</strong> y una flexibilización ilegal de las condiciones laborales, violando el CCT vigente, con la paralización de la conformación de las Estructuras de Plantel y la falta de cobertura de cargos.
                  </p>
                  <p>
                    Así, al cierre de las cajas de cobro y de los Centros de Atención Comercial se sumó el desguace de áreas clave, como el <strong>Centro de Cómputos</strong>, donde desembarcaron funcionarios provenientes de Kolektor; <strong>Contabilidad</strong>, donde se incorporó la consultora Deloitte; la <strong>tercerización de la toma de lectur</strong>a en favor de las privadas Conectar y Ema; de <strong>Automotores</strong>, en favor de la multinacional Edenred; además de las áreas de <strong>Medidores y Conexiones y Pérdidas No Técnicas.</strong>
                  </p>
                  <p>
                    El avance de las tercerizaciones implica claros perjuicios en cuanto al sostenimiento y la calidad del servicio, los sobrecostos para la Empresa y los puestos de trabajo en riesgo. La posición del gremio en rechazo a las tercerizaciones se ha manifestado mediante múltiples estrategias de resistencia y movilización, así como en denuncias ante la Justicia, solicitando que se investiguen las irregularidades en la contratación y el desempeño de las empresas privadas. También se realizaron presentaciones en el ámbito del Ministerio de Trabajo, tanto de la Provincia como de la Nación.
                  </p>
                  {/* <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3">Descargar convenio</a> */}
                </div>
              </Col>

              <Col lg={12} className='d-flex align-items-center mt-4'>
                <div className="d-flex justify-content-center">
                  <img src={img3} alt="" loading='lazy' className='img-fluid rounded-3' />

                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">Plan de Lucha y acción gremial</h3>
                  <p>
                    Desde el mismo 9 de abril de 2018, el gremio ha llevado adelante un <strong>plan de lucha sostenido</strong>, contrarrestando y resistiendo con fortaleza las medidas arbitrarias del Directorio y del Gobierno de la Provincia.
                  </p>
                  <p>
                    Nuestra acción se desarrolló en varios frentes de lucha y aplicando distintas estrategias Las medidas de fuerza se complementaron con presentaciones ante la Justicia y ante las autoridades de aplicación, conferencias y campañas de prensa, innumerables movilizaciones, actos culturales, festivales, acciones relámpago, volanteadas, intervenciones, ruidazos y radios abiertas en distintos barrios de nuestra ciudad. También articulamos de forma permanente con distintos sectores sindicales, organizaciones sociales, estudiantiles, de derechos humanos, políticas y vecinales.
                  </p>
                  <p>
                    Hemos denunciado permanentemente las <strong>mentiras y contradicciones</strong> del Directorio de la Empresa y del Gobierno, advirtiendo desde un inicio la <strong>intención privatizadora</strong>, primero a través del Marco Regulatorio Eléctrico y luego mediante el vaciamiento y la privatización sectorizada.
                  </p>
                  <p>
                    Rechazamos la <strong>falacia empresaria</strong> de que el problema de EPEC es el “costo Convenio”, como quisieron hacer creer a los cordobeses. El verdadero problema deriva, por un lado, del encarecimiento dolarizado de la energía mayorista y, por otro, de las <strong>malas decisiones de política financiera del Gobierno provincial</strong>, que generó un grave endeudamiento dolarizado en EPEC, sumado a los <strong>desmanejos del propio Directorio</strong> en políticas de facturación, política comercial y gastos desmesurados en pauta publicitaria, obras y remodelaciones no prioritarias, así como en contrataciones innecesarias de asesores, consultoras y empresas tercerizadas.
                  </p>
                  <p>
                    También hemos realizado <strong>numerosas denuncias y presentaciones judiciales</strong>, solicitando que se investiguen las irregularidades financieras, las contrataciones de empresas privadas y el desempeño de las mismas. Asimismo, actuamos en defensa de nuestros compañeros <strong>ilegalmente cesanteados</strong>, y realizamos gestiones ante el Ministerio de Trabajo y la Empresa por sanciones injustificadas y persecutorias a distintos trabajadores.
                  </p>
                  {/* <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3 my-4">Descargar convenio</a> */}
                </div>
              </Col>

              <Col lg={12} className='d-flex align-items-center mt-3'>
                <div className="d-flex justify-content-center">
                  <img src={img4} alt="" loading='lazy' className='img-fluid rounded-3' />
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">EPEC estatal e Integrada</h3>
                  <p>En la década de 1990 enfrentamos épocas muy difíciles, con sucesivos intentos privatistas que amenazaron a EPEC. Se intentó dividirla en “unidades de negocios”, convertirla en <strong>Sociedad Anónima</strong>, concesionarla y venderla.</p>
                  <p>Todos estos intentos fracasaron, fundamentalmente porque el <strong>pueblo de Córdoba</strong> y los <strong>trabajadores lucifuercistas</strong> la defendieron con todas sus fuerzas, convencidos de que la Empresa era parte sustancial de nuestro patrimonio y un <strong>instrumento vital para una política económica con sentido social.</strong></p>
                  <p>
                    El modelo de privatizaciones impuesto en los años 90 resultó ser un modelo de <strong>ganancias para las empresas privadas</strong>, que se llevaron enormes beneficios fuera del país sin realizar las inversiones prometidas, eliminando miles de puestos de trabajo y desintegrando operativamente las empresas, con la consiguiente baja en la calidad del servicio y <strong>cortes prolongados</strong> que, desde hace años, sufren recurrentemente los usuarios.
                  </p>
                  <p>
                    Podemos decir con orgullo que en Córdoba la situación es distinta: <strong>sostuvimos un servicio eléctrico de calidad</strong>, sobre todo porque <strong>conservamos a EPEC</strong>, la única empresa estatal y totalmente integrada que quedó en pie en el país.
                  </p>
                  <p>
                    Derrotado el intento de privatización en 2001, la tarea fue abocarse a <strong>reconstruir la Empresa</strong> con una herramienta fundamental: su nueva <strong>Carta Orgánica</strong>, lograda en 2003, que reafirma a EPEC como <strong>estatal e integrada</strong>, abriendo nuevas posibilidades de crecimiento e incorporando a los trabajadores organizados en aspectos centrales de la gestión de la Empresa, siguiendo la concepción presente en el <strong>Convenio Colectivo de Trabajo 165/75</strong>, que la misma Carta Orgánica reconoce como plenamente vigente.
                  </p>
                  <p>La historia de los últimos años nos ha demostrado que fue un acierto la <strong>creación de la empresa estatal</strong>, así como haberla defendido contra la privatización y enfrentar hoy las <strong>políticas de vaciamiento y tercerización</strong> que, desde 2018, debilitan su funcionamiento operativo, su rol estratégico y la calidad del servicio.</p>
                  <Link to='https://luzyfuerzacordoba.com.ar/epec-no-es-anonima/' target="_blank" >
                    <div className="bannerGif-img rounded">
                      <img src={imgPcENEA} alt="Portada Luz y Fuerza" className="pc" />
                      <img src={imgPcENEAmobile} alt="Portada Luz y Fuerza" className="mobile " />
                    </div>
                  </Link>
                  <div className="d-flex justify-content-center">
                    <a href="https://luzyfuerzacordoba.com.ar/epec-no-es-anonima/" target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3 my-4">Defendamos EPEC</a>

                  </div>

                </div>
              </Col>

            </Row>


          </Container>
        </Container>
      </section>
    </>
  );
}

export default NuestraLucha;
