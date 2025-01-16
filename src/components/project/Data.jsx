import Project1 from "../../assets/projects/project1.jpg";
import Project2 from "../../assets/projects/project2.jpg";
import Project3 from "../../assets/projects/project3.jpg";
import Project4 from "../../assets/projects/project4.jpg";
import Project5 from "../../assets/projects/project5.jpg";

export const Data = [
  {
    id: 1,
    image: Project1,
    title: "Web Design",
    category: "web",
  },
  {
    id: 2,
    image: Project2,
    title: "Mobile Apps",
    category: "app",
  },
  {
    id: 3,
    image: Project3,
    title: "Brand Design",
    category: "design",
  },
  
];

export const NavigationModule = ({ slidesData }) => {
  return (
    <Swiper
      className="navigation__container"
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      navigation={true} // Enable navigation arrows
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
      modules={[Pagination, Navigation]} // Add Navigation to the modules array
    >
      {slidesData.map(({ id, image, title, description }) => (
        <SwiperSlide key={id}>
          <img src={image} alt={title} className="navigation__img" />
          <h3>{title}</h3>
          <p>{description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
