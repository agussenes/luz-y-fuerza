import { Container, Col, Row } from "react-bootstrap";
import LeerMas from "../reutilizables/LeerMas/LeerMas";

import './AgendaActividades.css';

function AgendaActividades() {

    // const actividades = [
    //     {
    //         id: '1',
    //         titulo: 'Proyección del documental de Tosco',
    //         fecha: '10/10/2025',
    //         horario: '18:00 ',
    //         lugar: 'Cabalango',
    //         descripcion: 'este es un evento ejemplo con descripcion larga y robar el leer mas',
    //     },
    //     {
    //         id: '2',
    //         titulo: 'Realización de mural de Tosco',
    //         fecha: '10/10/2025',
    //         horario: '18:00 ',
    //         lugar: 'Cabalango',
    //         descripcion: 'este es un evento ejemplo con descripcion larga y robar el leer mas',
    //     },
    //     {
    //         id: '3',
    //         titulo: 'Convocatoria de diseños Tosco x 50 (los mejores serán impresos como afiches y/o stickers conmemorativos)',
    //         fecha: '10/10/2025',
    //         horario: '18:00 ',
    //         lugar: 'Cabalango',
    //         descripcion: 'este es un evento ejemplo con descripcion larga y robar el leer mas',
    //     },
    //     {
    //         id: '4',
    //         titulo: ' Colocación de Placa',
    //         fecha: '05/02/26',
    //         horario: ' ',
    //         lugar: '',
    //         descripcion: ' (en algún lugar representativo para el gremio) o realización de la cartelería de identificación del auditorio Agustín Tosco.',
    //     },
    // ]

    return (
        <>
            <Container className="py-2">
                <h1 className="fw-bold text-uppercase lineBorderTitle text-center">AGENDA</h1>
                <p className="lead">
                    Desde el 5 de noviembre de 2025 al 5 de noviembre de 2026 nos encontramos para conmemorar y mantener vivo el legado de Agustín Tosco. Cada actividad es una forma de seguir defendiendo él nos enseñó: que la energía y el trabajo pertenecen al pueblo.
                </p>
            </Container>
            <section className="container">
                {/* <Row className="g-3 g-md-4">
                    {actividades.map((art) => (
                        <Col xs={12} md={6} lg={4}>
                            <div className="card p-3">
                                <h3 className="fw-bold text-uppercase pb-2">{art.titulo}</h3>
                                <div className="d-flex justify-content-between ">
                                    <p className="border-bottom"><i className="bi bi-calendar"></i> {art.fecha}</p>
                                    <p className="border-bottom"><i className="bi bi-alarm"></i> {art.horario}</p>
                                    <p className="border-bottom"><i className="bi bi-geo-alt"></i> {art.lugar}</p>
                                </div>
                                <p className="mb-0">
                                    <LeerMas texto={art.descripcion} max={60} botonClase="btn btn-link p-0 ms-1" />
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row> */}
                <Container>
                    <ol>
                        <li>Proyección del documental de Tosco</li>
                        <li>Realización de mural de Tosco</li>
                        <li>Convocatoria de diseños Tosco x 50 (los mejores serán impresos como afiches y/o stickers conmemorativos)</li>
                        <li>5 de febrero: Colocación de Placa (en algún lugar representativo para el gremio) o realización de la cartelería de identificación del auditorio Agustín Tosco.</li>
                        <li>Ciclo de charlas en el marco de los 50 años de Tosco Eterno pero que de pie para trabajar sobre temas actuales (no sólo históricos). Existe la posibilidad que una de esas charlas se de en la Feria del Libro 2026.</li>
                        <li>Intervención callejera “la ruta de Tosco” (señalización que pueda sacarse de lugares icónicos para Tosco, como su casa, lugar donde desempeñaba su trabajo, colegio al que asistió, etc)</li>
                        <li>Campaña para redes sociales: delegados, afiliados, personalidades responden a cámara qué creen que significó Tosco para Córdoba. Esos testimonios son publicados en redes sociales. </li>
                        <li>Exposición itinerante. Se imprimen los afiches que se fueron haciendo y se arman para una muestra itinerante en puntos públicos de la ciudad (plaza San Martín, parque Las Heras, etc). </li>
                        <li>Reconocimiento Agustín Tosco. Organización de un acto en el que se haga entrega de un reconocimiento (diploma o estatuillas) a quienes hayan colaborado en mantener viva la memoria de Tosco (en festival).</li>
                        <li>Festival o acto multitudinario (ver fecha). </li>
                    </ol>
                </Container>
            </section>
        </>
    )
}

export default AgendaActividades