import './About.css'
import logo from "../assets/images/tsi_logo_globe.png"


export default function About(){
    return(
      <div>
        <div>
        <h1>About us..</h1>
        <h2 class="text">At TSI, we are committed to providing tech solutions for organizations committed to social good. Our mission is to create opportunities for Western students to collaborate in a professional work environment while addressing the needs of organizations that are actively working to improve our society.
        </h2>
      <img class="logo fade" src={logo}/></div>
        <div><h1>Our Goals</h1>
          <h2 class="subtext">Community Outreach</h2>
          <br></br>
          <h3 class="text">Based in the city of London within the University of Western Ontario, we are dedicated to helping out our local community and non-profit organizations by providing help with technologies.</h3>
          {/*insert Western Uni logo*/}

          <hr></hr>
          <h2 class="subtext">Empowering Students</h2><br></br>
          <h3 class="text">We aim to help students at UWO to grow their experience and expertises in technology, software development, and project management.</h3>
        </div>
      
        <section class="end"></section>




        
      </div>
      
      
     
      
      
      
    )
}