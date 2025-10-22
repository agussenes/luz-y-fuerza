import { useNavigate } from 'react-router-dom';
import SEO from '../../seo/SEO';


import BannerPortadas from '../../components/reutilizables//bannerPortadas/BannerPortadas';

// Sstilo 
import './VidaInstitucional.css';

// import de imagenes 
import imgPortada from '../../assets/images/vidaInstitucional/portadaVI.webp'; import pngParaCol from '../../assets/images/vidaInstitucional/placeHolder.webp';


function VidaInstitucional() {

  const navigate = useNavigate();

  // array swipper AUTORIDADES 
  const swipperAutoridades = [
    { titulo: 'Jorge Molina Herrera', texto: 'Secretario General', alt: 'Jorge Molina Herrera | Secretario General' },
    { titulo: 'Roque Daniel Tapia', texto: 'Secretario Adjunto', alt: 'Roque Daniel Tapia | Secretario Adjunto' },
    { titulo: 'Susana Altamiran', texto: 'Secretaria Gremial', alt: 'Susana Altamiran | Secretaria Gremial' },
    { titulo: 'Sebastián Calderón', texto: '1° Subsecretario Gremial', alt: 'Sebastián Calderón | 1° Subsecretario Gremial' },
    { titulo: 'Víctor Zavorra', texto: '2° Subsecretario Gremial2° Subsecretario Gremial', alt: 'Víctor Zavorra | 2° Subsecretario Gremial' },
    { titulo: 'Marcelo Valles', texto: 'Secretario de Organización y Actas', alt: 'Marcelo Valles | Secretario de Organización y Actas' },
    { titulo: 'Pablo Gutiérres', texto: 'Subsecretario de Organización y Actas', alt: 'Pablo Gutiérres | Subsecretario de Organización y Actas' },
    { titulo: 'Matías Contreras', texto: 'Secretario de Finanzas y Administración', alt: 'Matías Contreras | Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Daniel Lozano', texto: 'Subsecretario de Finanzas', alt: 'Daniel Lozano | Subsecretario de Finanzas' },
    { titulo: 'Evangelina Nieto', texto: 'Subsecretaria de Administración', alt: 'Evangelina Nieto | Subsecretaria de Administración' },
    { titulo: 'Roxana Maldonado', texto: 'Secretaria de Prensa y Propaganda', alt: 'Roxana Maldonado | Secretaria de Prensa y Propaganda' },
    { titulo: 'Gabriel Romero', texto: 'Subsecretario de Prensa', alt: 'Gabriel Romero | Subsecretario de Prensa' },
    { titulo: 'Franco Carrizo', texto: 'Secretario de Previsión Social', alt: 'Franco Carrizo | Secretario de Previsión Social' },
    { titulo: 'Ariel Cabrera', texto: 'Subsecretario de Previsión Social', alt: 'Ariel Cabrera | Subsecretario de Previsión Social' },
    { titulo: 'Roberto Oliva', texto: 'Secretario de Política Energética y Asuntos Tec.', alt: 'Roberto Oliva | Secretario de Política Energética y Asuntos Técnicos' },
    { titulo: 'Roberto Britos', texto: 'Subsecretario de Política Energética', alt: 'Roberto Britos | Subsecretario de Política Energética' },
    { titulo: 'Juan Muñoz', texto: 'Secretario de Turismo y Cultura', alt: 'Juan Muñoz | Secretario de Turismo y Cultura' },
    { titulo: 'Leonardo Rojas', texto: 'Subsecretario de Turismo y Cultura', alt: 'Leonardo Rojas | Subsecretario de Turismo y Cultura' },
    { titulo: 'Ulises Montoya', texto: 'Secretario de Acción Social y Deportes', alt: 'Ulises Montoya | Secretario de Acción Social y Deportes' },
    { titulo: 'Manuel Olmedo', texto: 'Subsecretario de Acción Social y Deportes', alt: 'Manuel Olmedo | Subsecretario de Acción Social y Deportes' },
    { titulo: 'Gustavo Vives', texto: 'Subsecretario de Obra Social', alt: 'Gustavo Vives | Subsecretario de Obra Social' },
    { titulo: 'Fernando Navarro', texto: 'Secretario de Vivienda y Obras', alt: 'Fernando Navarro | Secretario de Vivienda y Obras' },
    { titulo: 'Ignacio Rufeil', texto: 'Subsecretario de Vivienda y Obras', alt: 'Ignacio Rufeil | Subsecretario de Vivienda y Obras' },
    { titulo: 'Alfredo Seydell', texto: 'Secretario de Derechos Humanos', alt: 'Alfredo Seydell | Secretario de Derechos Humanos' },
    { titulo: 'Mariano Gómez', texto: 'Subsecretario de Derechos Humanos', alt: 'Mariano Gómez | Subsecretario de Derechos Humanos' },

  ]

  // array TRIBUNAL PARITARIO 
  const tribunalPari = [
    { titulo: 'Juan Urbano', texto: '1° Miembro Titular', alt: '1° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Noelia Calvimonte', texto: '2° Miembro Titular', alt: '2° Miembro Titular |Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Pablo Iparraguirre', texto: '3° Miembro Titular', alt: ' 3° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
  ];

  // array COMISIÓN REVISORA DE CUENTAS 
  const comisionRevisoraCuentas = [
    { titulo: 'Maldonado José Antonio', texto: '1° Miembro Titular', alt: '1° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Nieto Evangelina', texto: '2° Miembro Titular', alt: '2° Miembro Titular |Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Giannobi Alicia', texto: '3° Miembro Titular', alt: ' 3° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Cerdá Ana', texto: '1° Miembro Suplente', alt: '1° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Da Col Ayelén', texto: '2° Miembro Suplente', alt: '2° Miembro Titular |Logo sin nombre de sindicato de Luz y Fuerza' },
    { titulo: 'Juárez Cristina', texto: '3° Miembro Suplente', alt: ' 3° Miembro Titular | Logo sin nombre de sindicato de Luz y Fuerza' },
  ];

  // array Comisiones Estatutarias 
  const comisionesEstatutarias = [
    { titulo: 'Becas', texto1: 'La organización sindical integra la Comisión mixta de Becas, junto a tres representantes de la Empresa Provincial de Energía y 2 representantes de los otros Sindicatos de Luz y Fuerza de la provincia.', texto2: 'La Comisión registra la inscripción anual de postulantes, selecciona y adjudica las becas para hijos de trabajadores en actividad, jubilados y pensionados para estudios universitarios o su especialización, secundarios y/o técnicos, según lo dispuesto por los artículos 27, 29 y 30 del Convenio Colectivo de Trabajo 165/75.' },
    { titulo: 'Capacitación', texto1: 'La organización sindical integra la Comisión de Capacitación, junto a tres representantes de la Empresa Provincial de Energía y 2 representantes de los otros Sindicatos de Luz y Fuerza de la provincia, así como las Comisiones locales junto a un representante de la Empresa.', texto2: 'La Comisión de Capacitación tiene a su cargo todo lo concerniente a la programación, funcionamiento, implementación, control y desarrollo en los planes de capacitación, según lo dispuesto por el artículo 26 del Convenio Colectivo de Trabajo 165/75.' },
    { titulo: 'Higiene y Seguridad', texto1: 'La organización sindical integra la Comisión de Higiene, Seguridad y Medicina del trabajo con un representante, junto a tres representantes de la Empresa Provincial de Energía y 2 representantes de los otros Sindicatos de Luz y Fuerza de la provincia. Asimismo integra una Comisión local, junto a un representante de la Empresa.', texto2: 'La Comisión de Higiene, Seguridad y Medicina del trabajo tiene a su cargo todo lo concerniente a la preservación de la salud, higiene y seguridad en los lugares de trabajo, será resolutiva en lo referente a funcionamiento y control de las normas implantadas, según lo dispuesto por los artículos 54 y 55 del Convenio Colectivo de Trabajo 165/75.' },
  ]

  return (
    <>
      <SEO
        title="Vida Institucional - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <BannerPortadas imagen={imgPortada} titulo="Autoridades" />

      <section className="vidaInstitucional container py-5">

        <div className="">
          <h1 className="mb-4 lineBorderTitle">CONSEJO DIRECTIVO</h1>
          <p>Conforme al cumplimiento de su misión sindical, el Secretariado y Consejo Directivo, órganos de dirección de la entidad sindical, están abocados a:</p>

        </div>
        <div className="row py-3 border-bottom mb-3">
          <div className="col-md-6">
            <ul className="lista-correcta">
              <li>Representar a los trabajadores afiliados en forma colectiva o individual, en las cuestiones que hacen a sus derechos o reivindicaciones ante el estado, la justicia o los empleadores, vigilando el cumplimiento de las leyes y de los contratos colectivos de trabajo en particular. </li>
              <li>Plantear ante las autoridades públicas los puntos de vista de nuestra organización sindical en lo que se refiere a la política energética, lo que interese al  gremio o a la población en general.</li>
              <li>Gestionar ante las autoridades ya sea nacionales, provinciales o municipales y ante  la patronal todo lo inherente al gremio y beneficioso para los trabajadores.</li>
              <li>Adoptar para la defensa de nuestros intereses y de nuestros representados representados, de las conquistas o leyes de trabajo, y lo establecido en el Convenio Colectivo de Trabajo,    el medio de lucha que las circunstancias aconsejen.</li>
            </ul>
          </div>
          <div className="col-md-6 ">
            <ul className="lista-correcta">
              <li>Promover la ampliación de los servicios médicos asistenciales, así como impulsar el bienestar y mejora de todos sus afiliados y de la familia lucifuercista, en lo que hace a derecho a la vivienda, a la cultura, a la educación, la salud, el turismo y esparcimiento.</li>
              <li>Custodiar el patrimonio sindical.</li>
              <li>Reunirse de manera periódica y convocar a reunión de las subcomisiones, Cuerpo general de Delegados o Asamblea General. Convocar a los afiliados a reuniones por sectores o zonas.</li>
              <li>Cumplir y hacer cumplir las resoluciones emanadas de sus Cuerpos Orgánicos.</li>
              <li>Convocar cada 4 años a elecciones para renovar Consejo Directivo y cada 2 años para renovar el Cuerpo general de Delegados.</li>
            </ul>
          </div>
        </div>

        <div className='contenedorSwipperAutoridades border-bottom py-3 mb-3'>
          <h2 className="mb-3 lineBorderTitle">AUTORIDADES</h2>

          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-1">
            {swipperAutoridades.map((item, i) => (
              <div key={i} className="col">
                <div className="p-2  rounded h-100 bg-white">
                  <h6 className="fw-bold mb-1 tituloAutoridades">{item.titulo}</h6>
                  <p className=" text-muted mb-0 ">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vocales  pb-3 border-bottom mb-3">
          <h2 className=" mt-3 lineBorderTitle ">VOCALES</h2>

          <div className="row">
            <h5 className='lineBorderSubTitle'>Titulares</h5>
            {/* Columna 1 */}
            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
              <div className='p-2'>
                <h6 className="fw-bold mb-1 tituloAutoridades">Jorge Parejo </h6>
                <p className=" text-muted mb-0">1º Vocal Titular</p>
              </div>
              <div className='p-2'>
                <h6 className="fw-bold mb-1 tituloAutoridades">Christian Maldonado </h6>
                <p className=" text-muted mb-0">2º Vocal Titular</p>
              </div>
              <div className='p-2'>
                <h6 className="fw-bold mb-1 tituloAutoridades">Marcos Ceballos Soria</h6>
                <p className=" text-muted mb-0">3º Vocal Titular</p>
              </div>
              <div className='p-2'>
                <h6 className="fw-bold mb-1 tituloAutoridades">Víctor Gramajo</h6>
                <p className=" text-muted mb-0">4º Vocal Titular</p>
              </div>

              <div className='p-2'>
                <h6 className="fw-bold mb-1 tituloAutoridades">Diego Lozada</h6>
                <p className="text-muted mb-0">5º Vocal Titular</p>
              </div>

            </div>

            {/* Columna 2 */}
            <div className="col-md-4 col-sm-6 col-xs-12 mb-4 d-flex">
              <div className='w-100'>
                <div className='p-2'>
                  <h6 className="fw-bold mb-1 tituloAutoridades">Ricardo Acosta</h6>
                  <p className=" text-muted mb-0">6º Vocal Titular</p>
                </div>
                <div className='p-2'>
                  <h6 className="fw-bold mb-1 tituloAutoridades">Ariel Romero</h6>
                  <p className=" text-muted mb-0">7º Vocal Titular</p>
                </div>
                <div className='p-2'>
                  <h6 className="fw-bold mb-1 tituloAutoridades">Pablo Ceballos</h6>
                  <p className=" text-muted mb-0">8º Vocal Titular</p>
                </div>
                <div className='p-2'>
                  <h6 className="fw-bold mb-1 tituloAutoridades">Germán Agüero</h6>
                  <p className=" text-muted mb-0">9º Vocal Titular</p>
                </div>
                <div className='p-2'>
                  <h6 className="fw-bold mb-1 tituloAutoridades">Luis Calderón</h6>
                  <p className=" text-muted mb-0">10º Vocal Titular</p>
                </div>
              </div>

              <div className="linea-vertical"></div>
            </div>

            {/* Columna 3 */}
            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
              <h5 className='lineBorderSubTitle'>Suplentes</h5>
              <div className="py-2">
                <h6 className="fw-bold mb-1 tituloAutoridades">Lucas Muñoz Giraudo</h6>

              </div>
              <div className="py-2">
                <h6 className="fw-bold mb-1 tituloAutoridades">Hugo Pereyra</h6>

              </div>
              <div className="py-2">
                <h6 className="fw-bold mb-1 tituloAutoridades">José Segura</h6>

              </div>
              <div className="py-2">
                <h6 className="fw-bold mb-1 tituloAutoridades">Juan Alaniz</h6>

              </div>
              <div className="py-2">
                <h6 className="fw-bold mb-1 tituloAutoridades">Claudia Córdoba</h6>
              </div>


            </div>
          </div>
        </div>


        {/* Título + Bajada + Row 3 columnas */}
        <div className=" border-bottom py-3 mb-3">
          <h2 className="lineBorderTitle m-0 mt-3">TRIBUNAL PARITARIO</h2>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <p className="my-2">El tribunal paritario cumple su una función primordial, establecida en el art. 82 del CCT, es el organismo facultado para dictaminar sobre la aplicación e interpretación de los dispositivos establecidos en el Convenio Colectivo de Trabajo 165/65.</p>
              <p className="my-2">La organización sindical integra el tribunal paritario con 4 representantes, que son elegidos mediante voto directo y secreto de los afiliados, en elecciones que se harán conjuntamente con las de Consejo Directivo.</p>
            </div>
            <div className="col-lg-4 col-md-12 d-flex align-items-center flex-column">
              <div className="row justify-content-center align-items-center">
                {tribunalPari.map((item, i) => (
                  <div key={i} className="col-12 p-2">
                    <h6 className="fw-bold mb-1 tituloAutoridades"> {item.titulo}</h6>
                    <p className=" text-muted mb-0">{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Título + Row con 6 columnas */}
        <h2 className="lineBorderTitle p-0 m-0 mt-3">COMISIÓN REVISORA DE CUENTAS</h2>

        <div className="row py-3 border-bottom mb-3">

          <div className='textoComisionRevisora my-2 col-lg-12 col-md-12'>
            <p>Es elegida cada 4 años conjuntamente con la elección de Consejo Directivo, que designará la Comisión Revisora de Cuentas.</p>
            <p>Tiene a su cargo fiscalizar la gestión administrativa y contable del Consejo Directivo y presentar a la Asamblea General Ordinara los informes y balances anuales sobre la situación económico financiera del sindicato.</p>

          </div>
          <div className="col-lg-12 col-md-12 row mb-4">
            {comisionRevisoraCuentas.map((item, i) => (
              <div key={i} className="p-2 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <h6 className="fw-bold mb-1 tituloAutoridades"> {item.titulo}</h6>
                <p className=" text-muted mb-0">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Título + Row 3 columnas con subtítulo + 2 párrafos */}
        <h2 className="m-0 my-3 lineBorderTitle text-uppercase">Comisiones Estatutarias</h2>
        <div className="row ">
          {comisionesEstatutarias.map((item, i) => (
            <div key={i} className="col-md-4 mb-4">
              <h5 className='lineBorderSubTitle'>{item.titulo}</h5>
              <p>{item.texto1}</p>
              <p>{item.texto2}</p>
            </div>
          ))}
        </div>

      </section >

    </>
  );
}

export default VidaInstitucional;
