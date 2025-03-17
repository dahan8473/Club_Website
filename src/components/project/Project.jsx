import React from "react";
import "./project.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Project = () => {
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Past Projects</h2>

      <Swiper
        className="project__container"
        loop={true}
        grabCursor={true}
        loopedSlides={Data.length} // Ensures a proper loop in both directions
        slidesPerView={1}
        spaceBetween={24}
        speed={600}
        pagination={{
          clickable: true,
          el: '.project-pagination',
          type: 'bullets',
        }}
        navigation={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
      >
        {Data.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide className="project__card" key={id}>
              <div className="project__img-container">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} className="project__img" />
                  </a>
                ) : (
                  <img src={image} alt={title} className="project__img" />
                )}
              </div>
            
              <h3 className="project__name">{title}</h3>
              <p className="project__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
      {/* Custom pagination */}
      <div className="project-pagination-container">
        <div className="project-pagination"></div>
      </div>
    </section>
  );
};

export default Project;