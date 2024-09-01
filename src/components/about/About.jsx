import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Us</h2>

      <div className='about__container container'>
        <div className='about__data'>
          <p className='about__description'>
            At TSI, we are committed to providing tech solutions for organizations committed to social good. Our mission is to create 
            opportunities for Western students to collaborate in a professional work environment while addressing the needs of organizations 
            that are actively working to improve our society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;