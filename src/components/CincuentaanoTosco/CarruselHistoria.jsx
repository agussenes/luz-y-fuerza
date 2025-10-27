import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CarruselHistoria.css";

// imagenes historia 
// imagenes carousel historia 
import img1 from '../../assets/images/cincuentaAnAT/carouselHistoria/img1.webp';
import img2 from '../../assets/images/cincuentaAnAT/carouselHistoria/img2.webp';
import img3 from '../../assets/images/cincuentaAnAT/carouselHistoria/img3.webp';
import img4 from '../../assets/images/cincuentaAnAT/carouselHistoria/img4.webp';
import img5 from '../../assets/images/cincuentaAnAT/carouselHistoria/img5.webp';
import img6 from '../../assets/images/cincuentaAnAT/carouselHistoria/img6.webp';
import img7 from '../../assets/images/cincuentaAnAT/carouselHistoria/img7.webp';
import img8 from '../../assets/images/cincuentaAnAT/carouselHistoria/img8.webp';
import img9 from '../../assets/images/cincuentaAnAT/carouselHistoria/img9.webp';
import img10 from '../../assets/images/cincuentaAnAT/carouselHistoria/img10.webp';
import img11 from '../../assets/images/cincuentaAnAT/carouselHistoria/img11.webp';
import img12 from '../../assets/images/cincuentaAnAT/carouselHistoria/img12.webp';
import img13 from '../../assets/images/cincuentaAnAT/carouselHistoria/img13.webp';
import img14 from '../../assets/images/cincuentaAnAT/carouselHistoria/img14.webp';

function CarruselHistoria() {
  const slides = [
    { src: img1, alt: "Agustín Tosco 1", caption: "" },
    { src: img2, alt: "Agustín Tosco 2", caption: "" },
    { src: img3, alt: "Agustín Tosco 3", caption: "" },
    { src: img4, alt: "Agustín Tosco 3", caption: "" },
    { src: img5, alt: "Agustín Tosco 3", caption: "" },
    { src: img6, alt: "Agustín Tosco 3", caption: "" },
    { src: img7, alt: "Agustín Tosco 3", caption: "" },
    { src: img8, alt: "Agustín Tosco 3", caption: "" },
    { src: img9, alt: "Agustín Tosco 3", caption: "" },
    { src: img10, alt: "Agustín Tosco 3", caption: "" },
    { src: img11, alt: "Agustín Tosco 3", caption: "" },
    { src: img12, alt: "Agustín Tosco 3", caption: "" },
    { src: img13, alt: "Agustín Tosco 3", caption: "" },
    { src: img14, alt: "Agustín Tosco 3", caption: "" },
  ];

  return (
    <>
      <Container className="py-4">
        <h1 className="fw-bold text-uppercase lineBorderTitle text-center">Tosco: historia viva</h1>
        <p className="lead">
          Nacido en Coronel Moldes en 1930, Agustín Tosco fue trabajador electricista, dirigente sindical y uno de los referentes más importantes del movimiento obrero argentino.
        </p>
        <p className="lead">
          Desde el Sindicato de Luz y Fuerza de Córdoba defendió la democracia de base, la participación de los trabajadores y la energía como un derecho social.
        </p>
        <p className="lead">
          Fue uno de los protagonistas del Cordobazo y un impulsor del sindicalismo combativo y solidario.
        </p>
        <p className="lead">Murió en 1975, perseguido por su compromiso con la justicia social y la energía pública al servicio del pueblo.</p>
      </Container>

      {/* Swiper debajo del container */}
      <section className="tosco50-section">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, A11y, Keyboard]}
            className="tosco50-swiper"
            loop
            keyboard={{ enabled: true }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200:{ slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: ".tosco50-button-next",
              prevEl: ".tosco50-button-prev",
            }}
            pagination={{
              el: ".tosco50-pagination",
              clickable: true,
            }}
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i} className="tosco50-slide">
                <figure className="tosco50-figure">
                  <img
                    src={s.src}
                    alt={s.alt}
                    
                    className="tosco50-img"
                  />
                  {s.caption && (
                    <figcaption className="tosco50-caption">{s.caption}</figcaption>
                  )}
                </figure>
              </SwiperSlide>
            ))}

            {/* Flechas personalizadas */}
            <button className="tosco50-button tosco50-button-prev" aria-label="Anterior">
              <i className="bi bi-chevron-left" />
            </button>
            <button className="tosco50-button tosco50-button-next" aria-label="Siguiente">
              <i className="bi bi-chevron-right" />
            </button>

            {/* Bullets personalizados */}
            <div className="tosco50-pagination" />
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default CarruselHistoria;
