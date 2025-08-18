import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SwiperBeneficios from '../../components/reutilizables/swiperBeneficios/SwiperBeneficios';

// import imagenes 
import imgB1 from '../../assets/images/home/swipperBeneficios/imgB1.jpg';
import imgB2 from '../../assets/images/home/swipperBeneficios/imgB2.jpg';
import imgB3 from '../../assets/images/home/swipperBeneficios/imgB3.jpg';
import imgB4 from '../../assets/images/home/swipperBeneficios/imgB4.jpg';
import imgB5 from '../../assets/images/home/swipperBeneficios/imgB5.jpeg';
import imgB6 from '../../assets/images/home/swipperBeneficios/imgB6.jpg';
import imgB7 from '../../assets/images/home/swipperBeneficios/imgB6.jpg';



function ActividadesSection() {
   
       const beneficiosImages = [
            { src: imgB1, alt: 'Beneficio 1' },
            { src: imgB2, alt: 'Beneficio 2' },
            { src: imgB3, alt: 'Beneficio 3' },
            { src: imgB4, alt: 'Beneficio 4' },
            { src: imgB5, alt: 'Beneficio 5' },
            { src: imgB6, alt: 'Beneficio 6' },
            { src: imgB7, alt: 'Beneficio 7' },
    
        ];
   
    return (
        <>
            {/* beneficios - actividades  */}
            <section className="modulo-50-50 bg-white">
                <Container>
                    <Row className="align-items-center flex-column-reverse flex-lg-row my-4">
                        <Col lg={6}>
                            <SwiperBeneficios images={beneficiosImages} />
                        </Col>
                        <Col lg={6} className='px-4'>
                            <h2 className="lineBorderTitle">Actividades</h2>
                            <p className="bajada">Actividades para disfrutar, aprender y compartir</p>
                            <ul className="lista-ticks">
                                <li> <strong>Aire libre y naturaleza:</strong> Trekking mensual con guías.</li>
                                <li> <strong>Deportes y competencia:</strong> Pesca, fútbol, hockey, pileta.</li>
                                <li> <strong>Arte marcial y disciplina:</strong> Karate para todas las edades.</li>
                                <li> <strong>Encuentro y camaradería:</strong> Torneos y eventos deportivos.</li>
                            </ul>
                            <Link to="/actividades" className="py-1 px-4 mt-3 estiloBoton">Ver actividades</Link>
                        </Col>


                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ActividadesSection