export const trekking = {
  id: "trekking",
  titulo: "Programa de Trekking y Excursiones",
  icono: "bi-signpost-2-fill",
  bajada:
    "Salidas mensuales por la geografía cordobesa, con guías habilitados. Trekking, senderismo y actividades compartidas.",
  contacto: { tel: "3512069354", whatsapp: "3512069354" },
  items: [
    { title: "Frecuencia", desc: "Aproximadamente 1 salida al mes" },
    { title: "Seguridad", desc: "Grupos acompañados por guías habilitados" },
    { title: "Objetivo", desc: "Conocer paisajes, fomentar el cuidado del ambiente" },
    { title: "Alcance", desc: "Córdoba y algunas excursiones nacionales" },
  ],
  proximasFechas: [
    // ejemplo, podés vaciar si aún no hay fechas públicas
    // { fecha: "2025-09-14", titulo: "Sendero Cerro Pan de Azúcar", dificultad: "Media" },
  ],
  faq: [
    { q: "¿Qué llevar?", a: "Calzado cómodo, agua, gorra, protector solar y documento." },
    { q: "¿Hay cupos?", a: "Sí, con inscripción previa. Se asignan por orden de registro." },
  ],
};

export const pesca = {
  id: "pesca",
  titulo: "Concurso de Pesca",
  icono: "bi-water",
  bajada:
    "Calendario anual con 9 parciales, en modalidad de costa y embarcado. Categorías: A, B, Jubilados, Cadetes, Invitados y Damas.",
  contacto: [
    { label: "Mario Petitti", tel: "3543579663" },
    { label: "Juan Sosa", tel: "3542517694" },
    { label: "Silvio Toranzo", tel: "3516243136" },
  ],
  items: [
    { title: "Premios por fecha", desc: "Más piezas y pieza más grande (Copas por Secretaría)" },
    { title: "Tabla anual", desc: "Suma de puntajes de cada parcial para premiación final" },
    { title: "Inscripción incluye", desc: "Entrada al club, botes, salvavidas, desayuno y almuerzo" },
    { title: "Equipo", desc: "Cada pescador lleva su equipo" },
  ],
  calendario: [
    { n: 5, fecha: "2025-08-16", modalidad: "Pejerrey embarcado", lugar: "Club Central Córdoba", copa: "Sec. Turismo y Cultura" },
    { n: 6, fecha: "2025-09-20", modalidad: "Pejerrey embarcado", lugar: "Dique El Cajón (Capilla del Monte)", copa: "Sec. Previsión Social" },
    { n: 7, fecha: "2025-10-18", modalidad: "Variada de costa", lugar: "A definir (Costanera Santa Fe)", copa: "Sec. Organización y Actas" },
    { n: 8, fecha: "2025-11-22", modalidad: "Variada de costa", lugar: "Club Punilla (Carlos Paz)", copa: "Sec. Vivienda y Obras" },
    { n: 9, fecha: "2025-12-13", modalidad: "Variada de costa", lugar: "Club Punilla", copa: "Sec. Acción Social y Deportes" },
  ],
  faq: [
    { q: "¿Quiénes pueden inscribirse?", a: "Afiliados activos y jubilados, y también invitados particulares." },
    { q: "¿Cómo se compite?", a: "9 parciales al año; se suman puntos a una tabla anual." },
  ],
};

export const karate = {
  id: "karate",
  titulo: "Karate Tradicional y Deportivo",
  icono: "bi-person-arms-up", // alternativa: bi-shield-check
  bajada:
    "Escuela Ketsugo de Luz y Fuerza. Seguridad, disciplina, defensa personal. Para niños, jóvenes y adultos.",
  contacto: [
    { label: "Inscripciones", tel: "3515055927" }
  ],
  items: [
    { title: "Días", desc: "Lunes, miércoles y viernes" },
    { title: "Horarios", desc: "19h (Niños 4–11), 20h (12+), 21h (Entrenamiento deportivo)" },
    { title: "Descuento", desc: "Afiliados y grupo familiar 50% en la cuota mensual" },
    { title: "Lugar", desc: "Hall de PB de la sede sindical" },
    { title: "Profes", desc: "Eduardo Novak (Sensei), Giuliana Novak (Senpai)" },
  ],
  faq: [
    { q: "¿Se requiere experiencia previa?", a: "No. Hay niveles para principiantes y avanzados." },
    { q: "¿Qué ropa llevar?", a: "Ropa cómoda; el dojo te orienta para el uniforme." },
  ],
};

export const futbol = {
  id: "futbol",
  titulo: "Campeonato de Fútbol “Confraternidad”",
  icono: "bi-trophy-fill",
  bajada:
    "Oficial de Veteranos. Torneos Apertura y Clausura por categorías de edad. Equipos de 11 jugadores.",
  contacto: [{ label: "Info/Inscripción", tel: "3516615993" }],
  items: [
    { title: "Participantes", desc: "Sectores de trabajo, familia lucifuercista y equipos invitados" },
    { title: "Organización", desc: "Subcomisión de fútbol – Secretaría de Acción Social y Deportes" },
    { title: "Objetivo", desc: "Camaradería y encuentro fuera del ámbito laboral" },
  ],
  faq: [
    { q: "¿Cómo inscribo mi equipo?", a: "Se abre inscripción al inicio de temporada; la subcomisión convoca a reunión de reglas." },
    { q: "¿Hay fixture público?", a: "Sí, la organización lo comparte al comenzar el torneo." },
  ],
};

export const categoriasUI = [
  { id: "aire-libre", label: "Aire libre y naturaleza", icon: "bi-geo-alt-fill", anchor: "#trekking" },
  { id: "deportes", label: "Deportes y competencia", icon: "bi-activity", anchor: "#pesca" },
  { id: "arte-marcial", label: "Arte marcial y disciplina", icon: "bi-person-arms-up", anchor: "#karate" },
  { id: "encuentro", label: "Encuentro y camaradería", icon: "bi-people-fill", anchor: "#futbol" },
];
