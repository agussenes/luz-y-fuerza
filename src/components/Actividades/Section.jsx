export default function Section({ id, icon, title, desc, children }) {
    return (
        <section id={id} className="mb-1 stack-section">
            <div className="d-flex align-items-center mb-2 section-head">
                <i className={`bi ${icon} fs-2 me-2`} aria-hidden="true"></i>
                <h2 className="m-0 section-title">{title}</h2>
            </div>
            {desc && <p className="text-secondary">{desc}</p>}
            {children}
        </section>
    );
}
