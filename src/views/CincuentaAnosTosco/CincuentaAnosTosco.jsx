import React from 'react'
import SEO from '../../seo/SEO';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';

import { Container, Row, Col } from 'react-bootstrap';


import './CincuentaAnosTosco.css'

// componentes UI 
import CarruselHistoria from '../../components/CincuentaanoTosco/CarruselHistoria';
import AfichesDescarga from '../../components/CincuentaanoTosco/AfichesDescarga';
import AgendaActividades from '../../components/CincuentaanoTosco/AgendaActividades';


// imagenes 
import imgUsina from '../../../public/img/identidad/logoUsina.webp'
import portadaImg from '../../assets/images/cincuentaAnAT/portada.webp';




function CincuentaAnosTosco() {

    return (
        <>
            <SEO
                title="50 años Agustin Tosco - Luz y Fuerza Córdoba"
                description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
                url="http://localhost:5173/cincuenta-años-agustin-tosco"
                image="https://tusitio.com/img/home-og-image.jpg"
            />
            <BannerPortadas imagen={portadaImg} titulo="" />


            <Container fluid className=' contenedorCustom50aniosAT m-0 py-0 my-0 p-0'>
                <div id='conoce-su-historia' className='container-fluid bloque-1-ag py-4 m-0'>
                    <CarruselHistoria />
                </div>
                <div id='descarga-tu-afiche'>
                    <AfichesDescarga />
                </div>
                <div id='todas-las-actividades' className='container-fluid bloque-1-ag py-3'>
                    <AgendaActividades />
                </div>
            </Container>
            <Container fluid className='footerAT pt-3'>
                <div className="text-center  text-light d-flex justify-content-center align-items-center styleColumMobile">
                    <p>Desarrollado por
                        <a href="https://usinacreativa.com.ar/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.2rem' }}>
                            <img
                                src={imgUsina}
                                alt="Logo Usina Creativa - Agencia de comunicación y desarrollo del sitio web del sindicato Luz y Fuerza Córdoba"
                                loading="lazy"
                                height="25"
                            />
                        </a>
                        © Sindicato de Luz y Fuerza Córdoba. 2025</p>
                </div>
            </Container>
        </>
    )
}

export default CincuentaAnosTosco