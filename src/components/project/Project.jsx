import React from "react";
import "./project.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Project = () => {
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Past Projects</h2>

      <Swiper
        className="project__container"
        loop={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="project__card" key={id}>
              <img src={image} alt="" className="project__img" />

              <h3 className="project__name">{title}</h3>
              <p className="project__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Project;
