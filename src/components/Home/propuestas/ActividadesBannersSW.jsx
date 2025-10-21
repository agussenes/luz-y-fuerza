import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./ActividadesBannersSW.css";

// Importá tus imágenes (las mismas que tenías)
import imgArteMarcial from "../../../assets/images/home/bannersActividades/imgArteMarcial.webp";
import imgFutbol from "../../../assets/images/home/bannersActividades/imgFutbol.webp";
import imgPesca from "../../../assets/images/home/bannersActividades/imgPesca.webp";
import imgTrakking from "../../../assets/images/home/bannersActividades/imgTrakking.webp";


const actividades = [
  { img: imgTrakking, titulo: "Programa de Trekking y Excursiones", bajada: "Recorré y conocé distintos puntos y parajes de la bellísima geografía cordobesa." },
  { img: imgPesca, titulo: "Concurso de Pesca", bajada: "Participá de la Copa Anual de pescadores organizada por Luz y Fuerza." },
  { img: imgArteMarcial, titulo: "Karate Tradicional y Deportivo", bajada: "Sumate a practicar este arte marcial para afianzar la autoconfianza y la seguridad." },
  { img: imgFutbol, titulo: "Campeonato de fútbol “Confraternidad”", bajada: "Vos también podes participar en el tradicional campeonato de fútbol lucifuercista." },
];

export default function ActividadesBannersSW() {
  return (
    <section className="actividades-banners-section text-dark mt-4 mb-3">
      <Container>
        {/* Slider tipo banner */}
        <div className="actividades-banners-wrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            className="actividades-banners-swiper"
          >
            {actividades.map((act, i) => (
              <SwiperSlide key={i}>
                <div className="actividad-banner">
                  {/* Fondo de apoyo (mismo src, en blur + cover) */}
                  <div
                    className="actividad-bg-blur"
                    style={{ backgroundImage: `url(${act.img})` }}
                    aria-hidden="true"
                  />

                  {/* Imagen principal SIN recorte */}
                  <picture className="actividad-img-wrap">
                    {/* opcional: versión mobile si la tenés */}
                    {/* <source srcSet={act.imgMobile} media="(max-width: 768px)" /> */}
                    <img
                      src={act.img}
                      alt={act.titulo}
                      className="actividad-img-contain"
                      loading="lazy"
                    />
                  </picture>

                  {/* Overlay con título y bajada */}
                  <div className="actividad-overlay-top">
                    <h3 className="actividad-titulo">{act.titulo}</h3>
                    <p className="actividad-bajada">{act.bajada}</p>
                  </div>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>

        {/* Botón debajo del slider */}
        <div className="text-center mt-3">
          <Link to="/actividades" className="py-1 px-4 estiloBotonH2">
            Ver actividades
          </Link>
        </div>
      </Container>
    </section>
  );
}
