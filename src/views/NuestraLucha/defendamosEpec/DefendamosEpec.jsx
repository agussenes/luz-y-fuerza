// DefendamosEpec.jsx
import { Container, Row, Col } from 'react-bootstrap';
import SEO from '../../../seo/SEO';
import BannerPortadas from '../../../components/reutilizables/bannerPortadas/BannerPortadas';
import LightboxGallery from '../../../components/reutilizables/LightboxGallery/LightboxGallery';
import BannerGif from '../../../components/reutilizables/bannerEpecNoEsAnonima/BannerGif';

// import imagenes 
import portadaImg from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';
import img1 from '../../../assets/images/nuestraLucha/pngParaCol.png';

import './DefendamosEpec.css';

const galleryImages = Array.from({ length: 19 }, (_, i) => ({
    src: img1,
    caption: `Imagen ${i + 1}`
}));

function DefendamosEpec() {
    return (
        <>
            <SEO
                title="Defendemos EPEC - Luz y Fuerza Córdoba"
                description="Defendemos la EPEC estatal, integrada y al servicio del pueblo."
                url="https://tusitio.com/defendemos-epec"
                image="https://tusitio.com/img/epec-banner.jpg"
            />

            <BannerPortadas imagen={portadaImg} title="Defendemos EPEC" />

            <BannerGif />

            <section className="defendamos-epec-content py-5">
                <Container>
                    <Row>
                        <Col md={8}>
                            <p className="text-info fw-bold subtitulo">Defendemos EPEC</p>
                            <h2 className="fw-bold  mb-3 lineBorderTitle">EPEC Estatal e Integrada</h2>

                            <p className="bajada">Los trabajadores la sostenemos, somos hacedores de su historia y la vamos a defender siempre.</p>
                            <p className="bajada">El 1º de Abril de 1953, se creaba la Empresa Provincial de Energía de Córdoba durante el mandato del gobernador Raúl Felipe Luchini, cumpliendo lo dispuesto por la ley 4358, sancionada en diciembre de 1952.</p>
                            <p className="bajada">Luz y Fuerza de Córdoba siempre ha sido protagonista de las decisiones trascendentes para EPEC: empujó para crear un servicio público en 1946, formó parte activamente de la creación de EPEC como tal en 1953 con el accionar de nuestros primeros grandes dirigentes como Murúa, Sierra y Borserini que marcaron la etapa fundacional en nuestra vida sindical y desde ese momento los trabajadores lucifuercistas hemos defendido férreamente los principios de una empresa estatal e integrada.</p>
                            <p className="bajada">Somos protagonistas de su historia, sostenemos nuestra empresa con gran compromiso, garantizando el servicio en cada sector de trabajo, con responsabilidad, vocación y calidad, y vamos a defender siempre los principios y fundamentos con los que fue creada: una empresa pública e integrada, al servicio de todos y no al interés de unos pocos.</p>
                            <p className="bajada">Durante toda la década del noventa, pero especialmente en los años 2000 y 2001 las circunstancias y el peligro de una inminente privatización pusieron a prueba este compromiso y este amor de los trabajadores de Luz y Fuerza de Córdoba con nuestra EPEC, no nos escondimos, la defendimos con uñas y dientes, ganamos y luego fuimos impulsores de la promulgación de una nueva Carta Orgánica, y hoy seguimos bregando porque ese triunfo se traduzca en una Empresa estatal e integrada cada vez más fuerte, más eficiente en el servicio y libre de tercerizaciones que representan una pesada carga, tal como venimos denunciando insistentemente.</p>

                            <h4 className=" fw-bold lineBorderSubTitle mt-4">Las compañías extranjeras</h4>
                            <p className="bajada">Desde principios del S XX el servicio de explotación del servicio eléctrico en Córdoba estuvo en manos de empresas de capital privado extranjero, la compañía General de Electricidad de Córdoba y la compañía de Luz y Fuerza de Córdoba.</p>
                            <p className="bajada">Luego de 40 años de vigencia de este sistema, la situación era de notoria anarquía, déficit de energía y deterioro de las instalaciones y equipos.
                                Las serias deficiencias del servicio eran conocidas abiertamente desde 1935 cuando el 29 de Mayo de ese año, se presenta al Gobernador de ese momento Pedro J. Frías (1932-1936), un informe elaborado por la Comisión Especial de Concesiones Eléctricas y firmado por Eduardo Deheza Frías.</p>
                            <p className="bajada">Este informe dejó en evidencia no sólo las pésimas condiciones del servicio sino que una de las compañías -la compañía Luz y Fuerza Motriz de Córdoba- había quedado al borde de la quiebra, sin posibilidad de realizar ninguna inversión. Además, ambas compañías se habían terminado fusionándose en un solo holding empresario: “Las industrias concedidas a esas Compañías, así como la mayor parte de las restantes en la provincia, municipales y provinciales, y numerosísimas otras del interior del país, han sido captadas paulatinamente pero rápidamente por la gran empresa financiero-industrial de negocios internacionales en servicios públicos , en especial de electricidad, cuyo origen y sede están en EEUU de América , llamada Electric Bond and Share Company (EBASCO), mediante su subsidiaria American and Foreing Power Company” (Documentos acerca de las Empresas de Servicio Público de Electricidad, 1935) .</p>
                            <p className="bajada">El 6 de octubre de 1946 una fuerte tormenta causó desperfectos en la línea Villa María- Córdoba, ante lo cual las compañías se declararon incapaces de dar una solución al servicio, lo cual catapultó la decisión del estado provincial de tomar el control del servicio eléctrico.</p>


                        </Col>

                        <Col md={4}>
                            <LightboxGallery images={galleryImages} columns={3} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className=" fw-bold lineBorderSubTitle mt-4">Estatización del servicio eléctrico y el impulso de los trabajadores</h4>
                            <p className="bajada">El antecedente fundamental en el camino hacia la creación de la EPEC en 1953, fue la estatización del servicio eléctrico el 11 de Noviembre de 1946, cuando el entonces gobernador de la provincia de Córdoba, Argentino Auchter, firmaba dos decretos, el 4196 y 4197, mediante los cuales se declaraba la caducidad de las concesiones del Servicio Eléctrico a las compañías privadas Luz y Fuerza Motriz de Córdoba y General de Electricidad y se creaba CASPE (Comisión Administradora del Servicio Público de Electricidad). Entre los considerandos fundamentales de estos decretos, se incluía la incapacidad demostrada por ambas compañías de prestar un servicio eficiente, el incumplimiento del plan de inversiones al que se habían comprometido, siendo la potencia instalada, después de 40 años, prácticamente la misma que se les había entregado.</p>
                            <p className="bajada">La estatización del servicio eléctrico fue la piedra fundacional de lo que luego se convertiría en la Empresa Provincial de Energía de Córdoba, y fue propuesta por los trabajadores lucifuercistas, quienes llevaron el proyecto al Gobierno Provincial y pusieron a disposición de la empresa pública, la colaboración del sindicato (creado el 5 de febrero de 1944) y la voluntad de los trabajadores para recuperar un servicio que agonizaba, sin capacidad de dar respuesta a los usuarios y menos aún de sostener un proyecto de crecimiento industrial.</p>
                            <p className="bajada">La participación y la influencia de nuestro sindicato en todo este proceso fue permanente: la creación de una empresa enteramente estatal fue una propuesta que nació de nuestro sindicato, la primera propuesta de la Dirección Provincial de Hidráulica fue la creación de una empresa mixta, integrada por capital privado, gobierno y personal obrero. Pero nuestros compañeros presionaron por una empresa cien por cien del estado.</p>
                            <p className="bajada">Durante largas jornadas nuestros compañeros concurrieron al despacho del gobernador Autcher, ubicado en 27 de Abril 375 a trabajar arduamente la propuesta, participando de las conversaciones los compañeros Borserini, Sierra, los ingenieros Cervi, Weiss y el gobernador Auchter, más un equipo de trabajo que concretó su implementación.</p>

                            <h4 className=" fw-bold lineBorderSubTitle mt-4">Nace EPEC</h4>
                            <p className="bajada">La creación de una empresa estatal fue una propuesta de los trabajadores</p>
                            <p className="bajada">Con el plan eléctrico impulsado en 1949 por el gobernador Brigadier San Martín, la provisión de energía experimenta una mejora, se crea primero el Servicio Público de Electricidad de Córdoba (SPEC) y finalmente, en diciembre de 1952, se sanciona la ley 4.358 que fusiona SPEC y la Dirección General de Energía en un solo ente autárquico, EPEC, que Genera, transporta, distribuye y comercializa energía eléctrica en Córdoba.</p>
                            <p className="bajada">Luz y Fuerza de Córdoba tuvo una destacada participación en la elaboración de la ley que dio origen a EPEC. Participaron los compañeros Cristóbal Sierra, entonces Secretario General, y Atilio Borserini, Secretario Adjunto, para debatir propuestas con el Gobierno Provincial. Como empresa del Estado, cumplía además un relevante rol social, en beneficio de sus usuarios y de sus trabajadores. Nuestro Sindicato acompañó, con el esfuerzo de sus trabajadores, esta etapa de crecimiento.</p>
                            <p className="bajada">La fundación de la EPEC, entonces, fue la culminación en Córdoba, de una política que apuntaba a dar un fuerte empuje al crecimiento económico y social de la provincia, llegando a ser una empresa modelo y una herramienta fundamental para la expansión de la Córdoba industrial, que despegaría en los años 60. Sin energía, no hubiese sido posible lograrlo. Tampoco hubiese sido posible alcanzar un importante progreso en el nivel de vida de la mayor parte de la población, progreso que requiere de energía a costos accesibles, y disponible en cualquier rincón de la provincia.</p>

                            <h4 className=" fw-bold lineBorderSubTitle mt-4">Defensa de la empresa estatal</h4>
                            <p className="bajada">En la década del 90 enfrentamos épocas muy difíciles, con sucesivos intentos privatistas que amenazan a EPEC, se trató de dividirla en “unidades de negocios”, convertirla en Sociedad Anónima, concesionarla, y venderla. Todos estos intentos fracasaron, fundamentalmente porque el pueblo de Córdoba y los trabajadores lucifuercistas la defendieron con todas sus fuerzas, con la convicción de que la Empresa era parte sustancial de nuestro patrimonio y un instrumento vital para una política económica con sentido social.
                                El modelo de privatizaciones impuesto en los años 90 resultó en un modelo de ganancias para las empresas privadas que se han llevado enormes ganancias fuera del país, sin realizar las inversiones prometidas, eliminado miles de puestos de trabajo, desintegrando operativamente las empresas, con la consiguiente baja en la calidad del servicio y cortes prologados que desde hace años sufren recurrentemente los usuarios.
                                Podemos decir con orgullo que en el caso de Córdoba la situación es distinta, sostuvimos un servicio eléctrico de calidad, sobre todo porque conservamos a EPEC, la única empresa estatal y totalmente integrada que quedó en pie en el país.</p>
                            <p className="bajada">Derrotado el intento de privatización en 2001, la tarea fue abocarse a reconstruir la empresa con una herramienta fundamental, su nueva Carta Orgánica, lograda en 2003, que reafirma a EPEC como estatal e integrada, abriendo nuevas posibilidades de crecimiento e incorporando a los trabajadores organizados en aspectos centrales de la gestión de la Empresa, siguiendo la concepción presente en el Convenio Colectivo de Trabajo 165/75, que la misma carta orgánica reconoce como plenamente vigente.</p>
                            <p className="bajada">La historia de los últimos años nos ha demostrado que fue un acierto la creación de la empresa estatal, así como haberla defendido contra la privatización y enfrentar hoy las políticas que de vaciamiento y tercerización que desde 2018 debilitan su funcionamiento operativo, su rol estratégico y la calidad del servicio.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default DefendamosEpec;
