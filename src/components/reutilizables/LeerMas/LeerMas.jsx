import { useId, useMemo, useState } from "react";

/**
 * Props:
 * - texto (string): contenido a mostrar
 * - max (number): límite de caracteres (default 60)
 * - className (string): clases para el contenedor
 * - botonClase (string): clases para el botón
 * - mostrarLeerMenos (bool): si muestra "Leer menos" al expandir
 */
export default function LeerMas({
  texto = "",
  max = 60,
  className = "",
  botonClase = "btn btn-link p-0 ms-2 align-baseline",
  mostrarLeerMenos = true,
}) {
  const [expandido, setExpandido] = useState(false);
  const id = useId();

  const esCorto = !texto || texto.length <= max;

  const truncarALimite = (t, n) => {
    if (!t) return "";
    if (t.length <= n) return t;
    const recorte = t.slice(0, n);
    const ultimoEspacio = recorte.lastIndexOf(" ");
    const base = ultimoEspacio > n * 0.6 ? recorte.slice(0, ultimoEspacio) : recorte;
    return base.trimEnd() + "…";
  };

  const mostrado = useMemo(() => {
    if (expandido || esCorto) return texto;
    return truncarALimite(texto, max);
  }, [expandido, esCorto, texto, max]);

  return (
    <span className={`leer-mas-wrap ${className}`}>
      <span id={`texto-${id}`}>{mostrado}</span>

      {!esCorto && !expandido && <span className="leer-mas-fade" aria-hidden="true" />}

      {!esCorto && (
        <button
          type="button"
          className={botonClase}
          onClick={() => setExpandido((v) => !v)}
          aria-expanded={expandido}
          aria-controls={`texto-${id}`}
        >
          {expandido && mostrarLeerMenos ? "Leer menos" : !expandido ? "Leer más" : null}
        </button>
      )}
    </span>
  );
}
