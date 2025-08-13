import React from 'react'
import SEO from '../../seo/SEO';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';


// imagenes 
import portadaImg from '../../assets/images/vidaInstitucional/bannerPortada.jpg';


function Actividades() {
  return (
    <>
      <SEO
        title="Actividades - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="http://localhost:5173/contacto"
        image="https://tusitio.com/img/home-og-image.jpg"
      />
      <BannerPortadas imagen={portadaImg} title="Actividades" />

    </>
  )
}

export default Actividades