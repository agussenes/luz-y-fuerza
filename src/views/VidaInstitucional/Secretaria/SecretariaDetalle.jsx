import { useParams, Link } from 'react-router-dom';
import { Container, Alert, Button } from 'react-bootstrap';
import BannerPortadas from '../../../components/reutilizables/bannerPortadas/BannerPortadas';
import imgPortada from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';
import './SecretariaDetalle.css';

const secretariasDetalle = {
  general: {
    titulo: 'Secretaría General',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'La Secretaría General representa legalmente a la organización sindical y es la voz y representación principal del Sindicato en su actividad tanto interna como externa.',
      'Asume la defensa del Convenio Colectivo de Trabajo ante la patronal y la autoridad de aplicación y la defensa irrestricta de la EPEC estatal e Integrada.',
      'Como máximo responsable del gremio cumple y hace cumplir las decisiones de los Cuerpos Orgánicos, del Estatuto gremial y las reglamentaciones que se dicten.',
      'También integra y preside las representaciones y delegaciones del Sindicato.',
      'Asimismo, impulsa y sostiene las relaciones del Sindicato con otras organizaciones sindicales y sociales, con la Confederación General del Trabajo u otros espacios gremiales tanto de la provincia, como nacionales e internacionales. Firma todas las actuaciones, documentos y comunicados oficiales.'
    ],
    secretario: 'Secretario General: Jorge Molina Herrera'
  },
  adjunta: {
    titulo: 'Secretaría Adjunta',
    subtitulo: 'Nuestro trabajo',
    contenido: [
      'Colabora activamente con la Secretaría General en todas sus funciones, interviniendo en la toma de decisiones claves del sindicato.'
    ],
    contacto: 'Secretario Adjunto – (351) 156-515100'
  },
  // Agregá más objetos para las demás secretarías
};

function SecretariaDetalle() {
  const { id } = useParams();
  const data = secretariasDetalle[id];

  if (!data) {
    return (
      <Container className="py-5">
        <h2>Secretaría no encontrada</h2>
        <Link to="/secretarias" className="btn btn-secondary mt-3">
          Volver al índice de Secretarías
        </Link>
      </Container>
    );
  }

  return (
    <>
      <BannerPortadas imagen={imgPortada} titulo={data.titulo} />
      <Container className="py-5 secretaria-detalle-container">
        <p className="text-info fw-bold subtitulo">{data.subtitulo}</p>
        <h2 className="fw-bold mb-4 lineBorderTitle">{data.titulo}</h2>

        {data.contenido.map((texto, i) => (
          <p key={i}>{texto}</p>
        ))}

        {data.secretario && (
          <Alert variant="warning" className="mt-4 border-start border-info border-5 bg-light-warning">
            {data.secretario}
          </Alert>
        )}

        {data.contacto && (
          <Alert variant="warning" className="mt-4 border-start border-info border-5 bg-light-warning">
            Para contactarte con la {data.titulo} comunicate al <br />
            <strong>{data.contacto}</strong>
          </Alert>
        )}

        <Link to="/secretarias" className="btn btn-primary mt-4">
          ← Volver al índice de Secretarías
        </Link>
      </Container>
    </>
  );
}

export default SecretariaDetalle;
