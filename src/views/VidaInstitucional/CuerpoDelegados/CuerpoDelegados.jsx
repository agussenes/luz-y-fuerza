// CuerpoDelegados.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Importa imagenes
import imgCard1 from '../../../assets/images/vidaInstitucional/pngParaCol.png';

import './CuerpoDelegados.css';

function CuerpoDelegados() {
  return (
    <>

      <section className="delegados-section py-5">
        <Container>
          <p className="text-info fw-bold subtitulo">Vida Institucional</p>
          <h2 className="fw-bold lineBorderTitle mb-3">Cuerpo General de Delegados</h2>
          <p className="bajada">El Cuerpo General de Delegados está compuesto por el conjunto de los delegados y delegadas elegidos democráticamente por sus compañeros y que representan a sus sectores de trabajo. Está presidido por un delegado designado en la reunión constitutiva que conforma la Mesa del Cuerpo General de Delgados junto a un vicepresidente, un secretario y un subsecretario de Actas.</p>
          <p className="bajada">Trabaja en coordinación con el Consejo Directivo, pudiendo realizar sugerencias e indicaciones con mandato de sus sectores de trabajo. Sesiona en forma conjunta con el Consejo Directivo cada vez que se requiera y toma parte activa en la fijación y concreción de las medidas de fuerza.</p>
          <p className="bajada">El mandato de los delegados y delegadas, así como de la Mesa del Cuerpo General de Delegados es de 2 años.</p>

          <h4 className=" fw-bold subtitulo mt-5">Son deberes y atribuciones del Cuerpo general de Delegados:</h4>
          <ol className="lista-ticks tamaño">
            <li>Reunirse en forma ordinaria una vez por mes, a los efectos de escuchar el Informe del Consejo Directivo sobre el desarrollo de sus actividades pudiendo hacer indicaciones concretas con respecto a la labor desempeñada o la que resta cumplir, las que deberán ser tenidas en cuenta por el Consejo Directivo. Asimismo se reunirá en forma extraordinaria toda vez que lo convoque el Consejo Directivo, lo resuelva por sí mismo o a solicitud de un tercio de sus componentes</li>
            <li>Ser órgano informativo ante los afiliados de las resoluciones que se adopten, tratando de asegurar unidad de pensamiento en los problemas de orden general que el sindicato tuviera con su patronal</li>
            <li>Aportar iniciativas en las diversas esferas de su actuación que estime necesarias para el engrandecimiento del gremio</li>
            <li>El cargo de delegado es incompatible con el de miembro del Consejo Directivo o de la Comisión Revisora de cuenta</li>
            <li>Designar en su seno un miembro para integrar todo tipo de subcomisiones de la organización</li>
            <li>Ejercer todas las facultades en lo que se refiere a fijación de medidas de fuerza, cuando éstas le sean delegadas por la Asamblea General del gremio. En estos casos resolverá en forma conjunta con el Consejo Directivo. En caso de gravedad o urgencia, estas facultades podrán ser ejercidas por el Cuerpo General de Delegados conjuntamente con el Consejo Directivo por votación nominal de los presentes y por simple mayoría de votos, Tal actitud deberá ser sometida a consideración de una Asamblea General, apenas pueda realizarse</li>
            <li>Decidir la convocatoria a asamblea general en los casos en que se considere imprescindible enjuiciar la acción del Consejo Directivo en lo que hace a la conducta de los miembros, en particular del Consejo Directivo o de cualquier comisión o subcomisión, deberá previamente hacer las indicaciones del caso para que el Consejo Directivo resuelva</li>
            <li>Las reuniones del Cuerpo general de Delegados serán presididas por un delegado designado en la reunión constitutiva que conforma la Mesa del Cuerpo General de Delgados junto a un vicepresidente, un secretario y un subsecretario de Actas.</li>
            <li>Dictar reglamentación interna, la que no podrá oponerse en ningún caso a las disposiciones del presente Estatuto, y que deberá ser previamente aprobada por la Asamblea General convocada a tal efecto</li>
            <li>Colaborar con el Consejo Directivo en las cuestiones que el mismo solicite y que estén en función con el interés general del gremio</li>
            <li>Deliberar con quórum de por lo menos la mitad más una de la divisiones de la empresa cuyos integrantes conforman el cuerpo, aunque haya un solo delegado por cada una de ellas. Las resoluciones se adoptarán por simple mayoría de votos</li>
            <li>Para las situaciones no previstas, se aplicará subsidiariamente lo reglamentado para el funcionamiento del Consejo Directivo</li>
            <li>Cumplir, hacer cumplir y ejercer el resto de las atribuciones que le fije el presente estatuto.</li>
          </ol>

          <h2 className="fw-bold lineBorderTitle mt-5">Delegados gremiales</h2>
          <p className="bajada">Cumplen una función primordial para la organización sindical, en tanto representan al sindicato en su sector de trabajo, informando a los afiliados de las resoluciones que adopte el gremio y llevando la voz de sus compañeros y la realidad de su sector ante los Cuerpos Orgánicos.</p>
          <p className="bajada">El delegado debe vigilar el cumplimiento estricto del Convenio Colectivo de Trabajo y las normas legales en su sector de trabajo, denunciando ante la Secretaría Gremial y el Consejo Directivo todo incumplimiento de los derechos de los trabajadores e impulsando la participación, el compromiso y el cumplimiento de las medidas adoptadas por el gremio.</p>

          <Row className="mt-5">
            <Col md={6} className="mb-4">
              <Link to="/delegados-generales" className="card-delegado">
                <div className="card-inner text-center shadow-sm">
                  <img src={imgCard1} alt="Cuerpo General de Delegados" className="img-fluid rounded-top" />
                  <div className="p-3">
                    <h5 className="fw-bold">Cuerpo General de Delegados</h5>
                    <p className="text-muted mb-0">2022 - 2023</p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={6} className="mb-4">
              <Link to="/delegados-delegadas" className="card-delegado">
                <div className="card-inner text-center shadow-sm">
                  <img src={imgCard1} alt="Delegados y Delegadas" className="rounded-top " loading='lazy'/>
                  <div className="p-3">
                    <h5 className="fw-bold">Delegados y Delegadas</h5>
                    <p className="text-muted mb-0">2022 - 2023</p>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CuerpoDelegados;
