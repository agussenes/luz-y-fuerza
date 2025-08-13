import React from 'react'
import SEO from '../../seo/SEO';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';


// imagenes 



function Beneficios() {
    return (
        <>
            <SEO
                title="Beneficios - Luz y Fuerza Córdoba"
                description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
                url="http://localhost:5173/beneficios"
                image="https://tusitio.com/img/home-og-image.jpg"
            />
            <BannerPortadas imagen={portadaImg} title="Beneficios" />

        </>

    )
}

export default Beneficios