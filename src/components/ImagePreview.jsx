import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./ImagePreview.css";

const ImagePreview = (data) => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    };

    return (
        <div className="image-preview">
            <div className="container">
                <Swiper {...params}>
                    <SwiperSlide key={1}><img src={data.data} alt="details-image" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ImagePreview;
