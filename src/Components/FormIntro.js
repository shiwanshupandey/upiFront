import React from 'react';
import { Link } from 'react-router-dom';
import './FormIntro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FormIntro = () => {
  const videoUrl = "https://drive.google.com/file/d/1Is6IxeO7Nl2GN7B4yyRnytIwD24nSWmr/preview";

  return (
    <div className='Intro-container'>
      <img src="./logo.webp" alt='logo' className='ogcs-logo'/>
      
      <div className="video-responsive">
        <iframe
          src={videoUrl}
          width="950"
          height="550"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
          title="Intro Video"
        ></iframe>
      </div>

      <div className='Why-Course'>
        <h1 className='WhyHeading'>Why This Course?</h1>
        <p className='WhyPara'>This course is designed to provide you with a comprehensive understanding of the basics of programming. It covers the fundamental concepts of computer programming, such as variables, data types, control structures, and functions. By the end of this course, you will be able to write and execute simple programs in a variety of programming languages.</p>
        <Link to="/page1" className='Link-pages'><FontAwesomeIcon icon={faArrowRight} /> Register Now</Link>
        <a href="https://www.ogcs.co.in/about-us" target="_blank" rel="noopener noreferrer" className='Link-pages'><FontAwesomeIcon icon={faArrowRight} /> About Us</a>
      </div>
    </div>
  )
}

export default FormIntro;
