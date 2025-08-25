import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import imagenes 
import imgBeneEdu from '../../../assets/images/beneficios/imgCardBeneficioEducacion.webp'
import imgBeneJudi from '../../../assets/images/beneficios/cardJudicialBene.webp'
import imgTuristico from '../../../assets/images/home/swipperBeneficios/imgB5.jpeg';
import imgObraSocial from '../../../assets/images/beneficios/foto-edificio.jpg'

// css 
import './PropuestasServicios.css';

function PropuestasServicios() {


    return (
        <>
            <section className="container-fluid contenedorServiciosP">
                <Container>

                    <Row>
                        <Col sm={12} md={6} className='py-4 px-4'>
                            <div className="">
                                <img src={imgTuristico} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='' style={{ height: 'auto', width: '100%' }} />
                            </div>
                            <h4 className="fw-bold  pt-4 ">Turísticos</h4>
                            <hr />
                            <ul className="lista-ticks">
                                <li>
                                    <span className="titleLists">Complejos Turísticos </span>
                                    <span className="desc">Mina Clavero y Cosquín. Pensión completa para afiliados y familia.</span>
                                </li>
                                <li>
                                    <span className="titleLists">Campo de Deportes Guiñazú </span>
                                    <span className="desc">3 canchas, pileta, quinchos y asadores. Temporada de pileta con tarifa diferencial.</span>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-start">
                                <Link to="/beneficios-turisticos" className="estiloBoton px-4 mt-3 ">Ver más</Link>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className='py-4 px-4'>
                            <div className="">
                                <img src={imgBeneEdu} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='' style={{ height: 'auto', width: '100%' }} />
                            </div>
                            <h4 className="fw-bold pt-4">Educativos</h4>
                            <hr />
                            <ul className="lista-ticks">
                                <li>
                                    <span className="titleLists">Centro de Actividades “Lorenzo Racero” </span>
                                    <span className="desc">Talleres para jubilados/pensionados: celular, ritmo, folklore.</span>
                                </li>
                                <li>
                                    <span className="titleLists">Becas </span>
                                    <span className="desc">Hijos de afiliados en secundario, terciario o universitario.</span>
                                </li>
                                <li>
                                    <span className="titleLists">Útiles escolares </span>
                                    <span className="desc">Kit para primaria y vouchers/descuentos para secundaria.</span>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-start ">
                                <Link to="/beneficios-educativos" className="px-4  estiloBoton">Ver más</Link>

                            </div>
                        </Col>
                        <Col sm={12} md={6} className='py-4 px-4'>
                            <div className="">
                                <img src={imgBeneJudi} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='' style={{ height: 'auto', width: '100%' }} />
                            </div>
                            <h4 className="fw-bold pt-4">Asesoramiento </h4>
                            <hr />
                            <ul className="lista-ticks">
                                <li>
                                    <span className="titleLists">Asesoramiento previsional y jurídico </span>
                                    <span className="desc">Inicio de trámite jubilatorio, consultas generales y continuidad de afiliación.</span>
                                </li>
                                <li>
                                    <span className="titleLists">Vivienda </span>
                                    <span className="desc">Asistencia para edificación/refacción y atención prioritaria ante siniestros estructurales.</span>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-start ">
                                <Link to="/beneficios-juridicos-y-de-asesoramiento" className="px-4  estiloBoton">Ver más</Link>

                            </div>
                        </Col>
                        <Col sm={12} md={6} className='py-4 px-4'>
                            <div className="">
                                <img src={imgObraSocial} alt="imagen de complejos turisticos luz y fuerza par asus afiliados - beneficios" className='' style={{ height: 'auto', width: '100%', maxHeight: '345px', objectFit: 'cover' }} />
                            </div>
                            <h4 className="fw-bold pt-4">Obra social</h4>
                            <hr />
                            <ul className="lista-ticks">
                                <li>
                                    <span className="titleLists">Unidos por el cuidado y la salud de todos nuestros afiliados </span>
                                    <span className="desc">OSPLYFC es una organización de salud perteneciente a los Sindicatos de Luz y Fuerza de Córdoba, Sindicato Regional de Luz y Fuerza y Sindicato de Luz y Fuerza de Río Cuarto.
                                    </span>
                                </li>
                               
                            </ul>
                            <div className="d-flex justify-content-start ">
                                <Link to="https://osplyfc.com.ar/" className="px-4  estiloBoton">Ver más</Link>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default PropuestasServicios