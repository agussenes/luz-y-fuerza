// AsambleaGeneral.jsx
import { Container, Col, Row, Accordion } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './AsambleaGeneral.css';


// import de imagenes 
import slide1 from '../../../assets/images/vidaInstitucional/AsambleaGeneral/img1.jpg';
import slide2 from '../../../assets/images/vidaInstitucional/AsambleaGeneral/img2.jpg';


function AsambleaGeneral() {
    return (
        <>


            {/* Sección principal */}
            <section className="asamblea-seccion py-5">
                <Container>
                    <Row>

                        <Col lg={7}>
                            <p className="asamblea-subtitulo text-info fw-bold">SINDICATO DE LUZ Y FUERZA DE CÓRDOBA</p>
                            <h2 className="lineBorderTitle fw-bold mb-3"> Asamblea general</h2>
                            <p className="asamblea-texto">
                                La Asamblea General reúne a todos los afiliados, que deliberan y deciden por voto el curso acción de la organización gremial. En ella reside el poder supremo del sindicato.
                            </p>
                            <p className="asamblea-texto">
                                Las Asambleas pueden ser Ordinarias o Extraordinarias
                            </p>
                        </Col>
                        <Col lg={5} className='mb-2'>
                            <Swiper
                                className="asamblea-swiper"
                                modules={[Autoplay, Pagination, Navigation]}
                                loop={true}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                navigation={true}
                            >
                                <SwiperSlide>
                                    <img src={slide1} alt="Asamblea 1" className="img-fluid rounded" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slide2} alt="Asamblea 2" className="img-fluid rounded" />
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                        <Col lg={6} >
                            <Accordion >

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h4 className='fw-bold'>Asamblea General Ordinaria</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="asamblea-texto mb-3">
                                            Sesiona una vez por año, en el mes de septiembre, y tiene por
                                            objeto considerar el balance contable y el cuadro de pérdidas y
                                            ganancias. Asimismo, considera anualmente el informe de la
                                            Comisión Revisora de Cuentas y cada tres años la Memoria,
                                            Balance e inventario.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col lg={6}>
                            <Accordion  >

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h4 className='fw-bold'>Asamblea General Extraordinaria</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="asamblea-texto">
                                            La Asamblea General Extraordinaria será convocada por el Consejo
                                            Directivo cada vez que lo requiera, corresponda y considere
                                            necesario en función de la necesidad de la organización gremial.
                                            Cuando lo solicite el Cuerpo general de Delegados.
                                        </p>
                                        <p className="asamblea-texto">
                                            La Asamblea General Extraordinaria, presidida por el Secretario
                                            General y coordinada por la Secretaría de Actas, considera, debate
                                            y resuelve los asuntos por los cuales ha sido convocada la
                                            Asamblea. El orden del día será confeccionado por el Consejo
                                            Directivo. Toma las decisiones respecto de los planes de lucha y
                                            especialmente tiene la responsabilidad de decidir medidas de
                                            fuerza o acción directa.
                                        </p>
                                        <p className="asamblea-texto">
                                            Cada 4 años convoca a elecciones en el mes de octubre para
                                            renovación de Consejo Directivo, Comisión Revisora de Cuentas,
                                            delegados federativos y el Tribunal Paritario.
                                        </p>
                                        <p className="asamblea-texto mb-0">
                                            Considera y aprueba los proyectos de Reglamentos internos emanados
                                            del Consejo, así como la modificación de los estatutos, las actas
                                            ad referéndum, y los anteproyectos de Convenciones Colectivas de
                                            trabajo.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>                            
                        </Col>
                    </Row>





                </Container>
            </section>
        </>
    );
}

export default AsambleaGeneral;
