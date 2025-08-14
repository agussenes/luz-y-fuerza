export default function DateList({ dates = [] }) {
  if (!dates.length) return null;
  return (
    <ul className="list-group list-group-flush mb-3">
      {dates.map((d, i) => (
        <li className="list-group-item d-flex align-items-center" key={i}>
          <i className="bi bi-calendar-check me-2" aria-hidden="true"></i>
          <div>
            <div className="fw-semibold">{d.titulo}</div>
            <small className="text-muted">{d.fecha}{d.dificultad ? ` · Dificultad: ${d.dificultad}` : ""}</small>
          </div>
        </li>
      ))}
    </ul>
  );
}
