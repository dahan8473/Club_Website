import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Team from './pages/Team'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto+Condensed&display=swap" rel="stylesheet"/>
      </head>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/projects" element = {<Projects />} />
          <Route path="/team" element = {<Team />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
