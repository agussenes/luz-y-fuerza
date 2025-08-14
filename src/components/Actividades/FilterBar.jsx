import { useState } from "react";

export default function FilterBar({ categorias = [], onSearch, onJump }) {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    const anchor = e.target.value;
    setSelected(anchor);
    if (anchor) onJump?.(anchor);
  };

  return (
    <div className="bg-light contenedorFiltros border rounded p-3 mb-4">
      <div className="row g-2 align-items-center">
        {/* Buscador */}
        <div className="col-12 col-lg-6">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-search" aria-hidden="true"></i>
            </span>
            <input
              className="form-control"
              placeholder="Buscar actividad, modalidad, docente…"
              value={q}
              onChange={(e) => { setQ(e.target.value); onSearch?.(e.target.value); }}
              aria-label="Buscar actividades"
            />
          </div>
        </div>

        {/* Chips (solo desktop ≥ lg) */}
        <div className="col-lg-6 d-none d-lg-flex flex-wrap gap-2 justify-content-lg-end">
          {categorias.map(c => (
            <button
              key={c.id}
              className="estiloBoton"
              onClick={() => onJump?.(c.anchor)}
              aria-label={c.label}
              type="button"
            >
              <i className={`bi ${c.icon} me-1`} aria-hidden="true"></i>
              {c.label}
            </button>
          ))}
        </div>

        {/* Dropdown (mobile + tablet < lg) */}
        <div className="col-12 col-lg-6 d-lg-none">
          <label htmlFor="filtro-categorias" className="form-label mb-1">
            Filtrar por categoría
          </label>
          <select
            id="filtro-categorias"
            className="form-select inputFiltro"
            value={selected}
            onChange={handleSelect}
          >
            <option value="">Seleccioná una opción…</option>
            {categorias.map(c => (
              <option key={c.id} value={c.anchor}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
