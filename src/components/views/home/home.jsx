import SEO from '../../../seo/SEO';
import BannerPortadas from '../../reutilizables/bannerPortadas/BannerPortadas';
import HomeCard from './HomeCard'; // el nuevo componente

import imgPortada from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';

function Home() {
  return (
    <>
      <SEO
        title="Inicio - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/home"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      {/* Portada */}
      <BannerPortadas imagen={imgPortada} title="Bienvenido/a a Luz y Fuerza" />

      {/* Intro */}
      <section className="home-intro py-5 bg-light text-center animate__animated animate__fadeIn">
        <div className="container">
          <h1 className="display-5">Bienvenidos a Luz y Fuerza Córdoba</h1>
          <p className="lead">Defendiendo los derechos de los trabajadores de la energía desde siempre.</p>
        </div>
      </section>

      {/* Enlaces rápidos */}
      <section className="home-links py-5 animate__animated animate__fadeInUp">
        <div className="container">
          <div className="row g-4 justify-content-center text-center">
            <HomeCard to="/quienes-somos" title="¿Quiénes somos?" icon="people-fill" />
            <HomeCard to="/beneficios" title="Beneficios para afiliados" icon="heart-fill" />
            <HomeCard to="/novedades" title="Novedades" icon="newspaper" />
            <HomeCard to="/nuestra-lucha" title="Nuestra lucha" icon="megaphone-fill" />
          </div>
        </div>
      </section>

      {/* Banner a sitio de prensa */}
      <section className="home-periodismo bg-dark text-white py-5 animate__animated animate__fadeInUp">
        <div className="container text-center">
          <h2 className="mb-3">Visitá nuestro portal periodístico</h2>
          <p className="lead">Noticias, entrevistas y publicaciones de la Secretaría de Prensa y Difusión.</p>
          <a
            href="https://periodismo.luzyfuerzacordoba.org.ar"
            className="btn btn-outline-light mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir al portal de periodismo
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
