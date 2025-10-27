import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CarruselHistoria.css";

// Imágenes
import img1 from "../../assets/images/cincuentaAnAT/carouselAfiches/img1.webp";
import img2 from "../../assets/images/cincuentaAnAT/carouselAfiches/img2.webp";
import img3 from "../../assets/images/cincuentaAnAT/carouselAfiches/img3.webp";

// imagenes para descargar 
import imgD from '/imgDL/img1.jpg';
import imgD2 from '/imgDL/img2.jpg';
import imgD3 from '/imgDL/img3.jpg';


function AfichesDescarga() {

    const slides = [
        { src: img1, alt: "Agustín Tosco 1", caption: "", tituloDescarga: "img1", descargaImg: imgD },
        { src: img2, alt: "Agustín Tosco 2", caption: "", tituloDescarga: "img2", descargaImg: imgD2},
        { src: img3, alt: "Agustín Tosco 3", caption: "", tituloDescarga: "img3", descargaImg: imgD3 },
        { src: img1, alt: "Agustín Tosco 1", caption: "", tituloDescarga: "img1", descargaImg: imgD },
        { src: img2, alt: "Agustín Tosco 2", caption: "", tituloDescarga: "img2", descargaImg: imgD2},
        { src: img3, alt: "Agustín Tosco 3", caption: "", tituloDescarga: "img3", descargaImg: imgD3 },



    ];

    return (
        <>
            <section className="container-fluid pt-4 py-4">
                <Container className="py-2">
                    <h1 className="fw-bold text-uppercase lineBorderTitle text-center">Manifiesto visual </h1>
                    <p className="lead">
                        Descargá tu afiche favorito y sumate a la conmemoración de los 50 años de Tosco.
                    </p>


                </Container>

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
                                1200: { slidesPerView: 3, spaceBetween: 24 },
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
                                            loading="lazy"
                                            className="tosco50-img"
                                        />
                                        {s.caption && (
                                            <figcaption className="tosco50-caption">{s.caption}</figcaption>
                                        )}
                                    </figure>
                                    <div className="d-flex justify-content-center py-4">
                                        <a href={s.descargaImg}
                                            download={s.tituloDescarga}
                                            className="estiloBotonH2 btn">
                                            Descarga el afiche
                                        </a>
                                    </div>
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
            </section>
        </>
    )
}

export default AfichesDescarga