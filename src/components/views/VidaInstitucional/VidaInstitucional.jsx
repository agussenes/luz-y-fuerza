import SEO from '../../../seo/SEO';

import BannerPortadas from '../../reutilizables/bannerPortadas/BannerPortadas';
import ContactForm from '../../reutilizables/formularioCont/ContactForm'

// import de iamgenes 

import imgPortada from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';


function VidaInstitucional() {
  return (
    <>
      <SEO
        title="Vida Institucional - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <BannerPortadas imagen={imgPortada} title="Vida institucional" />

      <section className="home">
        <div className="container text-center py-5">
          <h1 className="display-4">Autoridades</h1>
          <p className="lead">
            Defendiendo los derechos de los trabajadores de la energía desde siempre.
          </p>
        </div>
      </section>

      <ContactForm endpoint="https://tu-sitio.com/contacto.php" />

    </>
  );
}

export default VidaInstitucional;
