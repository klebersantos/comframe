import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./carousel.css";

import img1 from "../../images/banner.png";

window.onload = () => {
  const setaEsquerda = document.querySelector(".swiper-button-prev");
  const setaDireita = document.querySelector(".swiper-button-next");
  const centro = document.querySelector(".centro");
  centro.appendChild(setaEsquerda);
  centro.appendChild(setaDireita);
};

SwiperCore.use([Navigation, Pagination]);

function Carousel() {
  return (
    <div className="carousel">
      <div className="centro">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          id="segunda-sessao"
          spaceBetween={20}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              maxWidth: 640,
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          slidesPerView={3}
        >
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={img1} alt="nome" />
            </div>
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
