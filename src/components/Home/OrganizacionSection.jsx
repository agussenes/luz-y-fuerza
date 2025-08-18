import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function OrganizacionSection() {
    return (
        <>
            <section className="modulo-cartas my-4">
                <Container >
                    <h2 className="lineBorderTitle my-4 mb-5 ">Nuestra Organización</h2>
                    <Row className='d-flex justify-content-center'>
                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="card-beneficios h-100 shadow-sm text-center p-4">
                                <i className="bi bi-person-lines-fill display-5  SizeIcon"></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Convenio</h5>
                                <p>Información útil para el nuevo afiliado y beneficios disponibles.</p>
                                <Link to="/convenio-colectivo" className="px-4 mt-3 estiloBoton py-1">Ver más</Link>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="card-beneficios h-100 shadow-sm text-center p-4">
                                <i className="bi bi-building display-5  SizeIcon"></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Epec no es anonima</h5>
                                <p className='mb-4'>EPEC Estatal e Integrada</p>
                                <Link to="/defendamos-epec" className="px-4 estiloBoton py-1">Ver más</Link>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="mb-4">
                            <div className="card-beneficios h-100 shadow-sm text-center p-4">
                                <i className="bi bi-flag-fill display-5  SizeIcon"></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Nuestra historia</h5>
                                <p>Enterate de las principales acciones gremiales y sindicales.</p>
                                <Link to="/nuestra-lucha" className="px-4 mt-3 estiloBoton py-1">Ver más</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OrganizacionSection