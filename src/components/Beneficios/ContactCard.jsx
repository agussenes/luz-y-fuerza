const digits = (v) => String(v || "").replace(/\D+/g, "");
const telHref  = (tel) => `tel:${digits(tel)}`;
const mailHref = (email) => `mailto:${email}`;

export default function ContactCard({ title = "Contacto", phones = [], email, note }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-telephone me-2"></i>{title}
        </h5>
        {phones?.length ? (
          <p className="mb-2">
            {phones.map((p, i) => (
              <span key={i} className="me-3">
                <a href={telHref(p)} className="link-body-emphasis">{p}</a>
              </span>
            ))}
          </p>
        ) : null}
        {email && (
          <p className="mb-2">
            <i className="bi bi-envelope me-2"></i>
            <a href={mailHref(email)} className="link-body-emphasis">{email}</a>
          </p>
        )}
        {note && <p className="text-muted small mb-0">{note}</p>}
      </div>
    </div>
  );
}
