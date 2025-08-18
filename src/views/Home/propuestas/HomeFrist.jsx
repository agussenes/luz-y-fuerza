import React from 'react'
import HeroSwiper from '../../../components/reutilizables/HeroSwiper/HeroSwiper';

// components 
import IntroSection from '../../../components/Home/IntroSection';
import BeneficiosSection from '../../../components/Home/BeneficiosSection';
import ActividadesSection from '../../../components/Home/ActividadesSection';
import OrganizacionSection from '../../../components/Home/OrganizacionSection';
import LuchaSection from '../../../components/Home/LuchaSection';
import NoticiasSection from '../../../components/Home/NoticiasSection';

// import imagenes 
import imgPortada1 from '../../../assets/images/home/swiperHeroHome/imgSliderHome1.jpg';
import imgPortada2 from '../../../assets/images/home/swiperHeroHome/imgSliderHome2.jpg';
import imgPortada3 from '../../../assets/images/home/swiperHeroHome/imgSliderHome3.jpg';
import imgPortada4 from '../../../assets/images/home/swiperHeroHome/imgSliderHome4.webp';
import imgPortada5 from '../../../assets/images/home/swiperHeroHome/imgSliderHome5.webp';


function HomeFrist() {

    const slides = [
        { img: imgPortada1, imgMobile: {}, titulo: 'Sindicato Luz y Fuerza', bajada: 'Más de 80 años defendiendo a los trabajadores del servicio eléctrico de Córdoba.', boton: 'El Sindicato', link: '/quienes-somos' },
        { img: imgPortada2, titulo: 'Beneficios para nuestros afiliados y sus familias', bajada: 'Actividades recreativas, descuentos en turismo, capacitaciones y mucho más.', boton: 'Conocé los beneficios', link: '/' },
        { img: imgPortada3, titulo: 'Luchamos por una EPEC de los cordobeses', bajada: 'Somos un gremio en pie de lucha por una EPEC estatal, democrática e integrada.', boton: 'Nuestra Lucha', link: '/nuestra-lucha' },
        { img: imgPortada4, titulo: 'Electrum: Nuestro histórico diario', bajada: 'Desde 1953 informando sobre la vida sindical y nuestras luchas', boton: 'Ver Eléctrum Digital', link: 'https://luzyfuerzacordobaelectrum.com.ar/electrum-digital/' },
        { img: imgPortada5, titulo: 'Novedades', bajada: 'Todas las noticias del sector e información útil para el afiliado', boton: 'Mirá las noticias', link: 'https://luzyfuerzacordobaelectrum.com.ar/category/noticias/' },
    ];

    return (
        <>
            <HeroSwiper slides={slides} />;
            <IntroSection />
            <BeneficiosSection />
            < ActividadesSection />
            <OrganizacionSection />
            <LuchaSection />
            < NoticiasSection />
        </>
    )
}

export default HomeFrist