import SEO from '../../seo/SEO';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';
import Typewriter from 'typewriter-effect';

// Imágenes
import imgPortada from '../../assets/images/vidaInstitucional/portadaVI.webp';
import convenioPersola from '../../assets/images/convenioColectivo/convenioPersola.jpg';
import img1 from '../../assets/images/convenioColectivo/img1.jpg'
import img2 from '../../assets/images/convenioColectivo/img2.jpg'
import logoSi from '../../assets/images/nuestraLucha/img2.webp'



function ConvenioColectivo() {
  return (
    <>
      <SEO
        title="Convenio colectivo - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <BannerPortadas imagen={imgPortada} titulo="Convenio colectivo" />

      {/* Introducción */}
      <section className="container py-5">
        <h2 className="mb-4 fw-bold lineBorderTitle">
          El Convenio Colectivo tiene plena vigencia
        </h2>
        <div className="row ">
          <div className="col-md-8">
            <p className="mb-3">
              El CCT de Luz y Fuerza 165/75 es un Convenio ejemplar, de avanzada en muchos aspectos, de visión progresista e integral, amparado en la visión que entiende a la Empresa Provincial de Energía de Córdoba como una comunidad de Trabajo, una Comunidad Organizada.
            </p>

            <p className="mb-3">
              Como lucifuercistas, conquistamos el primer Convenio en los años 50, y luego arribamos en los años 70 al Convenio que tenemos hoy, mejorando sus disposiciones. Luchamos por su plena recuperación luego de la dictadura, resistimos su flexibilización durante los años 90. Hoy, nuevamente, luchamos día a día defendiendo su plena vigencia, sin firmar ninguna modificación a la baja.
            </p>

            <p className="mb-3">
              El Convenio Colectivo de Trabajo, resultado de la lucha de los trabajadores lucifuercistas, regula las relaciones laborales entre EPEC y sus trabajadores, estableciendo obligaciones y derechos, tanto para los trabajadores como para la patronal. Garantiza la estabilidad y la carrera laboral, regula la organización del trabajo hacia dentro de la Empresa, dando participación plena a los trabajadores, representados en la organización gremial en el funcionamiento y gestión de la Empresa. Establece escalas salariales, prevé el funcionamiento de un Consejo de Empresa y de un Tribunal Paritario, bonificaciones, régimen de licencia, fomento a la capacitación, resguardo a la madre trabajadora, derechos previsionales, protección de la niñez y la familia garantizando aportes al sostenimiento de derechos tales como la vivienda, el turismo, la educación, la cultura o el deporte.
            </p>

            <p className="mb-3">
              El Convenio Colectivo de Trabajo 165/75 es un producto normativo, es decir que establece normas para las relaciones laborales, normas que surgen de la negociación colectiva donde las partes debidamente representadas -Sindicato como representación legal de los trabajadores y Empresa- se dan una organización de manera autónoma y de común acuerdo.
            </p>

            <p className="mb-3">
              Este principio de negociación colectiva es fundamental y está establecido en el artículo 14 bis de la Constitución Nacional, en los pronunciamientos del Comité de la Libertad Sindical y recopilado por la Oficina Internacional del Trabajo en las ediciones de 1996 y 2006. Es el derecho de los sindicatos y de las representaciones patronales ejercer su actividad sin limitaciones, determinar sus cursos de acción, definir sus estatutos, darse sus estructuras de gobierno, esto es lo que da derecho al sindicato a negociar colectivamente, a participar de organismos estatales y también a ejercer la huelga.
            </p>

            <p className="mb-3">
              Surgido entonces de la negociación colectiva y autónoma entre EPEC y nuestra organización sindical, nuestro Convenio Colectivo de Trabajo, en el marco de la ley 14.250 de Convenciones Colectivas de Trabajo, está homologado en el Ministerio de Trabajo de la Nación y amparado por el principio que establece que siempre prevalece para un trabajador la norma que le sea más favorable. En este sentido, está regido y protegido por los principios de ultraactividad y progresividad.
            </p>

            <p className="mb-3">
              Así, la ultraactividad, amparada en el artículo 6º de la ley 14.250, establece que un convenio colectivo de trabajo permanece intacto con todo su vigor, salvo que los propios actores, de común acuerdo mediante una nueva negociación colectiva, resuelvan su modificación, o incluso hasta su propia extinción. Mientras tanto el Convenio Colectivo conserva su total y completa vigencia normativa.
            </p>

            <p className="mb-3">
              A lo largo de la historia, muchos gobiernos contrarios a la Justicia Social, han intentado eliminar nuestro Convenio, suprimiéndolo (como lo hizo la dictadura) o incumpliendo sus disposiciones y modificándolo ilegalmente. Es así como hemos dado innumerables batallas en defensa del Convenio, garantía de estabilidad y dignidad para los lucifuercistas.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            <img src={convenioPersola} alt="Convenio Luz y Fuerza" className="img-fluid rounded shadow mb-4" />
            <div className="ratio ratio-16x9 rounded shadow">
              <iframe
                src="https://www.youtube.com/embed/fDbm3X5C1J0?si=WyECgfhlMTClBNKI"
                title="Laboralistas y Juristas"
                allowFullScreen
                className='rounded'
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Video y texto en paralelo */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={img1} alt="Convenio Luz y Fuerza" className="img-fluid rounded shadow" />
            <p className="fst-italic text-muted mt-2 text-center">
              Queja elevada ante la OIT, por violación del derecho de negociación colectiva.
            </p>
          </div>
          <div className="col-md-6">
            <img src={img2} alt="Artículo de Electrum" height={100} className="img-fluid rounded shadow" />
            <p className="fst-italic text-muted mt-2 text-center">
              Queja elevada ante la OIT, por violación del derecho de negociación colectiva.
            </p>
          </div>
        </div>
      </section>

      {/* Efecto máquina de escribir */}
      <section className="container  pb-5">

        <div className='row'>

          <div className='col-lg-7 col-md-6 col-sm-12 texto-final-cc'>
            <div>
              <h2 className="mb-4 fw-bold lineBorderTitle">
                No a la flexibilización laboral
              </h2>
            </div>
            <ul>
              <li>Desde 2018, Luz y Fuerza de Córdoba viene luchando por el pleno respeto del Convenio Colectivo de Trabajo 165/75.</li>
              <li>Amparado por la ley 14.250 de Convenciones Colectivas, mantiene la ultraactividad.</li>
              <li>La modificación parcial de nuestro Convenio, aprobada por la Legislatura de Córdoba, es arbitraria e ilegal, en tanto la Unicameral no tiene autoridad para incidir en la autonomía colectiva, establecida en la legislación nacional e internacional.</li>
            </ul>

          </div>
          <div className='col-lg-5 col-md-6 col-sm-12 d-flex flex-column align-items-center'>
            <img src={logoSi} alt="Artículo de Electrum"  className="img-fluid rounded shadow" />

          </div>
        </div>
      </section>




    </>
  );
}

export default ConvenioColectivo;
