import React from 'react'
import CountUp from 'react-countup';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// imagenes 
import fondoLucha from '../../assets/images/home/bg-counter.jpg';
import imgCounter from '../../assets/images/home/img-counter.jpg';

function LuchaSection() {
    return (
        <>
            <section
                className="modulo-lucha  text-white py-5"
                style={{
                    backgroundImage: `url(${fondoLucha})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="py-5">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <p className="text-info fw-bold mb-2">LUZ Y FUERZA CÓRDOBA</p>
                                <h2 className="mb-4">Defendiendo un Sindicato participativo y plural en permanente transformación.</h2>

                                <Link to="/nuestra-lucha" className="counter-box text-decoration-none">
                                    <div className="d-inline-flex align-items-center gap-3 px-4 py-3 rounded shadow-sm bg-white bg-opacity-10 border border-info backdrop-blur">
                                        <i className="bi bi-hourglass-split text-info fs-2"></i>
                                        <span className="fs-1 fw-bold text-info">
                                            <CountUp end={1944} duration={3} separator='' />
                                        </span>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={6} className='d-flex justify-content-center'>
                                <img src={imgCounter} alt="Historia de lucha" className=" my-4 rounded shadow" loading='lazy' height={400} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default LuchaSection