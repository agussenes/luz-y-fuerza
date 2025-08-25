import React from 'react'
// import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// imagenes 
import fondoLucha from '../../../assets/images/home/nuestraLuchaBanner.webp';
// import imgCounter from '../../assets/images/home/img-counter.jpg';

function LuchaSection() {
    return (
        <>
            <section
                className="modulo-lucha  text-white py-5"
                style={{
                    backgroundImage: `linear-gradient(
                    rgba(0,0,0,0.5),     /* filtro oscuro arriba */
                    rgba(0,0,0,0.5)      /* filtro oscuro abajo */
                    ), url(${fondoLucha})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="py-5">
                    <Container>
                        <Row className="align-items-center">
                            <Col >
                                <h2 className="mb-4 display-4 text-center"> <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Desde 1944</span>, Defendiendo un Sindicato participativo y plural en permanente transformación.</h2>
                                <div className="d-flex justify-content-center gap-2">
                                    <Link className='estiloBotonClaroH2 px-4' to={'/nuestra-lucha'} style={{ fontSize: '1.6rem' }}>Nuestra lucha</Link>

                                </div>
                            </Col>
                            {/* <Col md={4} className='d-flex justify-content-center'>
                                <div className="d-flex flex-column">
                                    <h3 className='fw-bold'>Luchando desde</h3>
                                    <Link to="/nuestra-lucha" className="counter-box text-decoration-none">

                                        <div className="d-inline-flex align-items-center gap-3 px-4 py-3 rounded shadow-sm bg-white bg-opacity-10 border border-info backdrop-blur">
                                            <i className="bi bi-hourglass-split text-info fs-2"></i>
                                            <span className="fs-1 fw-bold text-info">
                                                <CountUp end={1944} duration={3} separator='' />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Col> */}
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default LuchaSection