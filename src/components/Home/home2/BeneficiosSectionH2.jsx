import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './BeneficiosSection.css'

import imgBeneEdu from '../../../assets/images/beneficios/imgEducativo.webp';
import imgBeneJudi from '../../../assets/images/beneficios/cardJudicialBene.webp';
import imgTuristico from '../../../assets/images/beneficios/imgTuristico.webp';
import imgObraSocial from '../../../assets/images/beneficios/foto-edificio.jpg'
import imgClub from '../../../assets/images/beneficios/imgClub.webp';



function BeneficiosSection() {
    return (
        <>
            {/* Módulo beneficios */}
            <section className="modulo-40-40-40 bg-beneficios">
                <Container >
                    <Row className="d-flex justify-content-center mt-2">
                        <div className="d-flex justify-content-center">
                            <h2 className="lineBorderTitle2 ">Propuestas de servicios</h2>
                        </div>
                    </Row>
                    <Row className="d-flex g-4 justify-content-center mt-4 contenedorCardsPS">
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-color-principal text-light rounded mb-3">Turísticos</h4>

                                <div className="text-center">
                                    <img src={imgTuristico} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />
                                </div>
                                <hr />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        <span className="title">Complejos Turísticos:
                                            Mina Clavero y Cosquín. Pensión completa para afiliados y familia.</span>

                                    </li>

                                </ul>
                                <div className="d-flex justify-content-center mt-">
                                    <Link to="/propuestas-de-servicios-turisticos" className="estiloBotonH2 px-4 ">Ver más</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-color-principal text-light rounded mb-3">Educativos</h4>

                                <div className="text-center">
                                    <img src={imgBeneEdu} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />

                                </div>
                                <hr />
                                <ul className="lista-ticks flex-grow-1">
                                    
                                    <li>
                                        <span className="title">Becas: Hijos de afiliados en secundario, terciario o universitario.</span>

                                    </li>
                                    <li>
                                        <span className="title">Útiles escolares: Kit para primaria y vouchers/descuentos para secundaria.</span>
           
                                    </li>
                              
                                </ul>
                                <div className="d-flex justify-content-center ">
                                    <Link to="/propuestas-de-servicios-educativos" className="px-4 estiloBotonH2">Ver más</Link>

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-color-principal text-light rounded mb-3">Asesoramiento</h4>

                                <div className="d-flex text-center">
                                    <img src={imgBeneJudi} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />

                                </div>
                                <hr />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        <span className="title">Asesoramiento previsional y jurídico: Inicio de trámite jubilatorio, consultas generales y continuidad de afiliación.</span>

                                    </li>
                                    <li>
                                        <span className="title">Vivienda: Asistencia para edificación/refacción y atención prioritaria ante siniestros estructurales.</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/propuestas-de-servicios-juridicos-y-de-asesoramiento" className="px-4 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex g-4 justify-content-center mt-4 contenedorCardsPS">
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-color-principal text-light rounded mb-3">Acción social y deporte</h4>

                                <div className="d-flex text-center">
                                    <img src={imgClub} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />

                                </div>
                                <hr />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        <span className="title"> Campo de Deportes: Guiñazú 3: canchas, pileta, quinchos y asadores. Temporada de pileta con tarifa diferencial.</span>

                                    </li>

                                </ul>
                                <div className="d-flex justify-content-center ">
                                    <Link to="/propuestas-de-servicios" className="px-4 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <h4 className="fw-bold text-center border bg-color-principal text-light rounded mb-3">Obra social</h4>

                                <div className="d-flex text-center">
                                    <img src={imgObraSocial} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='img-fluid rounded' />

                                </div>
                                <hr />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        <span className="title">aca va un subtitulo</span>

                                    </li>

                                </ul>
                                <div className="d-flex justify-content-center ">
                                    <Link to="https://osplyfc.com.ar/" className="px-4 estiloBotonH2">Ver más</Link>
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