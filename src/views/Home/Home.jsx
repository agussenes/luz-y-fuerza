

import React from 'react'
import HeroSwiperH2 from '../../components/Home/home2/hero/HeroSwiperH2';

// components 
import BeneficiosSectionH2 from '../../components/Home/home2/BeneficiosSectionH2';
import ActividadesBannersSW from '../../components/Home/propuestas/ActividadesBannersSW';
import OrganizacionSectionH2 from '../../components/Home/home2/OrganizacionSectionH2';
import LuchaSectionH2 from '../../components/Home/home2/LuchaSectionH2';
import BannerElectrumh2 from '../../components/Home/home2/bannerElectrum/BannerElectrumh2';

// import imagenes 
import imgPortada1 from '../../assets/images/home/swiperHeroHome/imgSliderHome1.webp';
import imgPortada2 from '../../assets/images/home/swiperHeroHome/imgSliderHome2.webp';
import imgPortada3 from '../../assets/images/home/swiperHeroHome/imgSliderHome3.webp';
import imgPortada4 from '../../assets/images/home/swiperHeroHome/imgSliderHome4.webp';
import imgPortada5 from '../../assets/images/home/swiperHeroHome/imgSliderHome5.webp';


function HomeSecund() {

  const slides = [
    { img: imgPortada1, imgMobile: {}, titulo: 'Luz y Fuerza Córdoba', bajada: 'Más de 80 años defendiendo a los trabajadores del servicio eléctrico de Córdoba.', boton: 'El Sindicato', link: '/quienes-somos' },
    { img: imgPortada2, titulo: 'Beneficios para nuestros afiliados y sus familias', bajada: 'Actividades recreativas, descuentos en turismo, capacitaciones y mucho más.', boton: 'Conocé más', link: '/propuestas-de-servicios' },
    { img: imgPortada3, titulo: 'Luchamos por una EPEC de los cordobeses', bajada: 'Somos un gremio en pie de lucha por una EPEC estatal, democrática e integrada.', boton: 'Mirá nuestra lucha', link: '/nuestra-lucha' },
    { img: imgPortada4, titulo: 'Eléctrum: nuestro histórico diario', bajada: 'Desde 1953 informando sobre la vida sindical, nuestras luchas y Córdoba.', boton: 'Eléctrum Digital', link: 'https://luzyfuerzacordobaelectrum.com.ar/electrum-digital/' },
    { img: imgPortada5, titulo: 'Novedades', bajada: 'Todas las noticias del sector e información útil para el afiliado', boton: 'Mirá las noticias', link: 'https://luzyfuerzacordobaelectrum.com.ar/category/noticias/' },
  ];

  return (
    <>
      <HeroSwiperH2 slides={slides} />;
      <div className="d-flex justify-content-center pb-0 mb-0 pt-2">
        <h2 className="lineBorderTitle2 ">Nuestras propuestas para vos</h2>
      </div>
      <BeneficiosSectionH2 />
      <ActividadesBannersSW />
      <OrganizacionSectionH2 />
      <LuchaSectionH2 />
      <BannerElectrumh2 />
    </>
  )
}

export default HomeSecund;