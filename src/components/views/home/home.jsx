import SEO from '../../../seo/SEO';
import HeroSwiper from '../../reutilizables/HeroSwiper/HeroSwiper';
import HomeModules from './HomeModules';

// img hero swiper home 
import imgPortada1 from '../../../assets/images/home/swiperHeroHome/imgSliderHome1.jpg';
import imgPortada2 from '../../../assets/images/home/swiperHeroHome/imgSliderHome2.jpg';
import imgPortada3 from '../../../assets/images/home/swiperHeroHome/imgSliderHome3.jpg';

function Home() {

  // array slides portada
  const slides = [
    { img: imgPortada1, titulo: 'Sindicato Luz y Fuerza', bajada: 'Más de 80 años defendiendo a los trabajadores del servicio eléctrico de Córdoba.', boton: 'El Sindicato', link: '/quienes-somos' },
    { img: imgPortada2, titulo: 'Beneficios para nuestros afiliados y sus familias', bajada: 'Actividades recreativas, descuentos en turismo, capacitaciones y mucho más.', boton: 'Conocé los beneficios', link: '/' },
    { img: imgPortada3, titulo: 'Luchamos por una EPEC de los cordobeses', bajada: 'Somos un gremio en pie de lucha por una EPEC estatal, democrática e integrada.', boton: 'Nuestra Lucha', link: '/nuestra-lucha' },
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
