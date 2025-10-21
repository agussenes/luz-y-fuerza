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
            <section className="modulo-40-40-40 bg-beneficios mb-5">
                <Container>                 

                    {/* Fila 1 */}
                    <Row className="d-flex g-4 justify-content-center mt-2 contenedorCardsPS">
                        {/* Turísticos */}
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <div className="img-wrap position-relative">
                                    <img
                                        src={imgTuristico}
                                        alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios"
                                        className="img-fluid rounded"
                                    />
                                    <h4 className="titulo-overlay fw-bold text-center">
                                        Turismo
                                    </h4>
                                </div>

                                <hr className="p-0 mt-4 mb-0" />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        Complejos Turísticos: Mina Clavero y Cosquín. Pensión completa para afiliados y familia.
                                    </li>
                                    <li>
                                        Complejos Turísticos: Mina Clavero y Cosquín. Pensión completa para afiliados y familia.
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/propuesta-de-servicios-turisticos" className="estiloBotonH2 px-4">Ver más</Link>
                                </div>
                            </div>
                        </Col>

                        {/* Educativos */}
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <div className="img-wrap position-relative">
                                    <img
                                        src={imgBeneEdu}
                                        alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios"
                                        className="img-fluid rounded"
                                    />
                                    <h4 className="titulo-overlay fw-bold text-center">
                                        Educacion
                                    </h4>
                                </div>

                                <hr className="p-0 mt-4 mb-0" />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        Becas: Hijos de afiliados en secundario, terciario o universitario.
                                    </li>
                                    <li>
                                        Útiles escolares: Kit para primaria y vouchers/descuentos para secundaria.
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/propuesta-de-servicios-educativos" className="px-4 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>

                        {/* Asesoramiento */}
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <div className="img-wrap position-relative">
                                    <img
                                        src={imgBeneJudi}
                                        alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios"
                                        className="img-fluid rounded"
                                    />
                                    <h4 className="titulo-overlay fw-bold text-center">
                                        Asesoramiento
                                    </h4>
                                </div>

                                <hr className="p-0 mt-4 mb-0" />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        Asesoramiento previsional y jurídico: Inicio de trámite jubilatorio, consultas generales y continuidad de afiliación.
                                    </li>
                                    <li>
                                        Vivienda: Asistencia para edificación/refacción y atención prioritaria ante siniestros estructurales.
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/propuestas-de-servicios-juridicos-y-de-asesoramiento" className="px-4 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Fila 2 */}
                    <Row className="d-flex g-4 justify-content-center mt-4 contenedorCardsPS">
                        {/* Acción social y deporte */}
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <div className="img-wrap position-relative">
                                    <img
                                        src={imgClub}
                                        alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios"
                                        className="img-fluid rounded"
                                    />
                                    <h4 className="titulo-overlay fw-bold text-center">
                                        Cultura
                                    </h4>
                                </div>

                                <hr className="p-0 mt-4 mb-0" />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        Campo de Deportes: Guiñazú 3: canchas, pileta, quinchos y asadores. Temporada de pileta con tarifa diferencial.
                                    </li>
                                    <li>
                                        Campo de Deportes:
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/propuesta-de-servicios-cultura" className="px-4 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>

                        {/* Obra social */}
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <div className="img-wrap position-relative">
                                    <img
                                        src={imgObraSocial}
                                        alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios"
                                        className="img-fluid rounded"
                                    />
                                    <h4 className="titulo-overlay fw-bold text-center">
                                        Obra social
                                    </h4>
                                </div>

                                <hr className="p-0 mt-4 mb-0" />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        Campo de Deportes: Guiñazú 3: canchas, pileta, quinchos y asadores. Temporada de pileta con tarifa diferencial.
                                    </li>
                                    <li>
                                        Campo de Deportes:
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <a href="https://osplyfc.com.ar/" target="_blank" rel="noreferrer" className="px-4 estiloBotonH2">Ver más</a>
                                </div>
                            </div>
                        </Col>

                        {/* Acción social y deporte (ejemplo adicional que ya tenías) */}
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <div className="img-wrap position-relative">
                                    <img
                                        src={imgClub}
                                        alt="imagen de complejos turisticos luz y fuerza..."
                                        className="img-fluid rounded"
                                    />
                                    <h4 className="titulo-overlay fw-bold text-center">
                                        Acción social y deporte
                                    </h4>
                                </div>

                                <hr className="p-0 mt-4 mb-0" />
                                <ul className="lista-ticks flex-grow-1">
                                    <li>
                                        Campo de Deportes: Guiñazú 3: canchas, pileta, quinchos y asadores. Temporada de pileta con tarifa diferencial.
                                    </li>
                                    <li>
                                        Campo de Deportes: Guiñazú 3…
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/propuesta-de-servicios-accion-social-y-deporte" className="px-4 estiloBotonH2">Ver más</Link>
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
