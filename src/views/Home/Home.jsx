// import SEO from '../../seo/SEO';
// import HeroSwiper from '../../components/reutilizables/HeroSwiper/HeroSwiper';
// import HomeModules from './HomeModules';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Card } from "react-bootstrap";

// img hero swiper home 
// import imgPortada1 from '../../assets/images/home/swiperHeroHome/imgSliderHome1.jpg';
// import imgPortada2 from '../../assets/images/home/swiperHeroHome/imgSliderHome2.jpg';
// import imgPortada3 from '../../assets/images/home/swiperHeroHome/imgSliderHome3.jpg';
// import imgPortada4 from '../../assets/images/home/swiperHeroHome/imgSliderHome4.webp';
// import imgPortada5 from '../../assets/images/home/swiperHeroHome/imgSliderHome5.webp';



function Home() {

  // array slides portada
  // const slides = [
  //   { img: imgPortada1, imgMobile: {}, titulo: 'Sindicato Luz y Fuerza', bajada: 'Más de 80 años defendiendo a los trabajadores del servicio eléctrico de Córdoba.', boton: 'El Sindicato', link: '/quienes-somos' },
  //   { img: imgPortada2, titulo: 'Beneficios para nuestros afiliados y sus familias', bajada: 'Actividades recreativas, descuentos en turismo, capacitaciones y mucho más.', boton: 'Conocé los beneficios', link: '/' },
  //   { img: imgPortada3, titulo: 'Luchamos por una EPEC de los cordobeses', bajada: 'Somos un gremio en pie de lucha por una EPEC estatal, democrática e integrada.', boton: 'Nuestra Lucha', link: '/nuestra-lucha' },
  //   { img: imgPortada4, titulo: 'Electrum: Nuestro histórico diario', bajada: 'Desde 1953 informando sobre la vida sindical y nuestras luchas', boton: 'Ver Eléctrum Digital', link: 'https://luzyfuerzacordobaelectrum.com.ar/electrum-digital/' },
  //   { img: imgPortada5, titulo: 'Novedades', bajada: 'Todas las noticias del sector e información útil para el afiliado', boton: 'Mirá las noticias', link: 'https://luzyfuerzacordobaelectrum.com.ar/category/noticias/' },
  // ];

  return (
    <>
      {/* <SEO
        title="Inicio - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/home"
        image="https://tusitio.com/img/home-og-image.jpg"
      /> */}

      {/* Portada */}
      {/* <HeroSwiper slides={slides} />; */}

      {/* <section className='contenedorHome'>
        <HomeModules />
      </section> */}

      <Container>
        <h1 className='fw-bold text-uppercase text-center mt-4 mb-4 border-bottom'>Propuesta de Homes</h1>
        <Row className='d-flex justify-content-center ' style={{ height: "70vh" }}>
          <Col md={12} lg={6} className='text-center  mb-4'>
            <div className="shadow py-4 border">
              <h2 className='fw-semibold text-uppercase border-bottom'> Propuesta home 1</h2>
              <p className="lead">Version bordes cuadrados</p>
              <Link to='/home-1' className='estiloBoton'>Ir al home 1</Link>
            </div>
          </Col>
          <Col md={12} lg={6} className='text-center mb-4'>
            <div className="shadow py-4 border">
              <h2 className='fw-semibold text-uppercase border-bottom'> Propuesta home 2</h2>
              <p className="lead">Version bordes redondeados</p>

              <Link to='/home-2' className='estiloBoton'>Ir al home 2</Link>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Home;
