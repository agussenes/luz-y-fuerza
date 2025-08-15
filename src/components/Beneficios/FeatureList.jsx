export default function FeatureList({ items = [] }) {
  return (
    <ul className="list-unstyled mb-0">
      {items.map((t, i) => (
        <li key={i} className="mb-1">
          <i className="bi bi-check2-circle text-success me-2" aria-hidden="true"></i>
          {t}
        </li>
      ))}
    </ul>
  );
}
