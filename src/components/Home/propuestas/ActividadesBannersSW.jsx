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
  { img: imgBienestarSalud, titulo: "Programa de Trekking y Excursiones", bajada: "Recorré y conocé distintos puntos y parajes de la bellísima geografía cordobesa." },
  { img: imgNaturaleza, titulo: "Concurso de Pesca", bajada: "Participá de la Copa Anual de pescadores organizada por Luz y Fuerza." },
  { img: imgArteMarcial, titulo: "Karate Tradicional y Deportivo", bajada: "Sumate a practicar este arte marcial para afianzar la autoconfianza y la seguridad." },
  { img: imgTrakking, titulo: "Campeonato de fútbol “Confraternidad”", bajada: "Vos también podes participar en el tradicional campeonato de fútbol lucifuercista." },
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
          <Link to="/actividades" className="py-1 px-4 estiloBotonH2">
            Ver actividades
          </Link>
        </div>
      </Container>
    </section>
  );
}
