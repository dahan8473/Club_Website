import React from "react";
import "./home.css";
import Data from "./Data";
import logoGif from '../../assets/logo.gif'; 

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <img src={logoGif} alt="Logo" className="home__logo-gif" />
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
