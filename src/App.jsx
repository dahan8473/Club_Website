import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Member from "./components/member/Member";
import Services from "./components/services/Services";
import Project from "./components/project/Project";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Project />
        <Member />
        <Services />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
