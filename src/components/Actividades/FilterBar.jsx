import { useState } from "react";

export default function FilterBar({ categorias = [], onSearch, onJump }) {
  const [q, setQ] = useState("");

  return (
    <div className="bg-light contenedorFiltros border rounded p-3 mb-4">
      <div className="row g-2 align-items-center">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-search" aria-hidden="true"></i></span>
            <input
              className="form-control"
              placeholder="Buscar actividad, modalidad, docente…"
              value={q}
              onChange={(e) => { setQ(e.target.value); onSearch?.(e.target.value); }}
              aria-label="Buscar actividades"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-wrap gap-2 justify-content-md-end mt-2 mt-md-0">
          {categorias.map(c => (
            <button key={c.id}
              className="estiloBoton "
              onClick={() => onJump?.(c.anchor)}
              aria-label={c.label}>
              <i className={`bi ${c.icon} me-1`} aria-hidden="true"></i>{c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
