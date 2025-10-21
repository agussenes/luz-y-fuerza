import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './BeneficiosSection.css'

import imgBeneEdu from '../../../assets/images/beneficios/imgEducativo.webp';
import imgBeneJudi from '../../../assets/images/beneficios/cardJudicialBene.webp';
import imgTuristico from '../../../assets/images/beneficios/imgTuristico.webp';
import imgObraSocial from '../../../assets/images/beneficios/obraSocial.webp'
import imgClub from '../../../assets/images/beneficios/imgClub.webp';
import imgCultura from '../../../assets/images/beneficios/imgScultura.webp'

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
                                <ul className="lista-ticks flex-grow-1 m-0 mt-3">
                                    <li>
                                       Complejos Turísticos en Mina Clavero y Cosquín.
                                    </li>
                                    <li>
                                       Pensión completa para afiliados y familia.
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
                                <ul className="lista-ticks flex-grow-1  m-0 mt-3">
                                    <li>
                                        Becas: Hijos de afiliados en secundario, terciario o universitario. 
                                    </li>
                                    <li>
                                        Útiles escolares: Kit para escuela primaria y  descuentos para la secundaria.
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
                                <ul className="lista-ticks flex-grow-1  m-0 mt-3">
                                    <li>
                                        Asesoramiento previsional y jurídico: Inicio de trámite jubilatorio y consultas generales.
                                    </li>
                                    <li>
                                        Vivienda: Asistencia para edificación/refacción.
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="/propuesta-de-servicios-juridicos-y-de-asesoramiento" className="px-4 estiloBotonH2">Ver más</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                   
                    <Row className="d-flex g-4 justify-content-center mt-4 contenedorCardsPS">
                        {/* cultura */}
                        <Col lg={4} md={6} sm={12}>
                            <div className="card shadow p-3">
                                <div className="img-wrap position-relative">
                                    <img
                                        src={imgCultura}
                                        alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios"
                                        className="img-fluid rounded"
                                    />
                                    <h4 className="titulo-overlay fw-bold text-center">
                                        Cultura
                                    </h4>
                                </div>

                                <hr className="p-0 mt-4 mb-0" />
                                <ul className="lista-ticks flex-grow-1  m-0 mt-3">
                                    <li>
                                        Centro de documentación histórica del Sindicato.
                                    </li>
                                    <li>
                                        Acceso a eventos artísticos y talleres culturales. 
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
                                <ul className="lista-ticks flex-grow-1  m-0 mt-3">
                                    <li>
                                       Centro Médico en la ciudad de Córdoba.
                                    </li>
                                    <li>
                                        Más de 100 prestadores de diferentes especialidades.
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
                                <ul className="lista-ticks flex-grow-1  m-0 mt-3">
                                    <li>
                                        Campo de Deportes Guiñazú 3: Canchas, pileta, quinchos y asadores. 
                                    </li>
                                    <li>
                                        Temporada de pileta con tarifa diferencial
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
