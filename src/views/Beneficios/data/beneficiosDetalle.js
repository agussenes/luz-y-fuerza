export const turismo = {
  hero: {
    titulo: "Turismo",
    bajada:
      "Complejos en Mina Clavero y Cosquín, con estadías en hoteles, camping y temporada de pileta para toda la familia.",
    icon: "bi-geo-alt-fill",
  },
  minaClavero: {
    direccion: "Av. Mitre 1550, Mina Clavero",
    cercaDe:
      "A pasos de la peatonal comercial, la costanera y a pocas cuadras de los mejores balnearios.",
    hoteles: [
      { nombre: "Colonia de Vacaciones Gral. San Martín", plazas: 77 },
      { nombre: "Hotel Agustín Tosco", plazas: 97 },
    ],
    temporadas: [
      "Verano (diciembre a marzo)",
      "Invierno (julio)",
      "Contingentes especiales en fines de semana largos (p. ej., Semana Santa)",
    ],
    modalidad:
      "Contingentes de 7 días con pensión completa para el afiliado y su grupo familiar. Requiere inscripción previa.",
  },
  cosquin: {
    camping: {
      nombre: "Camping Juan D. Perón",
      ubicacion:
        "Av. General Paz s/n (Camino de las Junturas), a 2 km de la Plaza Próspero Molina.",
      entorno:
        "Frente al río Cosquín, muy cerca de las junturas entre los ríos Yuspe y Cosquín.",
      servicios: [
        "Amplio espacio de acampe arbolado",
        "Quincho, cocina, baños y espacios de juegos",
        "Cada sitio con asador y mesa techada",
        "Pileta",
        "Habitaciones con cuchetas, aire acondicionado, freezer y TV",
      ],
      publico:
        "Recibe afiliados y también acampantes particulares, con tarifa diferencial.",
    },
  },
  inscripciones: {
    texto:
      "Inscripciones para alojarse en nuestros complejos en la Secretaría de Turismo y Cultura (Subsuelo de la sede sindical, Deán Funes 672).",
    telefonos: "351 422 8079 / 81",
  },
  guiñazu: {
    titulo: "Complejo Recreativo “Campo de Deportes Guiñazú”",
    resumen:
      "Sede de nuestros campeonatos de fútbol y otras disciplinas. En verano funciona la temporada de pileta.",
    servicios: [
      "3 canchas y vestuarios",
      "Pileta",
      "Quinchos y asadores",
      "Gran espacio verde y arbolado",
    ],
    notas: [
      "Durante la temporada de pileta recibimos afiliados y particulares con tarifas diferenciales.",
      "Más info en la Secretaría de Acción Social y Deportes (3º piso, Deán Funes 672) – Tel: 351 422 8079/81",
    ],
  },
};

export const educativos = {
  hero: {
    titulo: "Educación",
    bajada:
      "Centro de Actividades para jubilados/as, becas para hijos/as de afiliados y entrega de útiles escolares.",
    icon: "bi-mortarboard",
  },
  centro: {
    nombre: "Centro de Actividades “Lorenzo Racero”",
    gestion: "Secretaría de Previsión Social",
    ubicacion: "Barrio Cofico",
    descripcion:
      "Espacio cultural y social para afiliados jubilados y la vida sindical lucifuercista. Talleres que combinan aprendizaje, movimiento, música y danza para el bienestar general.",
    grilla: [
      { dia: "Martes", hora: "14:30 a 16:15", taller: "Manejo de celular", profe: "Prof. Jeremy Mendez" },
      { dia: "Martes", hora: "16:15 a 18:15", taller: "Ritmo", profe: "Prof. María Astrada" },
      { dia: "Jueves", hora: "16:00 a 18:00", taller: "Folklore", profe: "Prof. Silvia Yapura" },
    ],
    contacto: {
      whatsapp: "351 7 484 083",
      telefonoSede: "351 422 8079/81",
    },
  },
  becas: {
    marco:
      "Otorgadas por EPEC, derecho establecido en los artículos 29 y 30 del CCT 165/75.",
    comision:
      "Comisión Mixta de Becas (empresa y sindicatos de Luz y Fuerza: Córdoba, Regional Villa María y Río Cuarto).",
    quienes:
      "Hijos/as de afiliados que cursen como alumnos regulares el último o penúltimo año del nivel secundario, terciario o universitario.",
    inscripcion:
      "Se abre todos los años. Orden de mérito con prioridad para quienes no fueron beneficiados el año anterior.",
    contacto: "José María Britos – 351 620 6871",
  },
  utiles: {
    descripcion:
      "Entrega anual antes del inicio de clases: kit para primaria y vouchers/descuentos para secundaria.",
    contacto: "Secretaría de Acción Social y Deportes.",
  },
};

export const juridicos = {
  hero: {
    titulo: "Servicios Jurídicos y de Asesoramiento",
    bajada:
      "Atención para trámites jubilatorios, consultas previsionales y legales, continuidad de afiliación y asistencia en vivienda.",
    icon: "bi-journal-text",
  },
  previsional: {
    inicio: {
      titulo: "Inicio del Trámite Jubilatorio",
      horario:
        "Miércoles de 10 a 14 h – 3º piso (Secretaría de Previsión Social).",
      atencion: "Dra. Liliana Bustos.",
      llevar: ["Número de CUIL", "Clave de Ciudadano Digital (CiDi)"],
    },
    asesoramiento: {
      titulo: "Asesoramiento previsional y jurídico",
      horario: "Miércoles de 10 a 14 h.",
      alcance: "Consultas generales para todos los afiliados.",
    },
    continuidad: {
      titulo: "Continuidad de afiliación al sindicato",
      quienes:
        "Jubilados/as o con beneficio de pensión por fallecimiento.",
      horario:
        "Secretaría de Previsión Social (3º piso), de lunes a viernes de 8 a 14 h.",
      documentacion: [
        "DNI original",
        "2 fotos 4x4",
        "Situación de revista (área Liquidación de Haberes de EPEC)",
      ],
    },
  },
  vivienda: {
    titulo: "Vivienda: Asesoramiento y asistencia",
    asistencia: [
      "Edificación, refacción y ampliación",
      "Atención prioritaria ante siniestros: desmoronamientos, rajaduras o hundimientos",
    ],
    contacto: {
      telefonos: "351 422 8079/81 – 351 313 0413 – 351 381 1001",
      email: "luzyfuerzavivienda@gmail.com",
    },
  },
};


export const campoDeportivo = {
  hero: {
    titulo: "Campo de Deportes",
    bajada:
      "Atención para trámites jubilatorios, consultas previsionales y legales, continuidad de afiliación y asistencia en vivienda.",
    icon: "bi-journal-text",
  },
  previsional: {
    inicio: {
      titulo: "Inicio del Trámite Jubilatorio",
      horario:
        "Miércoles de 10 a 14 h – 3º piso (Secretaría de Previsión Social).",
      atencion: "Dra. Liliana Bustos.",
      llevar: ["Número de CUIL", "Clave de Ciudadano Digital (CiDi)"],
    },
    asesoramiento: {
      titulo: "Asesoramiento previsional y jurídico",
      horario: "Miércoles de 10 a 14 h.",
      alcance: "Consultas generales para todos los afiliados.",
    },
    continuidad: {
      titulo: "Continuidad de afiliación al sindicato",
      quienes:
        "Jubilados/as o con beneficio de pensión por fallecimiento.",
      horario:
        "Secretaría de Previsión Social (3º piso), de lunes a viernes de 8 a 14 h.",
      documentacion: [
        "DNI original",
        "2 fotos 4x4",
        "Situación de revista (área Liquidación de Haberes de EPEC)",
      ],
    },
  },
  vivienda: {
    titulo: "Vivienda: Asesoramiento y asistencia",
    asistencia: [
      "Edificación, refacción y ampliación",
      "Atención prioritaria ante siniestros: desmoronamientos, rajaduras o hundimientos",
    ],
    contacto: {
      telefonos: "351 422 8079/81 – 351 313 0413 – 351 381 1001",
      email: "luzyfuerzavivienda@gmail.com",
    },
  },
};

export const accionSocial = {
  hero: {
    titulo: "Acción social y deporte",
    bajada:
      "",
    icon: "bi-mortarboard",
  },
  mantenimiento: {
    bajada: "Estamos desarrollando esto para nuestros/as compañeros y compañeras"
  }
};

export const cultura = {
  hero: {
    titulo: "Cultura",
    bajada:
      "",
    icon: "bi-mortarboard",
  },
  mantenimiento: {
    bajada: "Estamos desarrollando esto para nuestros/as compañeros y compañeras"
  }
};