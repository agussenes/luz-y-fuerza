import { useNavigate } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import BannerPortadas from '../../reutilizables/bannerPortadas/BannerPortadas';

// Sstilo 
import './VidaInstitucional.css';

// import de imagenes 
import imgPortada from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';
import ConsejoDirectivo from '../../../assets/images/vidaInstitucional/ConsejoDirectivo.jpg'
import pngParaCol from '../../../assets/images/vidaInstitucional/pngParaCol.png';
import imgPersona1 from '../../../assets/images/vidaInstitucional/imgPersona1.jpg';
import imgPersona2 from '../../../assets/images/vidaInstitucional/imgPersona2.jpg';
import imgPersona3 from '../../../assets/images/vidaInstitucional/imgPersona3.jpg';
// imagenes Swipper 
import imgS1 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS1.jpg';
import imgS2 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS2.jpg';
import imgS3 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS3.jpg';
import imgS4 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS4.jpg';
import imgS5 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS5.jpg';
import imgS6 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS6.jpg';
import imgS7 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS7.jpg';
import imgS8 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS8.jpg';
import imgS9 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS9.jpg';
import imgS10 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS10.jpg';
import imgS11 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS11.jpg';
import imgS12 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS12.jpeg';
import imgS14 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS14.jpg';
import imgS15 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS15.jpg';
import imgS16 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS16.jpg';
import imgS17 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS17.jpg';
import imgS18 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS18.jpg';
import imgS19 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS19.jpg';
import imgS20 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS20.jpg';
import imgS21 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS21.jpg';
import imgS22 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS22.jpg';
import imgS23 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS23.jpg';
import imgS24 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS24.jpg';
import imgS25 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS25.jpg';
import imgS26 from '../../../assets/images/vidaInstitucional/SwipperAutoridades/imgS26.jpg';

function VidaInstitucional() {

  const navigate = useNavigate();

  // array swipper AUTORIDADES 
  const swipperAutoridades = [
    { img: imgS1, titulo: 'Jorge Molina Herrera', texto: 'Secretario General', alt: 'Jorge Molina Herrera | Secretario General' },
    { img: imgS2, titulo: 'Roque Daniel Tapia', texto: 'Secretario Adjunto', alt: 'Roque Daniel Tapia | Secretario Adjunto' },
    { img: imgS3, titulo: 'Susana Altamiran', texto: 'Secretaria Gremial', alt: 'Susana Altamiran | Secretaria Gremial' },
    { img: imgS4, titulo: 'Sebastián Calderón', texto: '1° Subsecretario Gremial', alt: 'Sebastián Calderón | 1° Subsecretario Gremial' },
    { img: imgS5, titulo: 'Víctor Zavorra', texto: '2° Subsecretario Gremial2° Subsecretario Gremial', alt: 'Víctor Zavorra | 2° Subsecretario Gremial' },
    { img: imgS6, titulo: 'Marcelo Valles', texto: 'Secretario de Organización y Actas', alt: 'Marcelo Valles | Secretario de Organización y Actas' },
    { img: imgS7, titulo: 'Pablo Gutiérres', texto: 'Subsecretario de Organización y Actas', alt: 'Pablo Gutiérres | Subsecretario de Organización y Actas' },
    { img: imgS8, titulo: 'Matías Contreras', texto: 'Secretario de Finanzas y Administración', alt: 'Matías Contreras | Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: imgS9, titulo: 'Daniel Lozano', texto: 'Subsecretario de Finanzas', alt: 'Daniel Lozano | Subsecretario de Finanzas' },
    { img: imgS10, titulo: 'Evangelina Nieto', texto: 'Subsecretaria de Administración', alt: 'Evangelina Nieto | Subsecretaria de Administración' },
    { img: imgS11, titulo: 'Roxana Maldonado', texto: 'Secretaria de Prensa y Propaganda', alt: 'Roxana Maldonado | Secretaria de Prensa y Propaganda' },
    { img: imgS12, titulo: 'Gabriel Romero', texto: 'Subsecretario de Prensa', alt: 'Gabriel Romero | Subsecretario de Prensa' },
    { img: imgS14, titulo: 'Franco Carrizo', texto: 'Secretario de Previsión Social', alt: 'Franco Carrizo | Secretario de Previsión Social' },
    { img: imgS15, titulo: 'Ariel Cabrera', texto: 'Subsecretario de Previsión Social', alt: 'Ariel Cabrera | Subsecretario de Previsión Social' },
    { img: imgS16, titulo: 'Roberto Oliva', texto: 'Secretario de Política Energética y Asuntos Técnicos', alt: 'Roberto Oliva | Secretario de Política Energética y Asuntos Técnicos' },
    { img: imgS17, titulo: 'Roberto Britos', texto: 'Subsecretario de Política Energética', alt: 'Roberto Britos | Subsecretario de Política Energética' },
    { img: imgS18, titulo: 'Juan Muñoz', texto: 'Secretario de Turismo y Cultura', alt: 'Juan Muñoz | Secretario de Turismo y Cultura' },
    { img: imgS19, titulo: 'Leonardo Rojas', texto: 'Subsecretario de Turismo y Cultura', alt: 'Leonardo Rojas | Subsecretario de Turismo y Cultura' },
    { img: imgS20, titulo: 'Ulises Montoya', texto: 'Secretario de Acción Social y Deportes', alt: 'Ulises Montoya | Secretario de Acción Social y Deportes' },
    { img: imgS21, titulo: 'Manuel Olmedo', texto: 'Subsecretario de Acción Social y Deportes', alt: 'Manuel Olmedo | Subsecretario de Acción Social y Deportes' },
    { img: imgS22, titulo: 'Gustavo Vives', texto: 'Subsecretario de Obra Social', alt: 'Gustavo Vives | Subsecretario de Obra Social' },
    { img: imgS23, titulo: 'Fernando Navarro', texto: 'Secretario de Vivienda y Obras', alt: 'Fernando Navarro | Secretario de Vivienda y Obras' },
    { img: imgS24, titulo: 'Ignacio Rufeil', texto: 'Subsecretario de Vivienda y Obras', alt: 'Ignacio Rufeil | Subsecretario de Vivienda y Obras' },
    { img: imgS25, titulo: 'Alfredo Seydell', texto: 'Secretario de Derechos Humanos', alt: 'Alfredo Seydell | Secretario de Derechos Humanos' },
    { img: imgS26, titulo: 'Mariano Gómez', texto: 'Subsecretario de Derechos Humanos', alt: 'Mariano Gómez | Subsecretario de Derechos Humanos' },

  ]

  // array TRIBUNAL PARITARIO 
  const tribunalPari = [
    { img: pngParaCol, titulo: 'Juan Urbano', texto: '1° Miembro Titular', alt: '1° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: pngParaCol, titulo: 'Noelia Calvimonte', texto: '2° Miembro Titular', alt: '2° Miembro Titular |Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: pngParaCol, titulo: 'Pablo Iparraguirre', texto: '3° Miembro Titular', alt: ' 3° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
  ];

  // array COMISIÓN REVISORA DE CUENTAS 
  const comisionRevisoraCuentas = [
    { img: pngParaCol, titulo: 'Maldonado José Antonio', texto: '1° Miembro Titular', alt: '1° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: pngParaCol, titulo: 'Nieto Evangelina', texto: '2° Miembro Titular', alt: '2° Miembro Titular |Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: pngParaCol, titulo: 'Giannobi Alicia', texto: '3° Miembro Titular', alt: ' 3° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: pngParaCol, titulo: 'Cerdá Ana', texto: '1° Miembro Suplente', alt: '1° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: pngParaCol, titulo: 'Da Col Ayelén', texto: '2° Miembro Suplente', alt: '2° Miembro Titular |Logo sin nombre de sindicato de Luz y Fuerza' },
    { img: pngParaCol, titulo: 'Juárez Cristina', texto: '3° Miembro Suplente', alt: ' 3° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
  ];

  // array Comisiones Estatutarias 
  const comisionesEstatutarias = [
    { titulo: 'Becas', texto1: 'La organización sindical integra la Comisión mixta de Becas, junto a tres representantes de la Empresa Provincial de Energía y 2 representantes de los otros Sindicatos de Luz y Fuerza de la provincia.', texto2: 'La Comisión registra la inscripción anual de postulantes, selecciona y adjudica las becas para hijos de trabajadores en actividad, jubilados y pensionados para estudios universitarios o su especialización, secundarios y/o técnicos, según lo dispuesto por los artículos 27, 29 y 30 del Convenio Colectivo de Trabajo 165/75.' },
    { titulo: 'Capacitación', texto1: 'La organización sindical integra la Comisión de Capacitación, junto a tres representantes de la Empresa Provincial de Energía y 2 representantes de los otros Sindicatos de Luz y Fuerza de la provincia, así como las Comisiones locales junto a un representante de la Empresa.', texto2: 'La Comisión de Capacitación tiene a su cargo todo lo concerniente a la programación, funcionamiento, implementación, control y desarrollo en los planes de capacitación, según lo dispuesto por el artículo 26 del Convenio Colectivo de Trabajo 165/75.' },
    { titulo: 'Higiene y Seguridad', texto1: 'La organización sindical integra la Comisión de Higiene, Seguridad y Medicina del trabajo con un representante, junto a tres representantes de la Empresa Provincial de Energía y 2 representantes de los otros Sindicatos de Luz y Fuerza de la provincia. Asimismo integra una Comisión local, junto a un representante de la Empresa.', texto2: 'La Comisión de Higiene, Seguridad y Medicina del trabajo tiene a su cargo todo lo concerniente a la preservación de la salud, higiene y seguridad en los lugares de trabajo, será resolutiva en lo referente a funcionamiento y control de las normas implantadas, según lo dispuesto por los artículos 54 y 55 del Convenio Colectivo de Trabajo 165/75.' },
  ]

  // array Galería institucional 
  const galeriaInstitucional = [
    { img: imgPersona1, leyenda: 'Comisión de Capacitación: Sebastián Calderón', alt: 'Foto Comisión de Capacitación: Sebastián Calderón' },
    { img: imgPersona2, leyenda: 'Comisión de Becas: José María Britos', alt: 'Foto Comisión de Becas: José María Britos' },
    { img: imgPersona3, leyenda: 'Comisión de Higiene y Seguridad: Darío Pacheco', alt: 'Foto Comisión de Higiene y Seguridad: Darío Pacheco' },
  ]

  return (
    <>
      <SEO
        title="Vida Institucional - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <BannerPortadas imagen={imgPortada} title="Vida institucional" />

      <section className="vidaInstitucional container py-5">

        <h1 className="mb-4 lineBorderTitle">CONSEJO DIRECTIVO</h1>
        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <p>Conforme al cumplimiento de su misión sindical, el Secretariado y Consejo Directivo, órganos de dirección de la entidad sindical, están abocados a:</p>
            <ul className="lista-correcta">
              <li>Representar a los trabajadores afiliados en forma colectiva o individual, en las cuestiones que hacen a sus derechos o reivindicaciones ante el estado, la justicia o los empleadores, vigilando el cumplimiento de las leyes y de los contratos colectivos de trabajo en particular. </li>
              <li>Plantear ante las autoridades públicas los puntos de vista de nuestra organización sindical en lo que se refiere a la política energética, lo que interese al  gremio o a la población en general.</li>
              <li>Gestionar ante las autoridades ya sea nacionales, provinciales o municipales y ante  la patronal todo lo inherente al gremio y beneficioso para los trabajadores.</li>
              <li>Adoptar para la defensa de nuestros intereses y de nuestros representados representados, de las conquistas o leyes de trabajo, y lo establecido en el Convenio Colectivo de Trabajo,    el medio de lucha que las circunstancias aconsejen.</li>
              <li>Promover la ampliación de los servicios médicos asistenciales, así como impulsar el bienestar y mejora de todos sus afiliados y de la familia lucifuercista, en lo que hace a derecho a la vivienda, a la cultura, a la educación, la salud, el turismo y esparcimiento.</li>
              <li>Custodiar el patrimonio sindical.</li>
              <li>Reunirse de manera periódica y convocar a reunión de las subcomisiones, Cuerpo general de Delegados o Asamblea General. Convocar a los afiliados a reuniones por sectores o zonas.</li>
              <li>Cumplir y hacer cumplir las resoluciones emanadas de sus Cuerpos Orgánicos.</li>
              <li>Convocar cada 4 años a elecciones para renovar Consejo Directivo y cada 2 años para renovar el Cuerpo general de Delegados.</li>
            </ul>
          </div>


          <div className="col-md-4 ">

            <img src={ConsejoDirectivo} alt="Imagen del Consejo Directivo completo de 2019 - 2023" className="img-fluid" loading='lazy' />
            <img src={ConsejoDirectivo} alt="Imagen del Consejo Directivo completo de 2019 - 2023" className="img-fluid" loading='lazy' />
            <img src={ConsejoDirectivo} alt="Imagen del Consejo Directivo completo de 2019 - 2023" className="img-fluid" loading='lazy' />
          </div>
        </div>

        <div className='contenedorSwipperAutoridades'>
          <h2 className="mb-4 lineBorderTitle">AUTORIDADES</h2>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {swipperAutoridades.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="text-center p-3 shadow-sm rounded h-100 bg-white">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="img-fluid mb-2"
                    style={{ maxHeight: '200px' }}
                  />
                  <h6 className="fw-bold">{item.titulo}</h6>
                  <p className="small text-muted">{item.texto}</p>
                </div>
              </SwiperSlide>
            ))}

            
            {/* Flechas personalizadas */}
            <div className='d-flex justify-content-center align-items-center gap-4 my-2'>
              
              <div className="swiper-button-prev-custom btn btn-outline-primary"><i className="bi bi-chevron-left"></i></div>
              <div className="swiper-button-next-custom btn btn-outline-primary"><i className="bi bi-chevron-right"></i></div>
            </div>
          </Swiper>

        </div>

        <div className="vocales container my-5">
          <h2 className="mb-4 lineBorderTitle">VOCALES</h2>
          <div className="row">
            {/* Columna 1 */}
            <div className="col-md-4 mb-4">
              <h5 className='lineBorderSubTitle'>Titulares</h5>
              <ul className="lista-correcta ps-3">
                <li>Jorge Parejo - 1º Vocal Titular</li>
                <li>Christian Maldonado - 2º Vocal Titular</li>
                <li>Marcos Ceballos Soria - 3º Vocal Titular</li>
                <li>Víctor Gramajo - 4º Vocal Titular</li>
                <li>Diego Lozada - 5º Vocal Titular</li>
              </ul>
            </div>

            {/* Columna 2 */}
            <div className="col-md-4 mb-4 d-flex">
              <ul className="lista-correcta pe-3 mb-0 separadorBorde">
                <li>Ricardo Acosta – 6º Vocal Titular</li>
                <li>Ariel Romero – 7º Vocal Titular</li>
                <li>Pablo Ceballos – 8º Vocal Titular</li>
                <li>Germán Agüero – 9º Vocal Titular</li>
                <li>Luis Calderón – 10º Vocal Titular</li>
              </ul>
              <div className="linea-vertical"></div>
            </div>

            {/* Columna 3 */}
            <div className="col-md-4 mb-4">
              <h5 className='lineBorderSubTitle'>Suplentes</h5>
              <ul className="lista-correcta ps-3">
                <li> Lucas Muñoz Giraudo</li>
                <li> Hugo Pereyra</li>
                <li> José Segura</li>
                <li> Juan Alaniz</li>
                <li> Claudia Córdoba</li>
              </ul>
            </div>
          </div>
        </div>


        {/* Título + Bajada + Row 3 columnas */}
        <h2 className="mb-2 lineBorderTitle">TRIBUNAL PARITARIO</h2>
        <p className="mb-4 my-4">El tribunal paritario cumple su una función primordial, establecida en el art. 82 del CCT, es el organismo facultado para dictaminar sobre la aplicación e interpretación de los dispositivos establecidos en el Convenio Colectivo de Trabajo 165/65.</p>
        <p className="mb-4 my-4">La organización sindical integra el tribunal paritario con 4 representantes, que son elegidos mediante voto directo y secreto de los afiliados, en elecciones que se harán conjuntamente con las de Consejo Directivo.</p>
        <div className="row mb-5">
          {tribunalPari.map((item, i) => (
            <div key={i} className="col-md-4 text-center">
              <img src={item.img} alt={item.alt} className=" mb-3" loading='lazy' height={110} />
              <h5>{item.titulo}</h5>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>

        {/* Título + Row con 6 columnas */}
        <h2 className="mb-4 lineBorderTitle">COMISIÓN REVISORA DE CUENTAS</h2>
        <div className="row mb-5">
          <div className='textoComisionRevisora my-4'>
            <p>Es elegida cada 4 años conjuntamente con la elección de Consejo Directivo, que designará la Comisión Revisora de Cuentas.</p>
            <p>Tiene a su cargo fiscalizar la gestión administrativa y contable del Consejo Directivo y presentar a la Asamblea General Ordinara los informes y balances anuales sobre la situación económico financiera del sindicato.</p>

          </div>
          {comisionRevisoraCuentas.map((item, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-2 text-center mb-4">
              <img src={item.img} alt={item.alt} className="mb-2" loading='lazy' height={60} />
              <h6 className='lineBorderSubTitle'>{item.titulo}</h6>
              <p className="small">{item.texto}</p>
            </div>
          ))}
        </div>

        {/* Título + Row 3 columnas con subtítulo + 2 párrafos */}
        <h2 className="mb-4 lineBorderTitle">Comisiones Estatutarias</h2>
        <div className="row mb-5">
          {comisionesEstatutarias.map((item, i) => (
            <div key={i} className="col-md-4 mb-4">
              <h5 className='lineBorderSubTitle'>{item.titulo}</h5>
              <p>{item.texto1}</p>
              <p>{item.texto2}</p>
            </div>
          ))}
        </div>

        {/* Título + Row 3 columnas con imagen y leyenda */}
        <h2 className="mb-4 lineBorderTitle">Galería institucional</h2>
        <div className="row mb-5">
          {galeriaInstitucional.map((item, i) => (
            <div key={i} className="col-md-4 text-center">
              <img src={item.img} alt={item.alt} className="img-fluid mb-2" loading='lazy' />
              <p className="text-muted">{item.leyenda}</p>
            </div>
          ))}
        </div>

        {/* Banners navegables como cards */}
        <div className="row">
          {/* Card 1 - Cuerpo General de Delegados */}
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 text-center shadow-sm"
              onClick={() => navigate("/cuerpo-general-delegados")}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <i className="bi bi-people-fill fs-1 mb-3 text-primary"></i> {/* 👥 */}
                <h5 className="card-title">Cuerpo General de Delegados</h5>
                <p className="card-text">Accedé a la sección del cuerpo general.</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Asamblea General */}
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 text-center shadow-sm"
              onClick={() => navigate("/asamblea-general")}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <i className="bi bi-megaphone-fill fs-1 mb-3 text-danger"></i> {/* 📣 */}
                <h5 className="card-title">Asamblea General</h5>
                <p className="card-text">Información sobre la Asamblea General.</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Secretaría */}
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 text-center shadow-sm"
              onClick={() => navigate("/secretarias")}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <i className="bi bi-person-vcard-fill fs-1 mb-3 text-success"></i> {/* 🪪 */}
                <h5 className="card-title">Secretaría</h5>
                <p className="card-text">Conocé el trabajo de la secretaría.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
}

export default VidaInstitucional;
