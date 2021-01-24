import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import img1 from "../../images/banner.png";
import img2 from "../../images/banner2.jpg";

SwiperCore.use([Pagination]);

const Slideshow = () => {
  return (
    <div>
      <div className="slide-container">
        <Swiper pagination={{ clickable: true }}>
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slideshow;
