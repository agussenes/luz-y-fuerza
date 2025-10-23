// Contacto.jsx
import SEO from '../../seo/SEO';

import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../../components/reutilizables/formularioCont/ContactForm';
import BannerPortadas from '../../components/reutilizables/bannerPortadas/BannerPortadas';
import portadaImg from '../../assets/images/Contacto/portadaC.webp';

function Contacto() {
    return (
        <>
            <SEO
                title="Contacto - Luz y Fuerza Córdoba"
                description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
                url="http://localhost:5173/contacto"
                image="https://tusitio.com/img/home-og-image.jpg"
            />

            <BannerPortadas imagen={portadaImg} titulo="Contacto" />

            <section className="contacto-section py-5">
                <Container>
                    <Row className="mb-5">
                        <Col md={6}>
                            <div className='container'>
                                <h2 className="fw-bold mb-3 lineBorderTitle">¿Tenés alguna consulta?</h2>
                                <p>Completá el formulario y nos pondremos en contacto con vos a la brevedad.</p>

                            </div>
                            <ContactForm />
                        </Col>

                        <Col md={6}>
                            <h4 className="fw-bold mb-3 lineBorderTitle">Información de contacto</h4>
                            <p><i className="bi bi-geo-alt-fill me-2 text-info"></i> San Jerónimo 666, Córdoba Capital, Argentina</p>
                            <p><i className="bi bi-telephone-fill me-2 text-info"></i> +54 351 123-4567</p>
                            <p><i className="bi bi-envelope-fill me-2 text-info"></i> contacto@luzyfuerzacba.org.ar</p>

                            <div className="ratio ratio-16x9 mt-4 shadow " style={{ border: 0, borderRadius: '16px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.2933341377507!2d-64.17853882419146!3d-31.419816096417463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29996c6786d%3A0xfddc7f374173eb50!2sSan%20Jer%C3%B3nimo%20666%2C%20X5000AGN%20C%C3%B3rdoba!5e1!3m2!1ses-419!2sar!4v1761222938269!5m2!1ses-419!2sar" // reemplazar por el real
                                    style={{ border: 0, borderRadius: '16px' }}
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
