import React from "react";
import "./Timeline.css";

import img1 from '../../assets/images/historia/swipper/img1.jpg'
import img2 from '../../assets/images/historia/swipper/img2.jpg'
import img3 from '../../assets/images/historia/swipper/img3.webp'
import img4 from '../../assets/images/historia/swipper/img5.webp'
import img5 from '../../assets/images/historia/swipper/img5.webp'
import img6 from '../../assets/images/historia/swipper/img6.webp'
import img7 from '../../assets/images/historia/swipper/img7.webp'

const demoItems = [
  { year: "1944", title: "Nacimiento del Sindicato", img: img1 },
  { year: "1950", title: "Primer convenio colectivo", img: img2 },
  { year: "1969", title: "Cordobazo y lucha sindical", img: img3 },
  { year: "1983", title: "Retorno a la democracia", img: img4},
  { year: "1990", title: "Privatizaciones y defensa de EPEC", img: img5},
  { year: "2000", title: "Modernización sindical", img: img6 },
  { year: "2023", title: "Actualización y renovación institucional", img: img7 }
];


export default function Timeline({ items = demoItems }) {
  return (
    <div className="timeline p-3 p-md-4">

      <div className="timeline-list timeline-inner">
        {items.map((it, idx) => (
          <div className="row align-items-center py-4 timeline-row" key={idx}>
            {/* Año */}
            <div className="col-3 d-flex justify-content-end">
              <span className="badge rounded-pill px-3 py-2 year-badge text-uppercase">
                {it.year}
              </span>
            </div>

            {/* Centro: línea (global) + dot por item */}
            <div className="col-1 d-none d-sm-flex timeline-center">
              <span className="timeline-dot" />
            </div>

            {/* Contenido */}
            <div className="col-8">
              <div className="timeline-card d-flex flex-column gap-3 align-items-start">
                <div className="contenedorImgText">
                  <h5 className="mb-2 fw-bold">{it.title}</h5>
                  {it.desc && <p className="mb-0 small text-muted">{it.desc}</p>}
                </div>
                {it.img && (
                  <div className="timeline-thumb">
                    <img src={it.img} alt={it.title} className="img-fluid rounded-3" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
