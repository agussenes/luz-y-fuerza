import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// img de banner beneficio 

import imgBeneEdu from '../../../assets/images/beneficios/imgCardBeneficioEducacion.webp'
import imgBeneJudi from '../../../assets/images/beneficios/cardJudicialBene.webp'
import imgTuristico from '../../../assets/images/home/swipperBeneficios/imgB5.jpeg';
import imgObraSocial from '../../../assets/images/beneficios/foto-edificio.jpg'

function BeneficiosSection() {
    return (
        <>
            {/* Módulo beneficios */}
            <section className="modulo-40-40-40 bg-beneficios">
                <Container className='pt-4'>
                    <Row className="d-flex justify-content-center mt-4">
                        <div className="d-flex justify-content-center">
                            <h2 className="lineBorderTitle2 ">Propuestas de servicios</h2>

                        </div>

                        <Col sm={12} md={6} lg={3} className='my-4'>

                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-azul-osucro text-light rounded mb-3">Turísticos</h4>

                                <div className="text-center">
                                    <img src={imgTuristico} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />
                                </div>
                                <hr />
                                <ul className="lista-ticks">
                                    <li>
                                        <span className="title">Complejos Turísticos</span>
                                        <span className="desc">Mina Clavero y Cosquín. Pensión completa para afiliados y familia.</span>
                                    </li>
                                    <li>
                                        <span className="title">Campo de Deportes Guiñazú</span>
                                        <span className="desc">3 canchas, pileta, quinchos y asadores. Temporada de pileta con tarifa diferencial.</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center mt-">
                                    <Link to="/beneficios-turisticos" className="estiloBotonH2 px-4 mt-3 ">Ver más</Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='my-4'>

                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-azul-osucro text-light rounded mb-3">Educativos</h4>

                                <div className="text-center">
                                    <img src={imgBeneEdu} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />

                                </div>
                                <hr />
                                <ul className="lista-ticks">
                                    {/* <li>
                                        <span className="title">Centro de Actividades “Lorenzo Racero”</span>
                                        <span className="desc">Talleres para jubilados/pensionados: celular, ritmo, folklore.</span>
                                    </li> */}
                                    <li>
                                        <span className="title">Becas</span>
                                        <span className="desc">Hijos de afiliados en secundario, terciario o universitario.</span>
                                    </li>
                                    <li>
                                        <span className="title">Útiles escolares</span>
                                        <span className="desc">Kit para primaria y vouchers/descuentos para secundaria.</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center mt-5">
                                    <Link to="/beneficios-educativos" className="px-4 mt-3 estiloBotonH2">Ver más</Link>

                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='my-4'>


                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-azul-osucro text-light rounded mb-3">Asesoramiento</h4>

                                <div className="d-flex text-center">
                                    <img src={imgBeneJudi} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />

                                </div>
                                <hr />
                                <ul className="lista-ticks">
                                    <li>
                                        <span className="title">Asesoramiento previsional y jurídico</span>
                                        <span className="desc">Inicio de trámite jubilatorio, consultas generales y continuidad de afiliación.</span>
                                    </li>
                                    <li>
                                        <span className="title">Vivienda</span>
                                        <span className="desc">Asistencia para edificación/refacción y atención prioritaria ante siniestros estructurales.</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/beneficios-juridicos-y-de-asesoramiento" className="px-4 mt-3 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={3} className='my-4'>


                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-azul-osucro text-light rounded mb-3">Obra social</h4>

                                <div className="d-flex text-center">
                                    <img src={imgObraSocial} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />

                                </div>
                                <hr />
                                <ul className="lista-ticks">
                                    <li>
                                        <span className="title">aca va un subtitulo</span>
                                        <span className="desc">aca va un texto sobre la oibra social</span>
                                    </li>
                                    <li>
                                        <span className="title">aca va otro un subtitulo</span>
                                        <span className="desc">mas texto informativo</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center mt-5">
                                    <Link to="https://osplyfc.com.ar/" className="px-4 mt-3 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BeneficiosSection;