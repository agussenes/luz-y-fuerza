import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// import imagenes 
import img1 from '../../assets/images/home/img1.png';
import img2 from '../../assets/images/home/img2.png';
import img3 from '../../assets/images/home/historia.png';

function NoticiasSection() {

    // Array Noticias 
    const noticias = [
        { img: img1, titulo: 'Noticia 1', texto: 'Noticia', alt: 'a', linkBoton: 'https://luzyfuerzacordobaelectrum.com.ar/category/noticias/' },
        { img: img2, titulo: 'Noticia 2', texto: 'Noticia', alt: 'a', linkBoton: '' },
        { img: img3, titulo: 'Noticia 3', texto: 'Noticia', alt: 'a', linkBoton: '' },
    ]
    return (
        <>
            {/* Módulo 5: Noticias recientes */}
            <section className="modulo-noticias py-5">
                <Container>
                    <h2 className="lineBorderTitle mb-5">Últimas Noticias</h2>
                    <Row>
                        {noticias.map((noticia, i) => (
                            <Col md={4} key={i} className="mb-4">
                                <div className="card h-100">
                                    <img src={noticia.img} alt={noticia.alt} className="card-img-top" loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title"> {noticia.titulo}</h5>
                                        <p className="card-text"> {noticia.texto} </p>
                                        <Link to={noticia.linkBoton} className="px-4 mt-3 estiloBoton py-1">Ir a la noticia</Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-4">
                        <Link to="https://luzyfuerzacordobaelectrum.com.ar/category/noticias/" className="px-4 mt-3 estiloBoton py-1">Todas las noticias</Link>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default NoticiasSection