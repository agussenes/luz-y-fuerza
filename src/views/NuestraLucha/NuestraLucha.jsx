// NuestraLucha.jsx
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SEO from '../../seo/SEO';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';
import LightboxGallery from '../../components/reutilizables/LightboxGallery/LightboxGallery';
import LightboxGallerySwiper from '../../components/reutilizables/LightboxGallerySwiper/LightboxGallerySwiper';
import BannerGif from '../../components/reutilizables/bannerEpecNoEsAnonima/BannerGif';


// Importa imágenes, videos y PDFs
import portadaImg from '../../assets/images/vidaInstitucional/bannerPortada.jpg';
import img1 from '../../assets/images/nuestraLucha/pngParaCol.png';
import video1 from '../../assets/images/vidaInstitucional/bannerPortada.jpg';

import './NuestraLucha.css';

function NuestraLucha() {
  const sliderImages = Array.from({ length: 90 }, (_, i) => ({
    src: img1,
    caption: `Imagen ${i + 1}`
  }));

  const galleryImages1 = [
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
    { src: img1, caption: 'Volante contra ' },
  ];

  const videoSlides = [
    { src: video1, caption: 'Marcha histórica por EPEC' },
    { src: video1, caption: 'Marcha histórica por EPEC' },
    { src: video1, caption: 'Marcha histórica por EPEC' },
    // otros videos...
  ];

  return (
    <>
      <SEO
        title="Nuestra Lucha - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="https://tusitio.com/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <BannerPortadas imagen={portadaImg} title="Nuestra Lucha" />

      < BannerGif />

      <section className="nuestra-lucha-content py-5">
        <Container>
          <p className="text-info fw-bold subtitulo">Nuestra Lucha. Conflicto desde 2018</p>
          <h2 className="fw-bold mb-3 lineBorderTitle">Luz y Fuerza de pie en defensa de EPEC y el Convenio Colectivo de Trabajo</h2>
          <p className="bajada">El Gobierno de Córdoba y el Directorio de la empresa emprendieron desde abril de 2018 un camino de ataque a nuestro Convenio Colectivo de Trabajo y de vaciamiento privatista de la EPEC (Empresa Provincial de Energía de Córdoba).</p>

          {/* 66/33 Section */}
          <Row className="mt-5">
            <Col md={8}>
              <div>
                <h3 className="fw-bold lineBorderSubTitle">El Conflicto</h3>
                <p>El 9 de abril de 2018 inicia el conflicto, cuando el Directorio de la EPEC emite 4 Resoluciones, que significaban una traba al funcionamiento operativo y eran violatorias de varios artículos del Convenio. En mayo denuncian nuestro Convenio Colectivo de Trabajo y el Ministro de Agua, Ambiente y Servicios Públicos, Fabián López, anuncia a espaldas de los trabajadores y el pueblo de Córdoba la intención de vaciamiento privatista del Gobierno de Córdoba, informando en conferencia de prensa la apertura de la pasividad anticipada, el envío de dos proyectos de recorte de fondos previsionales y de eliminación de artículos del convenio, además de la intención de aprobar un nuevo Marco Regulatorio Eléctrico, que le encargaron a la consultora privatista Quantum, y que iba a significar la desregulación del sector y la atomización de la EPEC.</p>
              </div>
              <div>
                <h3 className="fw-bold mt-5 lineBorderSubTitle">Defensa del Convenio</h3>
                <p>La estrategia de nuestra organización sindical en defensa del Convenio Colectivo fue desconocer al Ministerio de Trabajo de la Provincia como autoridad de aplicación para discutir Convenio, en tanto el Convenio Colectivo de Luz y Fuerza 165/75 es de ultraactividad, amparado en la Ley nacional de Convenciones Colectivas14250.
                  Así, exigimos que se discutiera en el ámbito que corresponde, el Ministerio de Trabajo de la Nación, donde se iniciaron audiencias que duraron largos meses, mientras Luz y Fuerza desarrollaba un intenso plan de lucha y se negaba a firmar cualquier modificación del Convenio con la Empresa, que aplicó extorsiones de todo tipo, incluso negándonos actualización salarial, sino firmábamos la modificación del Convenio. La discusión en el ámbito del Ministerio, ajustada a derecho y en el marco de la legislación y normativa vigente, significaba un empantanamiento para la Empresa y el Gobierno en sus planes, más aun cuando no pudieron presentar los balances financieros y sociales como corresponde, y debieron recurrir a la arbitrariedad violando todos los marcos legales vigentes, sancionado en la Legislatura Unicameral 3 leyes inconstitucionales e ilegales, por las cuales modificaron tres artículos del Convenio Colectivo. Desde el gremio mantuvimos la estrategia de defender el Convenio en el ámbito de aplicación legal y el resultado es que no pudieron voltear el Convenio, que tiene plena vigencia y cuyo incumplimiento por parte de la empresa implica una ilegalidad que seguimos denunciando y sosteniendo en todos los ámbitos correspondientes, nacionales e internacionales.</p>
              </div>
              <div>
                <h3 className="fw-bold mt-5 lineBorderSubTitle">NO al Marco Regulatorio</h3>
                <p>El proyecto de nuevo Marco Regulatorio Eléctrico, encargado a la consultora Quantum, pretendía dividir a la EPEC en unidades de negocio, desintegrando la Empresa en sus áreas de Generación, Distribución y Comercialización, lo que significaba la antesala de la privatización. Además implicaba actualización automática de tarifas, atadas a costos dolarizados. Frente a este nuevo proyecto privatista, el gremio reaccionó con un intenso plan de lucha, y campaña de esclarecimiento, en articulación con distintos sectores de la sociedad, organizaciones vecinales, sociales, estudiantiles, gremiales y de derechos humanos, así como sectores políticos de la oposición, nos acompañaron en distintas acciones, confluyendo en dos masivas marchas multisectoriales del 15 de agosto y del 18 de diciembre de 2018, convocadas en rechazo al Marco Regulatorio privatista, las políticas de vaciamiento y contra el tarifazo. En diciembre de 2018, el entonces presidente de la unicameral González, informa a la comitiva gremial lucifuercista, mientras una movilización esperaba afuera, que no estaba en carpeta un proyecto de nuevo marco eléctrico. Se frenaba así, con la lucha del gremio y el acompañamiento de la sociedad lo que era el desguace seguro de la EPEC.</p>
                <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary estiloBoton mt-3">Descargar convenio</a>


              </div>
              <div>
                <h3 className="fw-bold mt-5 lineBorderSubTitle">Privatización sectorizada, vaciamiento y precarización</h3>
                <p>Caído el proyecto de Marco Regulatorio Eléctrico y paralelamente al ataque a nuestro Convenio, la empresa emprendió una política claramente privatista, con medidas de achicamiento, ajuste, tarifazos, tercerizaciones y vaciamiento, impulsado por la apertura de un proceso de Pasividad Anticipada Voluntaria y una flexibilización ilegal de las condiciones laborales, violando el CCT vigente, con paralización de la conformación de las Estructuras de Plantel y falta de cubrimiento de cargos.</p>
                <p>Así, al cierre de las cajas de cobro y Centros de Atención Comercial, se sumó el desguace de áreas clave como el Centro de Cómputos, donde desembarcaron funcionarios provenientes de Kolektor, Contabilidad, donde desembarcó la consultora Deloitte, la tercerización de la Toma de Lectura en favor de las privadas Conectar y Ema, de Automotores, en favor de la multinacional Edenred, Medidores y Conexiones y Pérdidas No Técnicas.</p>
                <p>El avance de las tercerizaciones implica claros perjuicios en lo que respecta al sostenimiento y calidad del servicio, los sobrecostos para la Empresa y los puestos de trabajo en riesgo. La posición del gremio en rechazo a las tercerizaciones se ha manifestado en múltiples estrategias de resistencia y movilización, así como de denuncias ante la Justicia solicitando se investiguen irregularidades en la contratación y desempeño de las empresas privadas, así como presentaciones en el ámbito del Ministerio de Trabajo, tanto de la Provincia, como de la Nación.</p>
                <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary estiloBoton mt-3">Descargar convenio</a>


              </div>
              <div>
                <h3 className="fw-bold mt-5 lineBorderSubTitle">Plan de Lucha y acción gremial</h3>
                <p>Desde el mismo 9 de abril de 2018 el gremio ha llevado adelante un plan de lucha sostenido, contrarrestando y resistiendo con fortaleza las medidas arbitrarias del Directorio y del Gobierno de la Provincia.</p>
                <p>Nuestra acción se desarrolló en varios frentes de lucha y aplicando distintas estrategias, las medidas de fuerza, se complementaron con presentaciones en la Justicia, y en las autoridades de aplicación, conferencias y campañas de prensa e innumerables movilizaciones, acciones y festivales culturales, actos relámpagos, volanteadas, intervenciones, ruidazos, radio abierta en distintos barrios de nuestra ciudad, y articulación permanente con distintos sectores sindicales, organizaciones sociales, estudiantiles, de derechos humanos, políticas y vecinales.</p>
                <p>Hemos denunciamos permanentemente las mentiras y contradicciones del Directorio de la Empresa y del Gobierno, advirtiendo desde un inicio la intención privatizadora a través del marco regulatorio eléctrico y luego a través del vaciamiento y la privatización sectorizada.</p>
                <p>Hemos rechazando la falacia empresaria de que el problema de EPEC es el “costo Convenio”, como mentirosamente quisieron hacerle creer a los cordobeses, sino derivado por un lado del encarecimiento dolarizado de la energía mayorista, y por otro, de las malas decisiones de política financiera del Gobierno Provincial, que ha generado un grave endeudamiento dolarizado en EPEC, y del propio Directorio con desmanejos de todo tipo en cuanto a políticas de facturación, a la política comercial, así como gastos desmesurados, en pauta publicitaria, obras y remodelaciones no prioritarias, contrataciones inútiles de asesores, consultoras y empresas tercerizadas.</p>
                <p>También hemos realizado innumerables denuncias y presentaciones judiciales, solicitando se investiguen las irregularidades financieras, las contrataciones de empresas privadas y el desempeño de las mismas, también en defensa de nuestros compañeros ilegalmente cesanteados, así como gestiones ante el Ministerio de Trabajo y la Empresa por sanciones injustificadas y persecutorias a distintos compañeros.</p>
                <a href="/pdfs/convenio-colectivo.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary estiloBoton mt-3 my-4">Descargar convenio</a>
              </div>
            </Col>

            <Col md={4}>
              <h5 className="fw-bold mb-4">Materiales visuales</h5>

              {/* Primer grupo de 3 imágenes */}
              <Row>
                {galleryImages1.slice(0, 3).map((img, i) => (
                  <Col xs={4} key={i} className="mb-3">
                    <LightboxGallery images={[img]} />
                  </Col>
                ))}
              </Row>

              {/* Primer video */}
              <div className="video-wrapper my-3">
                <video controls className="w-100 rounded shadow">
                  <source src={video1} type="video/mp4" />
                </video>
              </div>

              {/* Segundo grupo de 8 imágenes */}
              <Row>
                {galleryImages1.slice(3, 11).map((img, i) => (
                  <Col xs={4} key={i} className="mb-3">
                    <LightboxGallery images={[img]} />
                  </Col>
                ))}
              </Row>

              {/* Segundo video */}
              <div className="video-wrapper my-3">
                <video controls className="w-100 rounded shadow ">
                  <source src={video1} type="video/mp4" />
                </video>
              </div>

              {/* Tercer grupo de 12 imágenes */}
              <Row>
                {galleryImages1.slice(11, 23).map((img, i) => (
                  <Col xs={4} key={i} className="mb-3">
                    <LightboxGallery images={[img]} />
                  </Col>
                ))}
              </Row>
            </Col>


          </Row>

          {/* Swiper Galeria */}
          <div className="mt-5">
            <p className="text-info fw-bold subtitulo">DOCUMENTACIÓN GRÁFICA</p>
            <h2 className="fw-bold mb-4 lineBorderTitle">Galería de Imágenes</h2>

            <LightboxGallerySwiper images={sliderImages} />
          </div>


          {/* Swiper Videos */}
          <div className="mt-5">
            <p className="text-info fw-bold subtitulo">VIDEOS DESTACADOS</p>
            <h2 className="fw-bold mb-4 lineBorderTitle">Archivo Audiovisual</h2>
            <Swiper
              className="videos-swiper"
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              navigation
            >
              {videoSlides.map((vid, i) => (
                <SwiperSlide key={i}>
                  <video controls className="w-100 rounded ">
                    <source src={vid.src} type="video/mp4" />
                  </video>
                  <p className="caption mt-2 text-center my-4">{vid.caption}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Banner final */}
          <div className="mt-5 text-center rounded p-4 shadow bannerEpec">
            <h3 className="fw-bold mb-2 lineBorderTitle">Defendemos EPEC</h3>
            <p>Sumate a nuestra lucha por una empresa estatal, integrada y al servicio del pueblo.</p>
            <Link to="/defendamos-epec" className="btn btn-primary mt-2 estiloBoton">Ver más</Link>
          </div>

        </Container>
      </section>
    </>
  );
}

export default NuestraLucha;
