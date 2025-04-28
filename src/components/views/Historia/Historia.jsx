import SEO from '../../../seo/SEO';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './Historia.css'

import bannerHistoria from '../../../assets/images/historia/bannernuestrahistoria.jpg';
import julioMurua from '../../../assets/images/historia/Julio-Murua-370x400.jpg';
import atilioBorserini from '../../../assets/images/historia/2-Atilio-Borserini-370x400.jpg';
import cristobalSierra from '../../../assets/images/historia/Cristobal-Sierra-370x400.jpg'
import cristobalSierraImgSita from '../../../assets/images/historia/Sierra-4-570x700.jpg'


function Historia() {
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
          <p className="lead">Un 5 de Febrero de 1944, como parte de las transformaciones sociales inauguradas por el Peronismo se fundaba la USEOCPE (Unión Sindical de Empleados y Obreros de las Compañías Productoras de Electricidad), antecesor de Luz y Fuerza Córdoba. Era el resultado de la larga lucha de varias generaciones de trabajadores de la electricidad.</p>
          <p className="lead">Desde el momento de su fundación Luz y Fuerza de Córdoba se convirtió en una referencia para el Movimiento Obrero Organizado, formando parte de la vida gremial, social y cultural de Córdoba.</p>
          <p className="lead">Pasando por etapas muy distintas en su historia, mantuvo de manera constante la defensa irrestricta de dos pilares fundamentales: la EPEC como empresa estatal e integrada, con sentido social y estratégico, y los derechos contemplados en el Convenio Colectivo de Trabajo, que costó mucho conseguir y conservar.</p>
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
      <section className="frases py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <blockquote>
                "Nuestro sindicato siempre se caracterizó por ser una gran familia, nunca hubo divisiones por cuestiones político partidarias..."
                <footer>- Julio "Quebracho" Murúa</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
            <img src={julioMurua} className="img-fluid mb-2" alt="Julio Murúa" loading="lazy" />
            </div>
          </div>

          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6">
              <blockquote>
                "Los obreros no pueden olvidar que si ellos no exigen la aplicación de la legislación social, esta se convierte en letra muerta..."
                <footer>- Cristóbal Sierra</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
            <img src={cristobalSierraImgSita} className="img-fluid mb-2 imgMid" alt="Atilio Borserini" loading="lazy" />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <blockquote>
                "¿No son necesarios los sindicatos? Hoy no solo son necesarios, son imprescindibles para el trabajador."
                <footer>- Cristóbal Sierra</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
            <img src={cristobalSierra} className="img-fluid mb-2" alt="Atilio Borserini" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Swiper de imágenes */}
      <section className="galeria-final py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-4">Nuestra Historia en Imágenes</h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img src="/img/galeria/historia1.jpg" className="img-fluid" alt="Historia 1" />
              <p className="text-center">Primeros pasos del sindicato</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/galeria/historia2.jpg" className="img-fluid" alt="Historia 2" />
              <p className="text-center">Movilización histórica</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/galeria/historia3.jpg" className="img-fluid" alt="Historia 3" />
              <p className="text-center">Firma de acuerdos fundamentales</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Historia;