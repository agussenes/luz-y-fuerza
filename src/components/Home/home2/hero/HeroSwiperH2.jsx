import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSwiperH2.css';

import { useEffect, useState } from "react";

function useMediaQuery(query) {
    const get = () =>
        typeof window !== "undefined" && "matchMedia" in window
            ? window.matchMedia(query).matches
            : false;

    const [matches, setMatches] = useState(get);

    useEffect(() => {
        if (typeof window === "undefined" || !("matchMedia" in window)) return;
        const mql = window.matchMedia(query);

        const onChange = (e) => setMatches(e.matches);

        // listeners (compat Safari viejo)
        if (mql.addEventListener) mql.addEventListener("change", onChange);
        else mql.addListener(onChange);

        // sync inicial
        setMatches(mql.matches);

        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", onChange);
            else mql.removeListener(onChange);
        };
    }, [query]);

    return matches;
}


function HeroSwiper({ slides }) {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section className="hero-swiper-container">
            <Swiper
                modules={[Autoplay, Pagination]}
                className="hero-swiper"
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {slides.map((item, i) => {
                    const bg = isMobile && item.imgMobile ? item.imgMobile : item.img;

                    return (
                        <SwiperSlide key={item.id ?? i} className="HeroContainerG">
                            <div
                                className="hero-slide-h2 text-white text-center d-flex align-items-center justify-content-center"
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                <div className="hero-slide-overlay">
                                    <div className="container">
                                        <h1 className="hero-slide-title-h2">{item.titulo}</h1>
                                        <p className="hero-slide-text-h2">{item.bajada}</p>

                                        {item.ocultarBoton === false ? (
                                            <div className='contenedorBotonHeroSwipper-h2'>
                                                <Link to={item.link} className="px-4 mt-3 estiloBotonClaroH2 py-1">
                                                    {item.boton} <i className="bi bi-arrow-right-short"></i>
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className='mt-5 pt-5 mobileEstilo50'>
                                                <div className='espacio50AT'></div>
                                                <div>
                                                    <Link to={item.link} className="px-4 mt-5 estiloBotonClaroH2 py-1">
                                                        {item.boton} <i className="bi bi-arrow-right-short"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default HeroSwiper;
