export const telHref = (tel) => `tel:${tel.replace(/\s+/g, "")}`;
export const waHref  = (tel, msg="Hola, quisiera información sobre las actividades.") =>
  `https://wa.me/54${tel.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
