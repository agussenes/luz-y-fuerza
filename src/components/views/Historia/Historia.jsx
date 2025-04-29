import SEO from '../../../seo/SEO';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import './Historia.css'

// imagenes individuales 
import bannerHistoria from '../../../assets/images/historia/bannernuestrahistoria.jpg';
import julioMurua from '../../../assets/images/historia/Julio-Murua-370x400.jpg';
import atilioBorserini from '../../../assets/images/historia/2-Atilio-Borserini-370x400.jpg';
import cristobalSierra from '../../../assets/images/historia/Cristobal-Sierra-370x400.jpg'
import cristobalSierraImgSita from '../../../assets/images/historia/Sierra-4-570x700.jpg'

// imagenes swipper

import img1 from '../../../assets/images/historia/swipper/img1.jpg'
import img2 from '../../../assets/images/historia/swipper/img2.jpg'
import img3 from '../../../assets/images/historia/swipper/img3.jpg'
import img4 from '../../../assets/images/historia/swipper/img4.jpg'
import img5 from '../../../assets/images/historia/swipper/img5.jpg'
import img6 from '../../../assets/images/historia/swipper/img6.jpg'
import img7 from '../../../assets/images/historia/swipper/img7.jpg'
import img8 from '../../../assets/images/historia/swipper/img8.jpg'
import img9 from '../../../assets/images/historia/swipper/img9.jpg'
import img10 from '../../../assets/images/historia/swipper/img10.jpg'
import img11 from '../../../assets/images/historia/swipper/img11.jpg'
import img12 from '../../../assets/images/historia/swipper/img12.jpg'
import img13 from '../../../assets/images/historia/swipper/img13.jpg'

// const swiperSlides = [
//   { src: img1, alt: 'Historia 1', texto: 'Primeros pasos del sindicato' },
//   { src: img2, alt: 'Historia 2', texto: 'Movilización histórica' },
//   { src: img3, alt: 'Historia 3', texto: 'Firma de acuerdos fundamentales' },
//   { src: img4, alt: 'Historia 4', texto: 'Asamblea general de afiliados' },
//   { src: img5, alt: 'Historia 5', texto: 'Marcha solidaria' },
//   { src: img6, alt: 'Historia 6', texto: 'Conferencia gremial' },
//   { src: img7, alt: 'Historia 7', texto: 'Asado del 1º de Mayo' },
//   { src: img8, alt: 'Historia 8', texto: 'Recuerdo de Murúa' },
//   { src: img9, alt: 'Historia 9', texto: 'Cristóbal Sierra con delegados' },
//   { src: img10, alt: 'Historia 10', texto: 'Acto institucional' },
//   { src: img11, alt: 'Historia 11', texto: 'Jornada sindical' },
//   { src: img12, alt: 'Historia 12', texto: 'Charla con afiliados' },
//   { src: img13, alt: 'Historia 13', texto: 'Protesta histórica' },
// ];

const swiperSlides = [
  { year: '1944', src: img1, texto: 'Nacimiento del Sindicato' },
  { year: '1950', src: img2, texto: 'Primer Convenio Colectivo' },
  { year: '1969', src: img3, texto: 'Cordobazo y lucha sindical' },
  { year: '1983', src: img4, texto: 'Retorno a la democracia' },
  { year: '1990', src: img5, texto: 'Privatizaciones y defensa de EPEC' },
  { year: '2000', src: img6, texto: 'Modernización sindical' },
  { year: '2023', src: img7, texto: 'Actualidad y renovación institucional' },
];




function Historia() {

  const swiperRef = useRef(null);

  return (
    <>
      <SEO
        title="Historia - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/historia"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      {/* Portada */}
      <section className="portada d-flex align-items-center justify-content-center text-center">
        <div class="bannerGif-img">
          <img src={bannerHistoria} alt="Portada Energía Córdoba" loading="lazy" />

          {/* Overlay de texto  */}
          {/* <div class="overlay-text">
                <h1 class="text-uppercase">Nuestra Historia</h1>
            </div> */}
        </div>
      </section>

      {/* Bajada con título grande */}
      <section className="bajada py-5">
        <div className="container">
          <h2 className="display-5">HISTORIA</h2>
          <p >Un 5 de Febrero de 1944, como parte de las transformaciones sociales inauguradas por el Peronismo se fundaba la USEOCPE (Unión Sindical de Empleados y Obreros de las Compañías Productoras de Electricidad), antecesor de Luz y Fuerza Córdoba. Era el resultado de la larga lucha de varias generaciones de trabajadores de la electricidad.</p>
          <p >Desde el momento de su fundación Luz y Fuerza de Córdoba se convirtió en una referencia para el Movimiento Obrero Organizado, formando parte de la vida gremial, social y cultural de Córdoba.</p>
          <p >Pasando por etapas muy distintas en su historia, mantuvo de manera constante la defensa irrestricta de dos pilares fundamentales: la EPEC como empresa estatal e integrada, con sentido social y estratégico, y los derechos contemplados en el Convenio Colectivo de Trabajo, que costó mucho conseguir y conservar.</p>
        </div>
      </section>

      {/* Título y descripción en dos columnas */}
      <section className="descripcion py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Se funda Luz y Fuerza</h3>
              <p>En Córdoba, los trabajadores lucifuercistas durante la primera mitad del S. XX, estaban nucleados en dos empresas de capital extranjero, la Compañía de Luz y Fuerza Motriz y la Compañía General, sin tener ningún reconocimiento de derechos laborales. Toda esta etapa es de enfrentamiento con la ley y las compañías, que castigaba la sindicalización.</p>
              <p>A partir de 1943 con la asunción en la Secretaría de Trabajo y Previsión de Juan Domingo Perón, las condiciones políticas cambian. Se impulsa una nueva política social, con eje en los trabajadores, y se envían asesores a todo el país a fomentar la sindicalización, en Córdoba fue designado un integrante del Círculo Obrero Católico, el cura Rafael Moreno, a quien se acercan un grupo de trabajadores de ambas compañías para buscar su asesoramiento.</p>
              <p>Las primeras reuniones tendientes a conformar el sindicato se realizaron el local del Círculo Obrero Católico, en la calle 9 de julio y allí también se realiza la asamblea constitutiva, el 5 de Febrero de 1944, que eligió una Comisión Provisoria que tuvo vigencia por un año, es decir hasta Febrero de 1945, año en el que se eligió la primera Comisión Directiva propiamente dicha.</p>
              <p>La Comisión Provisoria elegida en 1944 dirigió Luz y Fuerza en su primer año de vida y estuvo conformada por Julio Murúa como presidente y por los compañeros titulares Julio Barbeito, Enrique Álvarez Voccos , Horacio Carignano, Carlos Urquía, Gerónimo Ortiz, Bruno Cellerini, Atilio Borserini, Tomás Gómez, Juan Turini, Juan Zanoni, Julio Minggio, Luis Batistella, Francisco Pauluzzi y Luis R. Silva y por los compañeros suplentes: Francisco Alejandro, Oscar Maccio, Robustiano Gallardo y Francisco Sánchez; Además se eligieron delegados ante la patronal: Julio Murúa y Cristóbal Sierra y Revisadores de cuentas: Vidal Lazcano, Cosme Infantino y Ramón del Carmen Britos.</p>
            </div>
            <div className="col-md-6">
              <p>Poco después se presenta un primer petitorio donde se exige el reconocimiento de derechos y garantías: aguinaldo, vacaciones pagas, derecho a Carpeta Médica, aumentos salariales.</p>
              <p>A partir del triunfo del Peronismo en las elecciones de 1946, todos los reclamos se aseguran y se inicia un proceso de profundización en materia de reconocimiento de derechos, de fortalecimiento y desarrollo de las organizaciones sindicales, así como de la industria nacional. Gran parte de las compañías privadas a cargo del servicio en las provincias, son estatizadas creando Empresas públicas Provinciales, como SPEC (antecesora de EPEC) en el caso de Córdoba, creada en 1946 luego de las estatización del Servicio el 11 de noviembre de ese año. En esta etapa se destacan Julio Murúa, Atilio Borserini y Cristóbal Sierra, pioneros dirigentes lucifuercistas que lideraron la construcción de nuestras bases sindicales peleando palmo a palmo por nuestro primer Convenio Colectivo de Trabajo, que se concretó en 1950 y discutiendo y elaborando con el gobierno provincial la integración de las dos compañías de electricidad en una sola empresa pública, que en un inicio iba a ser mixta, pero por presión de los trabajadores terminó siendo estatal e integrada. En esta etapa, se funda nuestro emblemático periódico ELECTRUM, por iniciativa de un joven Agustín Tosco. Además, nuestro sindicato forma parte activa de la fundación de FATLYF, la Federación Argentina de Trabajadores de Luz y Fuerza, un 13 de Julio de 1948.</p>
              <p>Esta etapa se cierra en septiembre de 1955, con el Golpe de Estado que derrocó a Perón, nuestro sindicato es intervenido, y poco después en noviembre de 1955, fallece Cristóbal Sierra, entonces Secretario General de nuestro sindicato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Pioneros */}
      <section className="pioneros py-5 bg-light">
        <div className="container">
          <h3 className="mb-4">Pioneros</h3>
          <p>Los referentes de la década fundacional: Julio Murúa, Atilio Borserini y Cristóbal Sierra</p>
          <div className="row">
            <div className="col-md-4">
              <img src={julioMurua} className="img-fluid mb-2" alt="Julio Murúa" loading="lazy" />
              <p className='text-center'><em>Julio Murúa</em></p>
            </div>
            <div className="col-md-4">
              <img src={atilioBorserini} className="img-fluid mb-2" alt="Atilio Borserini" loading="lazy" />
              <p className='text-center'><em>Atilio Borserini</em></p>
            </div>
            <div className="col-md-4">
              <img src={cristobalSierra} className="img-fluid mb-2" alt="Cristobal Sierra" loading="lazy" />
              <p className='text-center'><em>Cristóbal Sierra</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Frases destacadas con imágenes */}
      <section className="frases text-light py-5">
        <div className="container ">
          <div className="backgroundTes row align-items-center mb-5 ">
            <div className="col-md-6 ">
              <p className='lead'>"Nuestro sindicato siempre se caracterizó por ser una gran familia, nunca hubo divisiones por cuestiones político partidarias..."</p>
              <p ><small> Julio "Quebracho" Murúa</small></p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={julioMurua} className="img-fluid mb-2 imgTesti" alt="Julio Murúa" loading="lazy" />
            </div>
          </div>

          <div className="backgroundTes row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6">
              <p className='lead'>
                "Los obreros no pueden olvidar que si ellos no exigen la aplicación de la legislación social, esta se convierte en letra muerta..."</p>
              <p><small>- Cristóbal Sierra</small></p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={cristobalSierraImgSita} className="img-fluid mb-2 imgMid imgTesti" alt="Atilio Borserini" loading="lazy" />
            </div>
          </div>

          <div className=" backgroundTes row align-items-center">
            <div className="col-md-6">
              <p className='lead'>
                "¿No son necesarios los sindicatos? Hoy no solo son necesarios, son imprescindibles para el trabajador."</p>
              <p><small>- Cristóbal Sierra</small></p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
              <img src={cristobalSierra} className="img-fluid mb-2 imgTesti" alt="Atilio Borserini" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Swiper de imágenes */}
      <section className="timeline-swiper py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-4">Línea de Tiempo del Sindicato</h3>

          <div className="swiper-wrapper-timeline d-flex align-items-center position-relative">
            <button className="btn-nav prev-btn" onClick={() => swiperRef.current?.slidePrev()}>←</button>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={2}
              spaceBetween={60}
              loop={true}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className="timeline-carousel"
              breakpoints={{
                0: {            // Desde 0px (todo)
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                568: {          // Desde 568px
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                769: {          // Desde 769px (tablets en adelante)
                  slidesPerView: 2,
                  spaceBetween: 60,
                }
              }}
            >
              {swiperSlides.map((slide, i) => (
                <SwiperSlide key={i} className="slide-timeline">
                  <div className="timeline-dot">
                    <span>{slide.year}</span>
                  </div>
                  <div className="timeline-card">
                    <img src={slide.src} alt={slide.texto} loading="lazy" />
                    <p className='text-light'>{slide.texto}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="btn-nav next-btn" onClick={() => swiperRef.current?.slideNext()}>→</button>

            {/* Línea base */}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Historia;