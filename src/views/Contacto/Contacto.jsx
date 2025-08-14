// Contacto.jsx
import SEO from '../../seo/SEO';

import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../../components/reutilizables/formularioCont/ContactForm';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';
import portadaImg from '../../assets/images/vidaInstitucional/bannerPortada.jpg';

function Contacto() {
    return (
        <>
            <SEO
                title="Contacto - Luz y Fuerza Córdoba"
                description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
                url="http://localhost:5173/contacto"
                image="https://tusitio.com/img/home-og-image.jpg"
            />

            <BannerPortadas imagen={portadaImg} titulo="Contactanos" />

            <section className="contacto-section py-5">
                <Container>
                    <Row className="mb-5">
                        <Col md={6}>
                            <h2 className="fw-bold mb-3 lineBorderTitle">¿Tenés alguna consulta?</h2>
                            <p>Completá el formulario y nos pondremos en contacto con vos a la brevedad.</p>
                            <ContactForm />
                        </Col>

                        <Col md={6}>
                            <h4 className="fw-bold mb-3 lineBorderTitle">Información de contacto</h4>
                            <p><i className="bi bi-geo-alt-fill me-2 text-info"></i> San Jerónimo 666, Córdoba Capital, Argentina</p>
                            <p><i className="bi bi-telephone-fill me-2 text-info"></i> +54 351 123-4567</p>
                            <p><i className="bi bi-envelope-fill me-2 text-info"></i> contacto@luzyfuerzacba.org.ar</p>

                            <div className="ratio ratio-16x9 mt-4 shadow rounded">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!..." // reemplazar por el real
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Ubicación Luz y Fuerza"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Contacto;
