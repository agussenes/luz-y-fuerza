// DelegadosDelegadas.jsx
import { Container } from 'react-bootstrap';
import './DelegadosDelegadas.css';

const data = [
    { nombre: 'Mansilla Silvana', sector: 'Clientes Comunes' },
    { nombre: 'Cassina Raúl', sector: 'Capacitación' },
    { nombre: 'Pereyra Julio', sector: 'Usina Molet' },
    { nombre: 'Sosa Pablo', sector: 'Operativo Villa' },
    { nombre: 'Gómez Vilma', sector: 'Jardín Maternal' },
    { nombre: 'Leyría Rodolfo', sector: 'Guardia Argüello' },
    { nombre: 'Altamirano Susa', sector: 'AORD' },
    { nombre: 'Maldonado Roxana', sector: 'Comercial V. Allende' },
    { nombre: 'Calderón Sebastián', sector: 'Redes Alta Tensión' },
    { nombre: 'Albaretto Héctor', sector: 'Centro de Control' },
    { nombre: 'Cáceres Javier', sector: 'Guardia Sur' },
    { nombre: 'Olmedo Germán', sector: 'Guardia Norte' },
    { nombre: 'Martínez Ezequiel', sector: 'Medición' },
    { nombre: 'Dellavalle Samanta', sector: 'Facturación' },
    { nombre: 'Giannobi Alicia', sector: 'Recursos Humanos' },
    { nombre: 'Petrei Luciana', sector: 'Recursos Humanos' },
    { nombre: 'Cerdá Ana', sector: 'Proveedores' },
    { nombre: 'Moretta Luciano', sector: 'Distribución Río Ceballos' },
    { nombre: 'Cabrera Ariel', sector: 'Mantenimiento Mecánico' },
    { nombre: 'Pastorino Luis', sector: 'Líneas Aéreas Norte' },
    { nombre: 'Nieto Evangelina', sector: 'Tesorería' },
    { nombre: 'Márquez Andrés', sector: 'Mantenimiento Redes' },
    { nombre: 'Bonino Ibarra Marcos', sector: 'Suministro' },
    { nombre: 'Agüero Germán', sector: 'Admin. Comercial' },
    { nombre: 'Lozada Diego', sector: 'Servicios Generales' },
    { nombre: 'Santin Fernando', sector: 'Villa Allende' },
    { nombre: 'Dos Reis Mahla Jorge', sector: 'Laboratorio / Medidor' },
    { nombre: 'Pawlowicz María Inés', sector: 'Transmisión' },
    { nombre: 'Oliva Silvia', sector: 'Operación de Sistema' },
    { nombre: 'Pérez Héctor', sector: 'Medidores / Conexiones' },
    { nombre: 'Tosco Agustín Nicolás', sector: 'NOC' },
    { nombre: 'Valles Marcelo', sector: 'Energía Digna' },
    { nombre: 'Bertschi Fernando', sector: 'Servicios Auxiliares' },
    { nombre: 'López Alicia', sector: 'Sistema Gestión' },
    { nombre: 'Juárez Cristina', sector: 'CAC Norte' },
    { nombre: 'Altamirano Juan', sector: 'Transmisión' },
    { nombre: 'Aimino Gustavo', sector: 'Planeamiento' },
    { nombre: 'Córdoba Claudia', sector: 'Taller Electromecánico' },
    { nombre: 'Rosales Damián', sector: 'Transformadores' },
    { nombre: 'Gutiérrez Pablo', sector: 'Ilícitos' },
    { nombre: 'Tosco Héctor', sector: 'GTIC' },
    { nombre: 'Martínez Lucas', sector: 'Toma Estado' },
    { nombre: 'Mercado Pablo', sector: 'Redes Subterráneas' },
    { nombre: 'Sosa Claudio', sector: 'Mantenimiento / Explotación Redes' },
    { nombre: 'Azar Juan Carlos', sector: 'Mantenimiento / Explotación Redes' },
    { nombre: 'Courroux Marco', sector: 'Líneas Aéreas Sur' },
    { nombre: 'Oliva Javier', sector: 'Guardia Este' },
    { nombre: 'Antonelli Walter', sector: 'GTYC' },
    { nombre: 'Yacuzzi Leonardo', sector: 'Control / Serv. Eléctricos' },
    { nombre: 'Romero Gabriel', sector: 'SEA S' },
    { nombre: 'Bussano Diego', sector: 'TG Deán Funes' },
    { nombre: 'Yuszczyk Erica', sector: 'Contratación Servicios Eléctricos' },
    { nombre: 'Ponce Edgar', sector: '0800' },
    { nombre: 'Maldonado José', sector: 'CAC Terminal' },
    { nombre: 'Perrone Pablo', sector: 'Obras Civiles' },
    { nombre: 'Corzo Ricardo', sector: 'SEA Norte' },
    { nombre: 'Tale Rafael', sector: 'Servicios Generales' },
    { nombre: 'Bernhardt Germán', sector: 'Div. Téc. Servicios Generales' },
    { nombre: 'Zavorra Víctor', sector: 'Construcción Redes Líneas Aéreas' },
    { nombre: 'Borches Juan M.', sector: 'Planificación' },
    { nombre: 'Do Pazo Aguirres', sector: 'Almacenes' },
    { nombre: 'Acosta Ricardo', sector: 'Análisis' },
    { nombre: 'Pereyra Emanuel', sector: 'Sistema/Estadística' },
    { nombre: 'Santillán Agustín', sector: 'Sistema / Estadística' },
    { nombre: 'Juárez Javier', sector: 'Central Bazán' },
    { nombre: 'Peralta Enrique', sector: 'Grúas Hidroeleva. N' },
    { nombre: 'Scarcella José', sector: 'Telefonía' },
    { nombre: 'Guzmán Fátima', sector: 'CAC Este' },
    { nombre: 'Flores Ricardo', sector: 'Distrito La Calera' },
    { nombre: 'Alfonso Ramiro', sector: 'Oper / Mantenimiento Estaciones' },
    { nombre: 'Pérez Carolina', sector: 'Gestión Pública' },
    { nombre: 'Bohe Adolfo', sector: 'Asesoría Relaciones Públicas' },
    { nombre: 'Figueroa Luna Gastón', sector: 'Parque Automotor' },
    { nombre: 'Ahumada Gonzalo', sector: 'Div /Mantenimiento de Estación' },
    { nombre: 'Di Toffino Tomás', sector: 'Div. Protecciones' },
    { nombre: 'Bustos Gisela', sector: '0800 Ctro / Contc Usri' },
    { nombre: 'Urbani Matías', sector: 'Distrito Malagueño' },
    { nombre: 'Ángel Cuello', sector: 'Taller Automotor' },
    { nombre: 'Morán M. Eugenia', sector: 'Div. Seguridad' }
];

function DelegadosDelegadas() {
    return (
        <>

            <section className="delegados-table-section py-5">
                <Container>
                    <p className="text-info fw-bold subtitulo">Vida Institucional</p>
                    <h2 className="fw-bold lineBorderTitle mb-4">DELEGADOS y DELEGADAS 2022 - 2023</h2>

                    <div className="table-responsive">
                        <table className="table table-bordered delegados-table rounded m-4 tamaño">
                            <thead>
                                <tr >
                                    <th className='bg-color-tabla'>NOMBRE</th>
                                    <th className='bg-color-tabla'>SECTOR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.nombre}</td>
                                        <td>{item.sector}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default DelegadosDelegadas;
