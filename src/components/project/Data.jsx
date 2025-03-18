import GOHockey from "../../assets/projects/GOHockey.jpg";
import JAM from "../../assets/projects/JAM.jpg";
import unitedWay from "../../assets/projects/unitedWay.png";
import TREA from "../../assets/projects/TREA.jpg";
import BGC from "../../assets/projects/BGC.png";
import YOU from "../../assets/projects/YOU.jpg";

export const Data = [
  
  {
    id: 1,
    image: GOHockey,
    title: "Website Redesign and Database Integration",
    link: "https://gohockey.org/",
  },

  {
    id: 2,
    image: JAM,
    title: "RFID Interactive Museum Exhibits",
  },
  
  {
    id: 3,
    image: unitedWay,
    title: "TD StairClimb Fundraising leaderboard",
    link: "https://jxohg.github.io/leaderboard-app",
  },

  {
    id: 4,
    image: TREA,
    title: "TREA",
  },

  {
    id: 5,
    image: BGC,
    title: "Website Google Analytics",
    link: "https://www.bgclondon.ca/",
  },
  
  {
    id: 6,
    image: YOU,
    title: "YOU",
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
      {slidesData.map(({ id, image, title, description, link }) => (
        <SwiperSlide key={id}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} className="navigation__img" />
            </a>
          ) : (
            <img src={image} alt={title} className="navigation__img" />
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </SwiperSlide>

      ))
      }
    </Swiper >
  );
};
