export default function IntroStrip() {
  return (
    <div className="intro-strip bg-light border rounded p-3 mb-4">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-gift fs-4 text-info" aria-hidden="true"></i>
          <p className="m-0">
            Conocé los beneficios para afiliadas, afiliados y sus familias:
            turismo, educación y asesoramiento.
          </p>
        </div>
        <div className="d-flex align-items-center gap-3 small text-muted">
          <span><i className="bi bi-geo-alt me-1"></i>Turismo</span>
          <span><i className="bi bi-mortarboard me-1"></i>Educación</span>
          <span><i className="bi bi-journal-text me-1"></i>Asesoramiento</span>
        </div>
      </div>
    </div>
  );
}
