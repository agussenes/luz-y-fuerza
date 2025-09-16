import { Link } from "react-router-dom";

export default function BenefitCard({ title, icon, image, bullets = [], link }) {
    return (
        <>
            {/* Encabezado */}

            <div className="benefit-card p-3  shadow-sm ">
                <div className="benefit-header">
                    <h5 className="fw-bold text-center bg-dark text-white rounded py-2 mb-3">
                        <i className={`bi ${icon} me-2`} aria-hidden="true"></i>
                        {title}
                    </h5>
                </div>
                {/* Imagen responsive (ratio 16:9) */}
                <div className="ratio ratio-16x9 ">
                    <img src={image} alt={title} className="w-100  object-fit-cover rounded" />
                </div>

                <hr className="mx-3 my-3" />

                {/* Bullets */}
                <div className="px-3 pb-3 d-flex flex-column">
                    <ul className="lista-ticks list-unstyled mb-4">
                        {bullets.map((b, i) => (
                            <li key={i} className="mb-2">
                                <span className="title d-block fw-semibold">{b.title}</span>
                                <span className="desc text-muted small d-block">{b.desc}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA siempre abajo */}
                    <div className="mt-auto d-flex justify-content-center">
                        <Link to={link} className="py-1 mt-3 px-4 estiloBotonH2">
                            Ver más
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
