// CuerpoDelegados.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Importa imagenes
import imgCard1 from '../../../assets/images/vidaInstitucional/placeHolder.webp';

import './CuerpoDelegados.css';

function CuerpoDelegados() {
  return (
    <>

      <section className="delegados-section py-5">
        <Container>
          <p className="text-info fw-bold subtitulo">Vida Institucional</p>
          <h2 className="fw-bold lineBorderTitle mb-3">Cuerpo General de Delegados</h2>
          <p className="bajada">El <strong>Cuerpo General de Delegados</strong> está compuesto por el conjunto de los delegados y delegadas elegidos democráticamente por sus compañeros, quienes representan a sus respectivos sectores de trabajo. Está presidido por un delegado designado en la reunión constitutiva, que conforma la <strong>Mesa del Cuerpo General de Delegados</strong>, junto a un vicepresidente, un secretario y un subsecretario de Actas.</p>
          <p className="bajada">Trabaja en coordinación con el <strong>Consejo Directivo</strong>, pudiendo realizar sugerencias e indicaciones con mandato de sus sectores de trabajo. Sesiona en forma conjunta con el Consejo Directivo cada vez que se requiera y toma parte activa en la fijación y concreción de las medidas de fuerza.</p>
          <p className="bajada">El mandato de los delegados y delegadas, así como el de la Mesa del Cuerpo General de Delegados, es de <strong>dos años</strong>.</p>

          <h4 className=" fw-bold subtitulo mt-5">Son deberes y atribuciones del Cuerpo general de Delegados:</h4>
          <ol className="lista-ticks ">
            <li><strong>Reunirse en forma ordinaria una vez por mes</strong>, a los efectos de escuchar el informe del Consejo Directivo sobre el desarrollo de sus actividades, pudiendo hacer indicaciones concretas con respecto a la labor desempeñada o la que reste cumplir, las cuales deberán ser tenidas en cuenta por el Consejo Directivo.
              Asimismo, se reunirá en forma extraordinaria toda vez que lo convoque el Consejo Directivo, lo resuelva por sí mismo o a solicitud de un tercio de sus componentes.</li>
            <li><strong>Ser órgano informativo</strong> ante los afiliados de las resoluciones que se adopten, procurando asegurar la unidad de pensamiento en los problemas de orden general que el sindicato tuviera con su patronal.</li>
            <li><strong>Aportar iniciativas</strong> en las diversas esferas de su actuación que estime necesarias para el engrandecimiento del gremio.</li>
            <li><strong>Incompatibilidad de cargos:</strong> el cargo de delegado es incompatible con el de miembro del Consejo Directivo o de la Comisión Revisora de Cuentas.</li>
            <li><strong>Designar en su seno</strong> un miembro para integrar todo tipo de subcomisiones de la organización.</li>
            <li><strong>Ejercer las facultades</strong> referidas a la fijación de medidas de fuerza, cuando éstas le sean delegadas por la Asamblea General del gremio.
              En tales casos, resolverá en forma conjunta con el Consejo Directivo.
              En caso de gravedad o urgencia, estas facultades podrán ser ejercidas por el Cuerpo General de Delegados conjuntamente con el Consejo Directivo, mediante votación nominal de los presentes y por simple mayoría de votos.
              Dicha decisión deberá ser sometida a consideración de una Asamblea General en cuanto ésta pueda realizarse</li>
            <li><strong>Decidir la convocatoria a Asamblea General</strong> cuando se considere imprescindible enjuiciar la acción del Consejo Directivo respecto de la conducta de sus miembros, o de cualquier comisión o subcomisión.
              Previamente, deberá formular las observaciones correspondientes para que el Consejo Directivo las resuelva.</li>
            <li><strong>Presidir las reuniones:</strong> las reuniones del Cuerpo General de Delegados serán presididas por un delegado designado en la reunión constitutiva, que conforma la Mesa junto a un vicepresidente, un secretario y un subsecretario de Actas.</li>
            <li><strong>Dictar reglamentación interna</strong>, la cual no podrá oponerse en ningún caso a las disposiciones del presente Estatuto, y deberá ser previamente aprobada por la Asamblea General convocada a tal efecto.</li>
            <li><strong>Colaborar con el Consejo Directivo</strong> en las cuestiones que éste solicite y que estén relacionadas con el interés general del gremio.</li>
            <li><strong>Deliberar con quórum</strong> de, al menos, la mitad más una de las divisiones de la empresa cuyos integrantes conforman el cuerpo, aunque haya un solo delegado por cada una de ellas.
              Las resoluciones se adoptarán por simple mayoría de votos.</li>
            <li><strong>Aplicación subsidiaria:</strong> para las situaciones no previstas, se aplicará de manera subsidiaria lo reglamentado para el funcionamiento del Consejo Directivo.</li>
            <li><strong>Cumplir, hacer cumplir y ejercer</strong> el resto de las atribuciones que le fije el presente Estatuto.</li>
          </ol>

          <h2 className="fw-bold lineBorderTitle mt-5">Delegados gremiales</h2>
          <p className="bajada">Cumplen una función primordial para la organización sindical, en tanto representan al sindicato en su sector de trabajo, informando a los afiliados de las resoluciones que adopte el gremio y llevando la voz de sus compañeros y la realidad de su sector ante los Cuerpos Orgánicos.</p>
          <p className="bajada">El delegado debe vigilar el cumplimiento estricto del Convenio Colectivo de Trabajo y las normas legales en su sector de trabajo, denunciando ante la Secretaría Gremial y el Consejo Directivo todo incumplimiento de los derechos de los trabajadores e impulsando la participación, el compromiso y el cumplimiento de las medidas adoptadas por el gremio.</p>

          <Row className="mt-5">
            <Col md={6} className="mb-4">
              <div className="card-inner text-center p-3">
                <div className="p-3">
                  <h5 className="fw-bold">Cuerpo General de Delegados</h5>
                  <p className="text-muted mb-0">2022 - 2023</p>
                </div>
                <div className="d-flex justify-content-center w-100">
                  <Link to="/delegados-generales" className="estiloBotonH2 px-3"> Ver
                  </Link>
                </div>

              </div>
            </Col>
            <Col md={6} className="mb-4">

              <div className="card-inner text-center p-3">
                <div className="p-3">
                  <h5 className="fw-bold">Delegados y Delegadas</h5>
                  <p className="text-muted mb-0">2022 - 2023</p>
                </div>
                <div className="d-flex justify-content-center w-100">
                  <Link to="/delegados-delegadas" className="estiloBotonH2 px-3 btn">
                    Ver
                  </Link>
                </div>

              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CuerpoDelegados;
