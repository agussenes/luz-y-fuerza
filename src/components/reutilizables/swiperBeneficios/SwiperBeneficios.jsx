// SwiperBeneficios.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SwiperBeneficios.css';

function SwiperBeneficios({ images }) {
    return (
        <div className="swiper-beneficios-wrapper ">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true, el: '.swiper-beneficios-pagination' }}
                className="swiper-beneficios imgShadow2"
                slidesPerView={1}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i} className='contenedorImgSwiper'>
                        <img src={img.src} alt={img.alt} className="rounded  " loading="lazy" />
                    </SwiperSlide>
                ))}


                <div className='d-flex justify-content-center'>
                    <div className="swiper-beneficios-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default SwiperBeneficios;
