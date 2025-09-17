import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function OrganizacionSection() {
    return (
        <>
            <section className="modulo-cartas my-4">
                <Container >
                    <h2 className="lineBorderTitle2 my-4 mb-5 ">Nuestra Organización</h2>
                    <Row className='d-flex justify-content-center'>
                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="rounded shadow h-100 text-center p-4" style={{border: '1px solid #030F27'}}>
                                <i className="bi bi-person-lines-fill display-3 " style={{color: '#030F27'}}></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Convenio</h5>
                                <p>Información útil para el nuevo afiliado y beneficios disponibles.</p>
                                <Link to="/convenio-colectivo" className="px-4 mt-3 estiloBotonH2 py-1">Ver más</Link>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="rounded shadow h-100  text-center p-4" style={{border: '1px solid #030F27'}}>
                                <i className="bi bi-book display-3  SizeIcon" style={{color: '#030F27'}}></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Secretarías</h5>
                                <p className='mb-4'>Organización institucional del sindicato</p>
                                <Link to="/secretarias" className="px-4 estiloBotonH2 py-1">Ver más</Link>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="rounded shadow h-100  text-center p-4" style={{border: '1px solid #030F27'}}>
                                <i className="bi bi-flag-fill display-3  SizeIcon" style={{color: '#030F27'}}></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Nuestra historia</h5>
                                <p>Nuestra trayectoria en defensa de los trabajadores.</p>
                                <Link to="/nuestra-lucha" className="px-4 mt-3 estiloBotonH2 py-1">Ver más</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OrganizacionSection