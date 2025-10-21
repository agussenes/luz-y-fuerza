import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './BannerElectrumh2.css';

// imagenes 
import imgBanner from '../../../../assets/images/home/electrumBn.webp';

function BannerElectrum() {
    return (
        <>


            <section className="container py-4">
                <Container className='my-4'>
                    <Row className='container '>
                        <Col sm={12} lg={7}>
                            <h2 className='lineBorderTitle2'>Electrum</h2>
                            <h4 className='lineBorderSubTitle'>El periodico de Luz y Fuerza</h4>
                            <p className="">Desde Septiembre de 1953, Electrum es el órgano oficial de prensa y comunicación de nuestro sindicato. Es uno de los <strong>pocos periódicos sindicales del país que logró continuidad y vigencia</strong>, lo que implica un gran orgullo para la comunidad lucifuercista.</p>
                            <p className=""><strong>Nuestro periódico ha salido de manera casi ininterrumpida, acompañando la vida lucifuercista</strong> y reflejando en sus páginas la historia de nuestras luchas, anhelos logros,  victorias y también momentos muy duros. </p>
                            <p className="">Con el regreso de la democracia, en 1984 recuperamos la publicación continua y actualmente contamos con una <strong>versión digital a la que se puede acceder vía web y redes sociales.</strong></p>
                        </Col>
                        <Col sm={12} lg={5} className=''>
                            <div className='d-flex justify-content-center bg-dark rounded' style={{objectFit: "contain", overflow: "hidden" }}>
                                <img src={imgBanner} alt="asdasd" height={350}  />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <a href="https://luzyfuerzacordobaelectrum.com.ar/electrum-digital/" className="px-4 mt-3 estiloBotonH2 py-1">Ver Electrum</a>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BannerElectrum