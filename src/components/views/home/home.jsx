import SEO from '../../../seo/SEO';
import HeroSwiper from '../../reutilizables/HeroSwiper/HeroSwiper';
import HomeModules from './HomeModules';
import imgPortada from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';

function Home() {

  // array slides portada
  const slides = [
    { img: imgPortada, titulo: 'Sindicato de Luz y Fuerza de Córdoba', bajada: '" No solo lucha contra la injusticia quien la padece, sino también quien la comprende " - Agustin Tosco', boton: 'Nuestra Organización', link: '/quienes-somos' },
    { img: imgPortada, titulo: 'Electrum, el periódico de Luz y Fuerza', bajada: 'Consultá las ediciones de Electrum Digital y descargarlas en nuestra web', boton: 'Ver Electrum Digital', link: 'https://luzyfuerzacordobaelectrum.com.ar/electrum/' },
    { img: imgPortada, titulo: 'Luchamos por una EPEC de los cordobeses', bajada: 'Somos un gremio en pie de lucha por una EPEC estatal, democrática e integrada', boton: 'Nuestra Lucha', link: '/nuestra-lucha' },
  ];

  return (
    <>
      <SEO
        title="Inicio - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/home"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      {/* Portada */}
      <HeroSwiper slides={slides} />;

      <section className='contenedorHome'>
        <HomeModules />
      </section>

    </>
  );
}

export default Home;
