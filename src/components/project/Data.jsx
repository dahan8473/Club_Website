import Project1 from "../../assets/projects/project1.jpg";
import Project2 from "../../assets/projects/project2.jpg";
import Project3 from "../../assets/projects/project3.jpg";
import Project4 from "../../assets/projects/project4.jpg";
import Project5 from "../../assets/projects/project5.jpg";
import Team5 from "../../assets/projects/team5.png";
import Team3 from "../../assets/projects/team3.png";
import Team1 from "../../assets/projects/team1.png";
import Team2 from "../../assets/projects/team2.jpg";
import Team6 from "../../assets/projects/team6.jpg";
import Team7 from "../../assets/projects/team7.jpg";
export const Data = [
  
  {
    id: 1,
    image: Team1,
    title: "Daya Counselling: Custom scheduler",
    category: "app",
  },
  {
    id: 2,
    image: Team2,
    title: "Youtth Opportunities Unlimited: Workflow Management software",
    category: "app",
  },
  {
    id: 3,
    image: Team3,
    title: "Boys and Girls Club London: Website Google Analytics",
    category: "web",
    link: "https://www.bgclondon.ca/",
  },
  
  {
    id: 5,
    image: Team5,
    title: "United Way Elgin-Middlesex: TD StairClimb Fundraising leaderboard",
    category: "web",
    link: "https://jxohg.github.io/leaderboard-app",
  },
  {
    id: 6,
    image: Team6,
    title: "Jet Aircraft Museym: RFID Interactive devices",
    category: "Gadgets",
   
  },
  {
    id: 7,
    image: Team7,
    title: "Girls Only Hockey: Website Redesign and Database Integration",
    category: "web",
    
   
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
