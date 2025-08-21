import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./ActividadesBannersSW.css";

// Importá tus imágenes (las mismas que tenías)
import imgActRecreativas from "../../../assets/images/home/bannersActividades/imgActRecreativas.jpg";
import imgArteMarcial from "../../../assets/images/home/bannersActividades/imgArteMarcial.jpg";
import imgBienestarSalud from "../../../assets/images/home/bannersActividades/imgBienestarSalud.jpg";
import imgCamaderia from "../../../assets/images/home/bannersActividades/imgCamaderia.jpg";
import imgComunidad from "../../../assets/images/home/bannersActividades/imgComunidad.jpg";
import imgNaturaleza from "../../../assets/images/home/bannersActividades/imgNaturaleza.jpg";
import imgTrakking from "../../../assets/images/home/bannersActividades/imgTrakking.jpg";


const actividades = [
  { img: imgNaturaleza, titulo: "Aire libre y naturaleza", bajada: "Trekking mensual con guías" },
  { img: imgTrakking, titulo: "Deportes y competencia", bajada: "Pesca, fútbol, hockey, pileta" },
  { img: imgArteMarcial, titulo: "Arte marcial y disciplina", bajada: "Karate para todas las edades" },
  { img: imgCamaderia, titulo: "Encuentro y camaradería", bajada: "Torneos y eventos deportivos" },
  { img: imgActRecreativas, titulo: "Actividades recreativas", bajada: "Jornadas para toda la familia" },
  { img: imgBienestarSalud, titulo: "Bienestar y salud", bajada: "Propuestas para moverse y disfrutar" },
  { img: imgComunidad, titulo: "Club y comunidad", bajada: "Compartir, aprender y crecer" },
];

export default function ActividadesBannersSW() {
  return (
    <section className="actividades-banners-section text-dark">
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
                {/* Slide con imagen de fondo sin recortes */}
                <div
                  className="actividad-banner"
                  style={{ backgroundImage: `url(${act.img})` }}
                >
                  {/* Overlay superior con titulo y bajada */}
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
          <Link to="/actividades" className="py-1 px-4 estiloBoton">
            Ver actividades
          </Link>
        </div>
      </Container>
    </section>
  );
}
