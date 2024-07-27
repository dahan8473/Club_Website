import construction from '../assets/images/construction.png'
import logo from '../assets/images/logo.png'
import './Projects.css'
import western from "../assets/images/UWO.png"
import gadget from "../assets/images/Gadget.png"
import book from "../assets/images/Reading Book.png"
import home from "../assets/images/Home.png"
import app from "../assets/images/Application.png"
import internet from "../assets/images/Internet.png"
import lightbulb from "../assets/images/lightbulb.png"
import Spline from "@splinetool/react-spline";

export default function Projects() {
  return (
    <>
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
              Projects
            </h1>
            <p class="subtext1">

            </p>
          </div>
        </div>
      </div>

      <div>

        <h1 class="kanit-heavy">Project List</h1>
        <div class="projects-container">
          <img class="graphics" src={internet} />
          <div class="text-body"><h1 class="kanit-medium">Website Development</h1><h2 class="kanit-light">Created by our talented students in Computer Science and software engineering </h2></div>
        </div>

        <div class="projects-container">
          <img class="graphics" src={gadget} />
          <div class="text-body"><h1 class="kanit-medium">Custom Gadgets</h1><h2 class="kanit-light">From remote controlled devices to customized Asthma Inhaler Counters, our engineering students can create customized gadgets for the community. </h2></div>
        </div>

        <div class="projects-container">
          <img class="graphics" src={lightbulb} />
          <div class="text-body"><h1 class="kanit-medium">Technology Workshops</h1><h2 class="kanit-light">Our students can help run technology workshops or education sessions for the community. </h2></div>
        </div>

        <div class="projects-container">
          <img class="graphics" src={app} />
          <div class="text-body"><h1 class="kanit-medium">Custom Applications</h1><h2 class="kanit-light">We can create customized application for managing your databases. </h2></div>
        </div>

      </div>
    </>
  )
}
