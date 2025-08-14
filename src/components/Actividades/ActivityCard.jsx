export default function ActivityCard({ items = [] }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <ul className="list-unstyled m-0">
          {items.map((it, idx) => (
            <li className="mb-2" key={idx}>
              <i className="bi bi-check2-circle me-2 text-success" aria-hidden="true"></i>
              <strong>{it.title}:</strong> <span className="text-muted">{it.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
