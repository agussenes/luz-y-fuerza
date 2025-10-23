import { useParams, Link } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import LightboxGallerySwiper from '../../components/reutilizables/LightboxGallerySwiper/LightboxGallerySwiper';

import img1 from '../../assets/images/secreatarias/carouselSecPrevSocial/img1.webp';
import img2 from '../../assets/images/secreatarias/carouselSecPrevSocial/img2.webp';
import img3 from '../../assets/images/secreatarias/carouselSecPrevSocial/img3.webp';
import img4 from '../../assets/images/secreatarias/carouselSecPrevSocial/img4.webp';
import img5 from '../../assets/images/secreatarias/carouselSecPrevSocial/img5.webp';
import img6 from '../../assets/images/secreatarias/carouselSecPrevSocial/img6.webp';
1
import './SecretariaDetalle.css';

const imagenesSecPrevSocial = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
]

const contactosSecretaria = (
  <>
    <p>Secretario Gremial – (351) 157-038822</p>
    <p>1° Secr. Gremial – (351) 156-163720</p>
    <p>2° Secr. Gremial – (351) 157-378982</p>
    <p>Mail institucional:<a href="mailto:lyfsecretariagremial@gmail.com"> lyfsecretariagremial@gmail.com</a></p>
  </>
)

const contactoSEcretariaOrgAct = (
  <>
    <p>Secretario – Tel: (351) 153-130413 / email: <a href="mailto:fernan_nav@yahoo.com.ar">fernan_nav@yahoo.com.ar</a></p>
    <p>Subsecretario – Tel: (351) 152-068679</p>
    <p>Mail institucional: <a href="mailto:secretariadeactas@hotmail.com.ar">secretariadeactas@hotmail.com.ar</a></p>
  </>
)

const contactoSecFinanzas = (
  <>
    <p>Tel: (0351) 4228080</p>
    <p>Mail institucional: <a href="mailto:contabilidad@luzyfuerzacordoba.org.ar">contabilidad@luzyfuerzacordoba.org.ar</a></p>
  </>
)

const contactoPrensaPropaganda = (
  <>
    <p>Secretaria de Prensa: (351) 152-521541   </p>
    <p>Subsecretario de Prensa: (351)  152-421423     </p>
    <p>Mail institucional: <a href="mailto:">prensaluzyfuerza.cba@gmail.com</a></p>
  </>
)
const contactoPrevisionSocial = (
  <>
    <p>Tel: (0351) 4228080</p>
    <p>Mail institucional: <a href="mailto:previsionsocial.lyfcba@gmail.com">previsionsocial.lyfcba@gmail.com</a></p>
  </>
)

const contactoSecTurismo = (
  <>
    <p>Tel: (0351) 4228081</p>
    <p>Subsecretario de Turismo y Cultura: (351) 152-076925</p>
    <p>Mail institucional: <a href="mailto:perpia74@gmail.com">perpia74@gmail.com</a></p>
  </>
)

const contactoSecAccionSocialDeportes = (
  <>
    <p>Secretario de Acción Social y Deportes: (351) 156-517086</p>
    <p>Subsecretario de Acción Social y Deportes: (351) 156-845275</p>
    <p>Subsecretario de Obra Social: (351) 152-138396</p>
  </>
)

const contactoSecViviendaObras = (
  <>
    <p>Mail institucional: <a href="mailto:secretviv.lyfcba@gmail.com">secretviv.lyfcba@gmail.com</a></p>
  </>
)

const contactoSecDerechosHumanos = (
  <>
    <p>Secretario de Derechos Humanos: (351) 155-193717</p>
    <p>Mail: <a href="mailto:ddhhluzyfuerzacba@gmail.com">ddhhluzyfuerzacba@gmail.com</a></p>
  </>
)

const secretariasDetalle = {
  general: {
    titulo: 'Secretaría General',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría General representa legalmente a la organización sindical y es la voz y representación principal del Sindicato en su actividad tanto interna como externa.',
      'Asume la defensa del Convenio Colectivo de Trabajo ante la patronal y la autoridad de aplicación y la defensa irrestricta de la EPEC estatal e Integrada.',
      'Como máximo responsable del gremio cumple y hace cumplir las decisiones de los Cuerpos Orgánicos, del Estatuto gremial y las reglamentaciones que se dicten.',
      'También integra y preside las representaciones y delegaciones del Sindicato.',
      'Asimismo, impulsa y sostiene las relaciones del Sindicato con otras organizaciones sindicales y sociales, con la Confederación General del Trabajo u otros espacios gremiales tanto de la provincia, como nacionales e internacionales. Firma todas las actuaciones, documentos y comunicados oficiales.'
    ],
    secretario: 'Secretario General: Jorge Molina Herrera'
  },
  adjunta: {
    titulo: 'Secretaría Adjunta',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría Adjunta colabora y respalda a la Secretaría General, en su organización interna, y todo cuanto la organización sindical requiera, cumpliendo y haciendo cumplir las decisiones de los Cuerpos Orgánicos, del Estatuto gremial y las reglamentaciones que se dicten.',
      'Junto a la Secretaría General se compromete en la defensa del Convenio Colectivo de Trabajo ante la patronal y la autoridad de aplicación y la defensa irrestricta de la EPEC estatal e Integrada.'
    ],
    contacto: 'Secretario Adjunto – (351) 156-515100'
  },
  gremial: {
    titulo: 'Secretaría Gremial',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría Gremial asume la defensa de las reclamaciones que el Consejo Directivo le encomiende y los derechos establecidos en el Convenio Colectivo de Trabajo.',
      'Junto a la Secretaría General y el conjunto del Consejo Directivo asume la defensa del Convenio Colectivo de Trabajo ante la patronal y la autoridad de aplicación, pudiendo representar al Sindicato en trámites y gestiones.',
      'Integra el Tribunal Paritario y la Comisión Paritaria.',
      'Atiende las consultas de los delegados y afiliados en cuanto a las leyes laborales y el Convenio Colectivo.'

    ],
    contacto: contactosSecretaria
  },
  "organizacion-y-actas": {
    titulo: 'Secretaría de Organización y Actas',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría de Organización y actas tiene un papel fundamental en la vida institucional del gremio. Fomenta e impulsa la afiliación al sindicato de los trabajadores de la energía eléctrica.',
      'Organiza las Asambleas, y las fiscaliza tomando la asistencia, controlando su desarrollo, llevando al día el libro de actas y elaborando las actas de las Asambleas, que firmará junto al Secretario General. Lleva la asistencia y toma fielmente las versiones de las reuniones de los Cuerpos Orgánicos.',
      'Asimismo, tiene un rol fundamental en la conformación del Cuerpo General de Delegados y la elección de los delegados, velando por el cumplimiento de las obligaciones de los delegados y fiscalizando las elecciones de los delegados en los sectores de trabajo.',
      'Además, lleva adelante una importante tarea en la logística y organización de los planes de lucha y actividades gremiales que decida y le encomiende el Consejo Directivo.',
      'Organiza las celebraciones y actos por el 13 de Julio, día del trabajador de la electricidad.',
    ],
    contacto: contactoSEcretariaOrgAct
  },
  'finanzas-y-administracion': {
    titulo: 'Secretaría de Finanzas y Administración ',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría de Finanzas y Administración lleva la contabilidad, la recaudación y el manejo de los fondos del Sindicato.',
      'Realiza el balance económico del Sindicato y elabora el Balance General para ser puesto a consideración de la Asamblea General Ordinaria.',
      'Realiza los pagos y toma los préstamos decididos por el Consejo Directivo, así como otorga las ayudas económicas y subsidios de acuerdo a la reglamentación.',
      'Además, tiene a su cargo la administración del Sindicato, cuidado y preservación de sus bienes y supervisión del personal del sindicato.',
    ],
    contacto: contactoSecFinanzas
  },
  'prensa-y-propaganda': {
    titulo: 'Secretaría de Prensa y Propaganda',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La secretaría de Prensa redacta, elabora, diagrama  y difunde las noticias de interés sindical que en distintos formatos deben darse a publicidad, las que serán autorizadas por el Secretario General.',
      'Tiene además la importante tarea de dirigir y elaborar semanalmente  el periódico oficial del sindicato, el Electrum, así como  difundir la actividad de gremio y de interés para el gremio en  la página web y en las redes sociales oficiales del Sindicato, en sus distintas plataformas (Instagram, Facebook, Twitter, WhatsApp) ',
      'Asimismo redacta los comunicados de prensa  oficiales del sindicato, los que  firma junto al Secretario General. ',
      'Elabora solicitadas, volantes y  materiales de difusión que le sean encomendados por el Consejo Directivo.  Fomenta y mantiene relación con los medios de prensa. ',
    ],
    contacto: contactoPrensaPropaganda
  },
  'prevision-social': {
    titulo: 'Secretaría de Previsión Social',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría de Previsión Social acompaña y asesora a los afiliados activos al momento de jubilarse, llevando adelante la tarea de atender y tramitar distintas gestiones relacionadas con las solicitudes de Jubilación, ya sea ordinaria, voluntaria o por invalidez, así como de las pensiones.',
      'Asimismo, atiene lo inherente al Fondo Compensador para jubilados y pensionados.',
      'En lo referido a la política gremial previsional impulsa la defensa del interés de los derechos previsionales de nuestros afiliados, basado en los principios de progresividad e intangibilidad del salario.',
    ],
    contacto: contactoPrevisionSocial,

  },
  'politica-energetica': {
    titulo: 'Secretaría de Política Energética ',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaria de Política Energética analiza y estudia lo vinculado a la producción y planificación eléctrica, en sus aspectos técnicos y estratégicos.',
      'Su misión es contribuir con elaboración de estudios, análisis, y recopilación de información e investigaciones al sostenimiento de la EPEC estatal e integrada y al servicio eléctrico de Córdoba entendido como un bien social y un eje estratégico para el desarrollo de la Provincia.',
      'Asimismo, tiene por función llevar a cabo las investigaciones técnicas, económicas y sociales que los Cuerpos Orgánicos le encomienden, y que constituyan los aportes del gremio a la discusión de temas del interés lucifuercista.',
    ],
    contacto: 'Tel: (0351) 4228080'
  },
  'turismo-y-cultura': {
    titulo: 'Secretaría de Turismo y Cultura ',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'El turismo social como derecho para nuestros afiliados, está reconocido en nuestro Convenio Colectivo de Trabajo y es la premisa de trabajo de la Secretaría.',
      'La Secretaría de Turismo y Cultura trabaja para brindar instalaciones hoteleras y de alojamiento confortable, con calidad de atención y pensada para toda la familia. Tiene a su cargo la organización de las temporadas turísticas, tanto de verano como de invierno, y la administración de los hoteles e infraestructura turística de propiedad del sindicato, así como la contratación de plazas en distintos destinos del país, o bien en destinos suramericanos, tanto para la temporada estival, como para las vacaciones de invierno, o fines de semana turísticos.',
      'Asimismo gestiona en convenio con la FATLYF (Federación Argentina de Trabajadores de Luz y Fuerza) la realización del Turismo Infantil, organizando los contingentes de niños y niñas para su estadía en la Colonia Infantil de Tanti.',
      'En trabajo conjunto con la Secretaría de Finanzas y Administración y la Secretaría de Prensa, y con la coordinación de Gabriela Del Bosque y Alicia Giannobi, se lleva adelante el Programa de Excursiones y Caminatas, con una salida al mes aproximadamente. La propuesta invita a recorrer y conocer distintos puntos y parajes de la bellísima geografía cordobesa, en un programa que combina trekking, senderismo y  actividades  compartidas, fomentando el espíritu de grupo y el conocimiento y respeto a nuestro ambiente. ',
      'Desde el trabajo cultural tiene a su cargo el Centro de Documentación histórica del Sindicato, donde funciona también una biblioteca con títulos de historia nacional, provincial y de cultura general.',
    ],
    contacto: contactoSecTurismo
  },
  'accion-social-y-deportes': {
    titulo: 'Secretaría de Acción Social y Deportes ',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría de Acción Social y Deportes tiene a su cargo la promoción del deporte lucifuercista, la acción social hacia la familia y la comunidad, dentro de lo que se encuentra el cuidado de la salud.',
      'El área deportiva y recreativa de la Secretaría fomenta la sana competencia y la confraternidad. Tiene a su cargo la Organización de los campeonatos de fútbol, el histórico Campeonato Confraternidad, entre equipos de los distintos sectores de trabajo de nuestra empresa, y los ya tradicionales campeonatos de veteranos (+45 y +55) con equipos invitados. Otra tarea del área deportes es organizar la participación de la delegación de Luz y Fuerza Córdoba en el Campeonato Argentino Oscar Smith, de FALTYF, que todos los años reúne a la familia lucifuercista a través del deporte, en distintas disciplinas.',
      'La Secretaria gestiona el predio de Deportes de Guiñazú, donde se desarrollan los campeonatos durante el año y donde funciona la temporada de pileta durante el verano para toda la familia lucifuercista.',
      'Dentro de la Acción social, promueve la asistencia integral para la familia y el niño, organizando la entrega todos los años de los kits de útiles escolares, así como los festejos por el Día de la Madre.',
      'Dentro del área salud, la Secretaría brinda apoyo y asesoramiento a los afiliados para el cuidado de la salud, atendiendo urgencias, así como la gestión y asesoramiento de los trámites en la Obra social. Asimismo, a través de la subsecretaría de Obra Social, se atiende las necesidades de los afiliados y afiliadas surgidos de accidentes de trabajo o enfermedades laborales, proveyendo sillas de ruedas, cabestrillos, muletas, etc. .',
    ],
    contacto: contactoSecAccionSocialDeportes
  },
  'vivienda-y-obras': {
    titulo: 'Secretaría de Vivienda y Obras ',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría de Vivienda y Obras controla y supervisa todas las obras de infraestructura que realice el Sindicato, así como el mantenimiento y/o refacción de toda la infraestructura edilicia de la organización sindical.',
      'Asimismo, es responsable de la proyección, ejecución y tramitación, en conjunto con la Secretaría General y la Secretaría de Administración, de los planes de vivienda para sus afiliados.',
      'Otra función importante de la Secretaría de Vivienda y Obras es la asistencia y asesoramiento a sus afiliados para la edificación, refacción y ampliación de sus viviendas, así como ante necesidades puntuales, como siniestros producidos a raíz de defectos en la construcción, rajaduras o hundimientos.',
    ],
    contacto: contactoSecViviendaObras
  },
  'derechos-humanos': {
    titulo: 'Secretaría de Derechos Humanos ',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'En 2019, la Asamblea General vota por unanimidad la creación de la Secretaría, siendo la secretaría más joven de nuestro sindicato.',
      'La Secretaría impulsa y difunde las banderas de Memoria, Verdad y Justicia, así como la reivindicación de nuestros compañeros desaparecidos y perseguidos.',
      'Su misión es aportar a la defensa de los trabajadores lucifuercistas, promoviendo el respeto a los derechos humanos en el ámbito laboral, recabando denuncias o reclamos por violencia laboral, acoso y/o persecución que puedan sufrir los trabajadores y trabajadoras.',
      'Asimismo, promueve el respeto irrestricto a los derechos humanos, participando y difundiendo acciones sobre problemáticas como la lucha contra la violencia institucional, discapacidad, cuidado del medioambiente, pueblos originarios, democracia, derechos de las mujeres, así como un permanente compromiso con la memoria histórica.',
      'En esta tarea articula con distintas organizaciones e integra la Mesa de Trabajo por los Derechos Humanos y el Foro Sindical de la misma.',
    ],
    contacto: contactoSecDerechosHumanos
  },
};

function SecretariaDetalle() {
  const { id } = useParams();
  const data = secretariasDetalle[id];

  if (!data) {
    return (
      <Container className="py-5">
        <h2>Secretaría no encontrada</h2>
        <Link to="/secretarias" className="btn btn-secondary mt-3">
          Volver al índice de Secretarías
        </Link>
      </Container>
    );
  }

  return (
    <>

      <Container className="py-5 secretaria-detalle-container">
        <p className="text-info fw-bold subtitulo">{data.subtitulo}</p>
        <h2 className="fw-bold mb-4 lineBorderTitle">{data.titulo}</h2>
        <ul>
          {data.contenido.map((texto, i) => (
            <li key={i}>{texto}</li>
          ))}
        </ul>


        {data.secretario && (
          <Alert variant="warning" className="mt-4 border-start border-info border-5 bg-light-warning">
            {data.secretario}
          </Alert>
        )}

        {data.contacto && (
          <Alert variant="warning" className="mt-4 border-start border-info border-5 bg-light-warning">
            <p>Para contactarte con la {data.titulo} comunicate al </p>
            <div>
              <strong>{data.contacto}</strong>
            </div>
          </Alert>
        )}

        {id === 'derechos-humanos' && (
          <>
            <div className='bg-gris p-4 rounded shadow'>
              <h2 className="fw-bold mb-4 lineBorderTitle">Denuncias por violencia laboral</h2>
              <p>
                Las denuncias por maltrato, violencia o acoso laboral son receptadas en la Secretaría de Derechos Humanos de la sede sindical (2do piso) en el horario de 7 a 14 HS, o a través del correo electrónico <a href="mailto:ddhhluzyfuerzacba@gmail.com">ddhhluzyfuerzacba@gmail.com</a>, a los efectos de ir delineando acciones en cada caso particular con el correspondiente asesoramiento jurídico.
              </p>
            </div>
          </>
        )}

        {id === "prevision-social" && (
          <>
            <div className="row my-4">
              <div className="col-lg-6 col-md-12">
                <div className="card p-3">
                  <h3 className='fw-bold'>Asesoramiento previsional y jurídico.</h3>
                  <h4 className="text-muted fw-bold">Martes y Miércoles de 10.30 a 14.00 hs.</h4>
                  <p>La Secretaría de Previsión Social brinda asesoramiento previsional y jurídico a los afiliados todos los martes y miércoles de 10.30 a 14.00 horas, en la oficina del 3° piso de la sede sindical. La atención de los afiliados jubilados, pensionados y activos está a cargo de nuestra asesora, Dra. Liliana Bustos.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card p-3">
                  <h3 className='fw-bold'>Nuevos jubilados y pensionados</h3>
                  <h4 className="text-muted fw-bold">Deben ratificar su afiliación</h4>
                  <p>Los compañeros y compañeras que obtuvieron la jubilación ordinaria o pensión, tienen que ratificar su afiliación al Sindicato ante la Secretaría de Previsión Social. Consulta la documentación a presentar:</p>
                  <p>Tel (0351) 4228080 o <a href="mailto:previsionsocial.lyfcba@gmail.com ">previsionsocial.lyfcba@gmail.com </a></p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h3 className='fw-bold'>CENTRO DE ACTIVIDADES “JUAN LORENZO RACERO”</h3>
              <p>El Centro de Actividades Juan Lorenzo Racero es un valioso espacio para nuestros afiliados pasivos y activos.
                La Secretaría de Previsión Social tiene a cargo la administración del centro de actividades Lorenzo Racero, situado en Rivadeo 1330, en barrio Cofico.</p>
              <p>La propiedad de 450 m2 fue adquirida en 2017 y hoy forma parte del patrimonio social de Luz y Fuerza de Córdoba. Fue inaugurado el 21 de septiembre de 2018, una vez finalizado el trabajo sobre sus instalaciones que fueron totalmente remodeladas y adaptadas para que nuestros afiliados jubilados, pensionados y activos puedan compartir diversas actividades, ya sean recreativas, culturales e incluso gremiales.</p>
              <LightboxGallerySwiper images={imagenesSecPrevSocial} />
            </div>
          </>
        )}

        {id === 'vivienda-y-obras' && (
          <>
            <div>
              <h2 className="fw-bold mb-4 lineBorderTitle">Barrio Jardín del Pilar</h2>
              <p>El 28 de diciembre de 1984, el Sindicato de Luz y Fuerza de Córdoba adquirió un predio de poco más de 21 hectáreas.</p>
              <p>El importe fue abonado en una proporción por los beneficiarios del plan de viviendas a través de un préstamo personal tramitado conjuntamente en el Ex Banco Social, y la proporción restante se abonó con fondos del sindicato. La escritura fue firmada en representación de nuestro sindicato, por las autoridades de aquel entonces, Sixto Ceballos (Secretario General), Juan Lorenzo Racero (Secretario Administrativo) y Miguel Lucero (Secretario de Cultura y Acción Social). Posteriormente, la Secretaría de Cultura y Acción Social conjuntamente con la Secretaría de Política Energética y Asuntos Técnicos, iniciaron la tramitación ante el Instituto Provincial de la Vivienda para la construcción de las primeras 90 viviendas, las que fueron entregadas en 1990, tras una demora provocada por el periodo hiperinflacionario que sufrió la Argentina entre 1987 y 1989. Quedó pendiente la construcción de las aproximadamente 350 viviendas restantes, las que ante la desaparición del Instituto Provincial de la Vivienda, hasta la fecha no ha sido posible iniciar.</p>
              <p>Desde 2015 se ha trabajado en montar toda la infraestructura del barrio, previas habilitaciones de las obras de servicios y delimitación de manzanas y calles. Así, se realizó la apertura de las calles, delimitación de espacios verdes, la construcción del cordón cuneta, el amojonamiento y mensura del terreno, es decir la demarcación de manzanas y calles, y la instalación de gas, cloacas, agua, alumbrado público y tendido eléctrico.</p>
              <p>En 2022 se firmó con el Ministerio de Hábitat y Desarrollo Territorial de la Nación un acta acuerdo de compromiso para la construcción y ampliación de viviendas familiares a través del programa Procrear. En el caso de Luz y Fuerza de Córdoba, nuestros afiliados tienen la posibilidad de tener su casa en el predio de Jardín del Pilar donde haremos realidad nuestro propio barrio.</p>

            </div>
          </>
        )}

        <div className="d-flex justify-content-end">
          <Link to="/secretarias" className="btn estiloBotonH2 mt-4">
            ← Volver al índice de Secretarías
          </Link>
        </div>
      </Container>
    </>
  );
}

export default SecretariaDetalle;
