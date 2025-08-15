export default function SectionHeader({ icon = "bi-info-circle", title }) {
  return (
    <div className="d-flex align-items-center gap-2 mb-2">
      <i className={`bi ${icon} fs-3 text-primary`} aria-hidden="true"></i>
      <h2 className="m-0 section-title">{title}</h2>
    </div>
  );
}
