// NuestraLucha.jsx
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';


import SEO from '../../seo/SEO';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';


// Importa imágenes, videos y PDFs
import portadaImg from '../../assets/images/portadaProvi.webp';
import img1 from '../../assets/images/nuestraLucha/img1.webp';
import img2 from '../../assets/images/nuestraLucha/img2.webp';
import img3 from '../../assets/images/nuestraLucha/img3.webp';
import img4 from '../../assets/images/nuestraLucha/img4.webp';

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

      <BannerPortadas imagen={portadaImg} />


      <section className="nuestra-lucha-content py-5">
        <Container>
          <Container>
            <h2 className="fw-bold mb-3 lineBorderTitle">Luz y Fuerza de pie en defensa de EPEC y el Convenio Colectivo de Trabajo</h2>
            <p className="bajada">El Gobierno de Córdoba y el Directorio de la empresa emprendieron desde abril de 2018 un camino de ataque a nuestro Convenio Colectivo de Trabajo y de vaciamiento privatista de la EPEC (Empresa Provincial de Energía de Córdoba).</p>

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
                  <p>El 9 de abril de 2018 inicia el conflicto, cuando el Directorio de la EPEC emite 4 Resoluciones, que significaban una traba al funcionamiento operativo y eran violatorias de varios artículos del Convenio. En mayo denuncian nuestro Convenio Colectivo de Trabajo y el Ministro de Agua, Ambiente y Servicios Públicos, Fabián López, anuncia a espaldas de los trabajadores y el pueblo de Córdoba la intención de vaciamiento privatista del Gobierno de Córdoba, informando en conferencia de prensa la apertura de la pasividad anticipada, el envío de dos proyectos de recorte de fondos previsionales y de eliminación de artículos del convenio, además de la intención de aprobar un nuevo Marco Regulatorio Eléctrico, que le encargaron a la consultora privatista Quantum, y que iba a significar la desregulación del sector y la atomización de la EPEC.</p>
                </div>

              </Col>

              <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">Defensa del Convenio</h3>
                  <p>La estrategia de nuestra organización sindical en defensa del Convenio Colectivo fue desconocer al Ministerio de Trabajo de la Provincia como autoridad de aplicación para discutir Convenio, en tanto el Convenio Colectivo de Luz y Fuerza 165/75 es de ultraactividad, amparado en la Ley nacional de Convenciones Colectivas14250.
                    Así, exigimos que se discutiera en el ámbito que corresponde, el Ministerio de Trabajo de la Nación, donde se iniciaron audiencias que duraron largos meses, mientras Luz y Fuerza desarrollaba un intenso plan de lucha y se negaba a firmar cualquier modificación del Convenio con la Empresa, que aplicó extorsiones de todo tipo, incluso negándonos actualización salarial, sino firmábamos la modificación del Convenio. La discusión en el ámbito del Ministerio, ajustada a derecho y en el marco de la legislación y normativa vigente, significaba un empantanamiento para la Empresa y el Gobierno en sus planes, más aun cuando no pudieron presentar los balances financieros y sociales como corresponde, y debieron recurrir a la arbitrariedad violando todos los marcos legales vigentes, sancionado en la Legislatura Unicameral 3 leyes inconstitucionales e ilegales, por las cuales modificaron tres artículos del Convenio Colectivo. Desde el gremio mantuvimos la estrategia de defender el Convenio en el ámbito de aplicación legal y el resultado es que no pudieron voltear el Convenio, que tiene plena vigencia y cuyo incumplimiento por parte de la empresa implica una ilegalidad que seguimos denunciando y sosteniendo en todos los ámbitos correspondientes, nacionales e internacionales.</p>
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
                  <p>El proyecto de nuevo Marco Regulatorio Eléctrico, encargado a la consultora Quantum, pretendía dividir a la EPEC en unidades de negocio, desintegrando la Empresa en sus áreas de Generación, Distribución y Comercialización, lo que significaba la antesala de la privatización. Además implicaba actualización automática de tarifas, atadas a costos dolarizados. Frente a este nuevo proyecto privatista, el gremio reaccionó con un intenso plan de lucha, y campaña de esclarecimiento, en articulación con distintos sectores de la sociedad, organizaciones vecinales, sociales, estudiantiles, gremiales y de derechos humanos, así como sectores políticos de la oposición, nos acompañaron en distintas acciones, confluyendo en dos masivas marchas multisectoriales del 15 de agosto y del 18 de diciembre de 2018, convocadas en rechazo al Marco Regulatorio privatista, las políticas de vaciamiento y contra el tarifazo. En diciembre de 2018, el entonces presidente de la unicameral González, informa a la comitiva gremial lucifuercista, mientras una movilización esperaba afuera, que no estaba en carpeta un proyecto de nuevo marco eléctrico. Se frenaba así, con la lucha del gremio y el acompañamiento de la sociedad lo que era el desguace seguro de la EPEC.</p>
                  <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3">Descargar convenio</a>


                </div>
              </Col>
              
              <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">Privatización sectorizada, vaciamiento y precarización</h3>
                  <p>Caído el proyecto de Marco Regulatorio Eléctrico y paralelamente al ataque a nuestro Convenio, la empresa emprendió una política claramente privatista, con medidas de achicamiento, ajuste, tarifazos, tercerizaciones y vaciamiento, impulsado por la apertura de un proceso de Pasividad Anticipada Voluntaria y una flexibilización ilegal de las condiciones laborales, violando el CCT vigente, con paralización de la conformación de las Estructuras de Plantel y falta de cubrimiento de cargos.</p>
                  <p>Así, al cierre de las cajas de cobro y Centros de Atención Comercial, se sumó el desguace de áreas clave como el Centro de Cómputos, donde desembarcaron funcionarios provenientes de Kolektor, Contabilidad, donde desembarcó la consultora Deloitte, la tercerización de la Toma de Lectura en favor de las privadas Conectar y Ema, de Automotores, en favor de la multinacional Edenred, Medidores y Conexiones y Pérdidas No Técnicas.</p>
                  <p>El avance de las tercerizaciones implica claros perjuicios en lo que respecta al sostenimiento y calidad del servicio, los sobrecostos para la Empresa y los puestos de trabajo en riesgo. La posición del gremio en rechazo a las tercerizaciones se ha manifestado en múltiples estrategias de resistencia y movilización, así como de denuncias ante la Justicia solicitando se investiguen irregularidades en la contratación y desempeño de las empresas privadas, así como presentaciones en el ámbito del Ministerio de Trabajo, tanto de la Provincia, como de la Nación.</p>
                  <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3">Descargar convenio</a>


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
                  <p>Desde el mismo 9 de abril de 2018 el gremio ha llevado adelante un plan de lucha sostenido, contrarrestando y resistiendo con fortaleza las medidas arbitrarias del Directorio y del Gobierno de la Provincia.</p>
                  <p>Nuestra acción se desarrolló en varios frentes de lucha y aplicando distintas estrategias, las medidas de fuerza, se complementaron con presentaciones en la Justicia, y en las autoridades de aplicación, conferencias y campañas de prensa e innumerables movilizaciones, acciones y festivales culturales, actos relámpagos, volanteadas, intervenciones, ruidazos, radio abierta en distintos barrios de nuestra ciudad, y articulación permanente con distintos sectores sindicales, organizaciones sociales, estudiantiles, de derechos humanos, políticas y vecinales.</p>
                  <p>Hemos denunciamos permanentemente las mentiras y contradicciones del Directorio de la Empresa y del Gobierno, advirtiendo desde un inicio la intención privatizadora a través del marco regulatorio eléctrico y luego a través del vaciamiento y la privatización sectorizada.</p>
                  <p>Hemos rechazando la falacia empresaria de que el problema de EPEC es el “costo Convenio”, como mentirosamente quisieron hacerle creer a los cordobeses, sino derivado por un lado del encarecimiento dolarizado de la energía mayorista, y por otro, de las malas decisiones de política financiera del Gobierno Provincial, que ha generado un grave endeudamiento dolarizado en EPEC, y del propio Directorio con desmanejos de todo tipo en cuanto a políticas de facturación, a la política comercial, así como gastos desmesurados, en pauta publicitaria, obras y remodelaciones no prioritarias, contrataciones inútiles de asesores, consultoras y empresas tercerizadas.</p>
                  <p>También hemos realizado innumerables denuncias y presentaciones judiciales, solicitando se investiguen las irregularidades financieras, las contrataciones de empresas privadas y el desempeño de las mismas, también en defensa de nuestros compañeros ilegalmente cesanteados, así como gestiones ante el Ministerio de Trabajo y la Empresa por sanciones injustificadas y persecutorias a distintos compañeros.</p>
                  <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3 my-4">Descargar convenio</a>
                </div>
              </Col>

              <Col lg={12}className='d-flex align-items-center mt-3'>
                <div className="d-flex justify-content-center">
                  <img src={img4} alt="" loading='lazy' className='img-fluid rounded-3' />

                </div>
              </Col>

               <Col lg={12}>
                <div>
                  <h3 className="fw-bold mt-5 lineBorderSubTitle">EPEC estatal e Integrada</h3>
                  <p>En la década del 90 enfrentamos épocas muy difíciles, con sucesivos intentos privatistas que amenazan a EPEC, se trató de dividirla en “unidades de negocios”, convertirla en Sociedad Anónima, concesionarla, y venderla. Todos estos intentos fracasaron, fundamentalmente porque el pueblo de Córdoba y los trabajadores lucifuercistas la defendieron con todas sus fuerzas, con la convicción de que la Empresa era parte sustancial de nuestro patrimonio y un instrumento vital para una política económica con sentido social. El modelo de privatizaciones impuesto en los años 90 resultó en un modelo de ganancias para las empresas privadas que se han llevado enormes ganancias fuera del país, sin realizar las inversiones prometidas, eliminado miles de puestos de trabajo, desintegrando operativamente las empresas, con la consiguiente baja en la calidad del servicio y cortes prologados que desde hace años sufren recurrentemente los usuarios. Podemos decir con orgullo que en el caso de Córdoba la situación es distinta, sostuvimos un servicio eléctrico de calidad, sobre todo porque conservamos a EPEC, la única empresa estatal y totalmente integrada que quedó en pie en el país</p>
                  <p>Derrotado el intento de privatización en 2001, la tarea fue abocarse a reconstruir la empresa con una herramienta fundamental, su nueva Carta Orgánica, lograda en 2003, que reafirma a EPEC como estatal e integrada, abriendo nuevas posibilidades de crecimiento e incorporando a los trabajadores organizados en aspectos centrales de la gestión de la Empresa, siguiendo la concepción presente en el Convenio Colectivo de Trabajo 165/75, que la misma carta orgánica reconoce como plenamente vigente</p>
                  <p>La historia de los últimos años nos ha demostrado que fue un acierto la creación de la empresa estatal, así como haberla defendido contra la privatización y enfrentar hoy las políticas que de vaciamiento y tercerización que desde 2018 debilitan su funcionamiento operativo, su rol estratégico y la calidad del servicio</p>
                  <a href="https://luzyfuerzacordoba.com.ar/epec-no-es-anonima/" target="_blank" rel="noopener noreferrer" className="btn estiloBotonH2 mt-3 my-4">Defendamos EPEC</a>
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
