import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import de imagenes 
import presentacion from '../../../assets/images/home/presentacion.jpg';


export default function IntroSection() {
    return (
        <section className="modulo-50-50 bg-white">
            <Container>
                <Row className="align-items-center flex-column-reverse flex-lg-row my-4">
                    <Col lg={4}>
                        <img src={presentacion} alt="Sede Luz y Fuerza Córdoba" className="img-fluid mb-4 mb-lg-0 my-4 rounded shadow" />
                    </Col>
                    <Col lg={8} >
                        <h2 className="lineBorderTitle2">Sindicato de Luz y Fuerza de Córdoba</h2>
                        <p className="bajada">Historia, presente y futuro lucifuercista. Sostenemos una política gremial basada en la defensa irrestricta de la EPEC estatal e integrada, con sentido social.</p>
                        <ul className="lista-ticks">
                            <li> Actividad sindical</li>
                            <li> Novedades gremiales</li>
                            <li> Información para el afiliado</li>
                            <li> Electrum Digital</li>
                            <li> Turismo</li>
                            <li> Comunicados oficiales</li>
                        </ul>
                        <Link to="/vida-institucional" className="px-4 py-1 mt-3 estiloBotonH2">Vida institucional</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}