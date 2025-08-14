import React from "react";

/** Helpers locales */
const digits = (v) => String(v || "").replace(/\D+/g, "");
const telHref = (tel) => `tel:${digits(tel)}`;
const mailHref = (email, subject = "") =>
  `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
const waHref = (tel, text = "Hola, quisiera más información.") =>
  `https://wa.me/${digits(tel)}?text=${encodeURIComponent(text)}`;

export default function ContactBanner({
  className = "",
  title = "Contacto",
  subtitle = "",
  phones = [],            // [{label, tel}] o strings simples
  mainWhatsApp,          // si no se pasa, toma phones[0]
  emails = [],           // [{label, email}] o strings simples
  address,               // {text, mapUrl}
  hours,                 // string o array de strings
  cta = {                // textos de botones
    call: "Llamar",
    whatsapp: "Escribir por WhatsApp",
    email: "Enviar correo",
    map: "Ver en mapa",
  },
  variant = "light",     // 'light' | 'dark' | 'soft'
  rounded = true,
}) {
  const hasPhones = phones?.length > 0;
  const hasEmails = emails?.length > 0;
  const hasAddress = Boolean(address?.text);
  const hasHours = Boolean(hours && (Array.isArray(hours) ? hours.length : String(hours).length));

  const classesByVariant = {
    light: "bg-light border",
    dark: "bg-dark text-white",
    soft: "bg-info-subtle border-0",
  };

  const waNumber = mainWhatsApp || (phones[0] && (phones[0].tel || phones[0]));

  /** Normaliza arrays en [{label, value}] para render simple */
  const normPhones = phones.map((p) =>
    typeof p === "string" ? { label: "", tel: p } : p
  );
  const normEmails = emails.map((e) =>
    typeof e === "string" ? { label: "", email: e } : e
  );

  return (
    <div
      className={[
        "contact-banner",
        classesByVariant[variant] || classesByVariant.light,
        rounded ? "rounded-3" : "",
        "p-3 p-md-4",
        className,
      ].join(" ").trim()}
    >
      <div className="row g-3 align-items-center">
        {/* Texto / datos */}
        <div className="col-12 col-lg-7">
          <div className="d-flex align-items-center gap-2 mb-2">
            <i className="bi bi-life-preserver fs-4 text-info" aria-hidden="true"></i>
            <div>
              <h3 className="m-0">{title}</h3>
              {subtitle ? <div className="text-muted small">{subtitle}</div> : null}
            </div>
          </div>

          <ul className="list-unstyled m-0">
            {hasPhones && (
              <li className="mb-2 d-flex">
                <span className="me-2 flex-shrink-0 icon-round">
                  <i className="bi bi-telephone"></i>
                </span>
                <div className="text-wrap">
                  <strong className="me-1">Tel:</strong>
                  {normPhones.map((p, i) => (
                    <span key={i} className="me-3">
                      {p.label && <span className="text-muted">{p.label}:</span>}{" "}
                      <a href={telHref(p.tel)} className="link-body-emphasis">
                        {p.tel}
                      </a>
                    </span>
                  ))}
                </div>
              </li>
            )}

            {hasEmails && (
              <li className="mb-2 d-flex">
                <span className="me-2 flex-shrink-0 icon-round">
                  <i className="bi bi-envelope"></i>
                </span>
                <div>
                  <strong className="me-1">Email:</strong>
                  {normEmails.map((e, i) => (
                    <span key={i} className="me-3">
                      {e.label && <span className="text-muted">{e.label}:</span>}{" "}
                      <a href={mailHref(e.email)} className="link-body-emphasis">
                        {e.email}
                      </a>
                    </span>
                  ))}
                </div>
              </li>
            )}

            {hasAddress && (
              <li className="mb-2 d-flex">
                <span className="me-2 flex-shrink-0 icon-round">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <div>
                  <strong className="me-1">Dirección:</strong>
                  {address.mapUrl ? (
                    <a href={address.mapUrl} target="_blank" rel="noreferrer" className="link-body-emphasis">
                      {address.text}
                    </a>
                  ) : (
                    <span>{address.text}</span>
                  )}
                </div>
              </li>
            )}

            {hasHours && (
              <li className="mb-0 d-flex">
                <span className="me-2 flex-shrink-0 icon-round">
                  <i className="bi bi-clock"></i>
                </span>
                <div>
                  <strong className="me-1">Horario:</strong>
                  {Array.isArray(hours) ? (
                    <ul className="list-unstyled mb-0 small text-muted">
                      {hours.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  ) : (
                    <span className="small text-muted">{hours}</span>
                  )}
                </div>
              </li>
            )}
          </ul>
        </div>

        {/* CTAs */}
        <div className="col-12 col-lg-5">
          <div className="d-grid gap-2 d-md-flex justify-content-lg-end">
            {hasPhones && (
              <a
                className={`btn btn-outline-primary me-md-2`}
                href={telHref(normPhones[0].tel)}
              >
                <i className="bi bi-telephone-outbound me-1"></i>
                {cta.call}
              </a>
            )}
            {waNumber && (
              <a
                className="btn btn-success me-md-2"
                href={waHref(waNumber)}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp me-1"></i>
                {cta.whatsapp}
              </a>
            )}
            {hasEmails && (
              <a
                className="btn btn-secondary me-md-2"
                href={mailHref(normEmails[0].email)}
              >
                <i className="bi bi-envelope-paper me-1"></i>
                {cta.email}
              </a>
            )}
            {hasAddress && address.mapUrl && (
              <a
                className="btn btn-outline-dark"
                href={address.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-map me-1"></i>
                {cta.map}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
