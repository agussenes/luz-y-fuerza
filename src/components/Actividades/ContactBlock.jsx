import { telHref, waHref } from "../../views/Actividades/utils/links";

export default function ContactBlock({ phones = [], mainTel, mainWa }) {
  return (
   <div className="alert alert-info d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
      <div className="mb-2 mb-md-0">
        <i className="bi bi-telephone-inbound me-2" aria-hidden="true"></i>
        <strong>Contacto:</strong><br />
        {phones.length
          ? phones.map((p, i) => (
              <>
              <span key={i} className="me-3">
                {p.label && <span className="text-muted">{p.label}:</span>} {" "}
                <a href={telHref(p.tel)} className="link-dark">{p.tel}</a>
              </span> <br />
              </>
            ))
          : mainTel && <a href={telHref(mainTel)} className="link-dark">{mainTel}</a>
        }
      </div>
      {(mainWa || (phones[0] && phones[0].tel)) && (
        <>
        <div className="d-flex justify-content-center">
            <a
          className="btn btn-success ms-md-auto"
          href={waHref(mainWa || phones[0].tel)}
          target="_blank" rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp me-1" aria-hidden="true"></i> Inscribirme</a>
        </div>
        </>
      )}
    </div>
  );
}
