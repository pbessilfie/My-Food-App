// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperImage_1 from "/background-1.jpg";
import swiperImage_2 from "/background-2.jpg";
import swiperImage_3 from "/background-3.jpg";

import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css";
import "/src/styles/Hero.css";

import { Autoplay, EffectFade } from "swiper/modules";
import GenButton from "./button";

export default function Hero() {
  return (
    <>
      <section className="hero--wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={swiperImage_1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage_2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage_3} />
          </SwiperSlide>
        </Swiper>
        <div className="background--shadow"></div>
        <div className="hero--content">
          <h1 className="hero--content--title">
            Taste Our <span>Recipes</span>
          </h1>
          <p className="hero--content--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsa quia cumque laborum mollitia veniam rerum optio culpa quas.
            Inventore ipsum dolor natus adipisci! Amet nostrum odio error
            aspernatur aperiam soluta ipsum sint! Quo eligendi nemo molestiae ut
          
          </p>
          <div
            style={{
              position: "absolute",
              right: "5%",
              bottom: "-150%",
              width: "20%",
              height: "5%",
            }}
          >
            <GenButton backgroundColor="green" label="Order now" />
          </div>
        </div>
      </section>
    </>
  );
}
