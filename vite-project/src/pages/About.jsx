import './About.css'
import logo from "../assets/images/tsi_logo_globe.png"
import Spline from "@splinetool/react-spline";
import western from "../assets/images/western.png"
export default function About(){
    return(
      <div>
        <div
          className="hero max-h-[100vh] shadow-xl relative"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,43,58,1) 0%, rgba(36,127,145,1) 42%, rgba(191,219,247,1) 82%)",
          }}
        >
          <Spline
            scene="https://prod.spline.design/e1CKVNoHsLUf8pk9/scene.splinecode"
            style={{ height: "100%", width: "100%" }}
            cameraControls
          />

          <div className="hero-overlay bg-white/40 absolute inset-0 pointer-events-none"></div>

          <div className="hero-content text-neutral-content text-center relative z-10 pointer-events-auto">
            <div className="max-w-md">
              <h1 class="heading1" className="mb-5 text-5xl font-primary font-bold">
                About Us
              </h1>
              <p class="subtext1">
                At TSI, we are committed to providing tech solutions for organizations committed to social good. Our mission is to create opportunities for Western students to collaborate in a professional work environment while addressing the needs of organizations that are actively working to improve our society.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <img class="western" src={western}/>
        <h2 class="subtext21>Non-profit Organization started by Students at Western University!
        </h2>
          
          
      <img class="logo fade" src={logo}/></div>
        <div><h1 class="heading2">Our Goals</h1>
          <br></br><br></br>
          <h2 class="subtext2">Community Outreach</h2>
          <br></br>
          <h3 class="text">Based in the city of London within the University of Western Ontario, we are dedicated to helping out our local community and non-profit organizations by providing help with technologies.</h3>
          {/*insert Western Uni logo*/}
          <br></br><br></br>

          <hr></hr>
          <h2 class="subtext2">Empowering Students</h2><br></br>
          <h3 class="text">We aim to help students at UWO to grow their experience and expertises in technology, software development, and project management.</h3>
        </div>
      
        <section class="end"></section>




        
      </div>
      
      
     
      
      
      
    )
}
