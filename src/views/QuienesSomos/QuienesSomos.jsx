import SEO from '../../seo/SEO';

import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas'


// improt imagenes 
import bannerQuiSomos from '../../assets/images/portadaProvi.webp';

function QuienesSomos() {
  return (
    <>
      <SEO
        title="Quienes somos - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <BannerPortadas imagen={bannerQuiSomos} titulo="Quienes somos" />

      <section className="quienes-section pb-2 pt-4">
        <div className="container">
          <div className="row align-items-center">
            {/* Texto */}
            <div className="col-md-12 mb-4 mb-md-0">
              <h2 className="lineBorderTitle">¿Quiénes Somos?</h2>
              <p>
                El Sindicato de Luz y Fuerza de Córdoba, asociación profesional de trabajadores con Personería Gremial y Jurídica N° 589 (26/9/1963), nuclea a los trabajadores que brindan servicios en la generación, transporte y distribución de energía eléctrica, y de todos los servicios manuales, técnicos y administrativos que presta la Empresa Provincial de Energía de Córdoba, en su zona de jurisdicción. Así mismo, nuclea y representa a los trabajadores acogidos al régimen jubilatorio que deseen continuar como afiliados y a los pensionados.
              </p>
              <p>
                Nacido el 5 de febrero de 1944, fue formado por los trabajadores del servicio eléctrico de Córdoba, en ese momento en manos extranjeras y luego estatizado el 30 de octubre de 1949.
              </p>
              <p>
                El 31 de diciembre de 1952 se crea la actual Empresa Provincial de Energía de Córdoba, siendo Luz y Fuerza de Córdoba la organización sindical que representa a sus trabajadores dentro de la jurisdicción comprendida en: Córdoba Capital, ZONA E - Localidades de La Calera, Mendiolaza, Río Ceballos, Salsipuedes, Unquillo, Villa Allende del Departamento Colón; Localidades de Malagueño y Yocsina del Departamento Santa María; y Dique Molet del Departamento Punilla. En la actualidad nuestra organización cuenta con 1678 afiliados activos y 898 pasivos.
              </p>
            </div>
          </div>
          <div>
            <p>
              Desde su fundación se convirtió en una referencia para el Movimiento Obrero Organizado, siendo protagonista del fortalecimiento de la Córdoba productiva y pujante, así como de las más importantes luchas del pueblo trabajador, como el Cordobazo. En las distintas etapas de su rica historia, Luz y Fuerza ha sostenido su política gremial basada en la defensa irrestricta de dos pilares constantes y fundamentales: EPEC estatal e integrada, con sentido social, y los derechos contemplados en nuestro Convenio Colectivo de Trabajo 165/75, un Convenio modelo, con plena vigencia gracias a la lucha de nuestro sindicato. El Sindicato de Luz y Fuerza de Córdoba es independiente de todo partido político, congregación religiosa o agrupación ideológica.
            </p>
          </div>
        </div>
      </section>

      <section className="mision-section pb-4 pt-2 bg-light">
        <div className="container">
          <h3 className="lineBorderTitle mb-4">Misión y valores</h3>
          <p>
            Defender el Convenio Colectivo de Trabajo 165/75, plenamente vigencia, o bien celebrar los convenios colectivos de trabajo teniendo como principio la progresividad, con base en la superación de los beneficios económicos y sociales ya conquistados, su ampliación, modificación o unificación en la forma más beneficiosa.
          </p>
          <p>
            Respecto a nuestra rama de actividad, tenemos como misión la continuidad del monopolio estatal en la producción, explotación, transmisión, distribución y/o comercialización de la energía eléctrica y sus servicios, y la defensa irrestricta de EPEC estatal e integrada.
          </p>
          <p>
            Bregamos por el perfeccionamiento de la legislación previsional y de seguridad social, defendiendo los derechos previsionales, el haber jubilatorio móvil, con una base mínima del 82% y el 75% para jubilados y pensionados, respectivamente.
          </p>
          <p>
            Bregamos por que el régimen impositivo no grave el salario.
          </p>
          <p>
            Bregamos por la unidad de la clase trabajadora, sosteniendo el principio de un solo sindicato por rama de actividad, principio contenido en el Modelo Sindical Argentino.
          </p>
          <p>
            En nuestra organización sindical aseguramos la efectiva vigencia de la democracia sindical y el pluralismo, y estamos comprometidos a luchar permanentemente por la vigencia plena de los derechos humanos y las libertades públicas y democráticas.
          </p>
        </div>
      </section>

    </>
  );
}

export default QuienesSomos;
