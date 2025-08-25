import React from 'react'
import {Container} from 'react-bootstrap';
import './BannerElectrum.css';

function BannerElectrum() {
    return (
        <>
            {/* Módulo 2: Banner Electrum */}
            <section className="banner-electrum container text-white text-center">
                <Container className='py-4'>
                    <h2 className="mb-3">Electrum, el periódico de Luz y Fuerza</h2>
                    <p className="mb-4">Consultá las ediciones de Electrum Digital y descargarlas desde nuestra web</p>
                    <a href="https://luzyfuerzacordobaelectrum.com.ar/electrum-digital/" className="px-4 mt-3 estiloBotonClaro py-1">Ver Electrum</a>
                </Container>
            </section>
        </>
    )
}

export default BannerElectrum