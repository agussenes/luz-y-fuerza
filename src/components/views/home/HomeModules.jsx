// HomeModules.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import './HomeModules.css';

// import de imagenes 
import presentacion from '../../../assets/images/home/presentacion.jpg';
import img1 from '../../../assets/images/home/img1.png';
import img2 from '../../../assets/images/home/img2.png';
import img3 from '../../../assets/images/home/historia.png';
import fondoLucha from '../../../assets/images/home/bg-counter.jpg';
import imgCounter from '../../../assets/images/home/img-counter.jpg'

function HomeModules() {


    // Array Noticias 
    const noticias = [
        {img: img1 , titulo: 'pepe', texto:'pepe2', alt:'a', linkBoton:'https://luzyfuerzacordobaelectrum.com.ar/category/noticias/' },
        {img: img2 , titulo: 'pepe', texto:'pepe2', alt:'a', linkBoton:'' },
        {img: img3 , titulo: 'pepe', texto:'pepe2', alt:'a', linkBoton:'' },
    ]


    return (
        <>
            {/* Módulo 1: 50/50 con lista y botón */}
            <section className="modulo-50-50 bg-white">
                <Container>
                    <Row className="align-items-center flex-column-reverse flex-lg-row my-4">
                        <Col lg={6}>
                            <img src={presentacion} alt="Sede Luz y Fuerza Córdoba" className="img-fluid mb-4 mb-lg-0 my-4 imgShadow" />
                        </Col>
                        <Col lg={6} >
                            <p className="subtitulo">CÓRDOBA</p>
                            <h2 className="lineBorderTitle">Sindicato de Luz y Fuerza de Córdoba</h2>
                            <p className="bajada">Historia, presente y futuro lucifuercista. Sostenemos una política gremial basada en la defensa irrestricta de la EPEC estatal e integrada, con sentido social.</p>
                            <ul className="lista-ticks">
                                <li> Actividad sindical</li>
                                <li> Novedades gremiales</li>
                                <li> Información para el afiliado</li>
                                <li> Electrum Digital</li>
                                <li> Turismo</li>
                                <li> Comunicados oficiales</li>
                            </ul>
                            <Link to="/vida-institucional" className="btn btn-info text-white fw-bold px-4 mt-3 botonSecretarias">Vida institucional</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Módulo 2: Banner Electrum */}
            <section className="banner-electrum text-white text-center">
                <Container>
                    <h2 className="mb-3">Electrum, el periódico de Luz y Fuerza</h2>
                    <p className="mb-4">Consultá las ediciones de Electrum Digital y descargarlas desde nuestra web</p>
                    <a href="https://luzyfuerzacordobaelectrum.com.ar/electrum-digital/" className="btn btn-light fw-bold px-4 botonSecretarias">Ver Electrum</a>
                </Container>
            </section>

            {/* Módulo 3: Cartas 3 columnas */}
            <section className="modulo-cartas my-4">
                <Container >
                    <h2 className="lineBorderTitle my-4 mb-5 ">Nuestra Organización</h2>
                    <Row className='rowCards'>
                        <Col md={4} className="mb-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-person-lines-fill display-5  SizeIcon"></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Convenio</h5>
                                <p>Información útil para el nuevo afiliado y beneficios disponibles.</p>
                                <Link to="/quienes-somos" className="btn btn-info text-white fw-bold px-4 mt-3 botonSecretarias">Ver más</Link>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-building display-5  SizeIcon"></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Epec</h5>
                                <p>Conocé el trabajo y funciones de cada secretaría del sindicato.</p>
                                <Link to="/defendamos-epec" className="btn btn-info text-white fw-bold px-4 mt-3 botonSecretarias">Ver más</Link>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-flag-fill display-5  SizeIcon"></i>
                                <hr />
                                <h5 className="mt-3 lineBorderSubTitle">Nuestra historia</h5>
                                <p>Enterate de las principales acciones gremiales y sindicales.</p>
                                <Link to="/nuestra-lucha" className="btn btn-info text-white fw-bold px-4 mt-3 botonSecretarias">Ver más</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Módulo 4: 50/50 Lucha desde 1944 */}
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
                                            <CountUp end={1944} duration={3} />
                                        </span>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={6} className='d-flex justify-content-center'>
                                <img src={imgCounter} alt="Historia de lucha" className=" my-4 rounded shadow" loading='lazy' height={400}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* Módulo 5: Noticias recientes */}
            <section className="modulo-noticias py-5">
                <Container>
                    <h2 className="lineBorderTitle mb-5">Últimas Noticias</h2>
                    <Row>
                        {noticias.map((noticia,i) => (
                            <Col md={4} key={i} className="mb-4">
                                <div className="card h-100">
                                    <img src={noticia.img} alt={noticia.alt} className="card-img-top" loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title"> {noticia.titulo}</h5>
                                        <p className="card-text"> {noticia.texto} </p>
                                        <Link to={noticia.linkBoton} className="btn btn-info text-white fw-bold px-4 mt-3 botonSecretarias">Ir a la noticia</Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-4">
                        <Link to="https://luzyfuerzacordobaelectrum.com.ar/category/noticias/" className="btn btn-info text-white fw-bold px-4 mt-3 botonSecretarias">Todas las noticias</Link>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default HomeModules;