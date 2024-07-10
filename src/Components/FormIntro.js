import React from 'react';
import './FormIntro.css';
import Faqs from './Faqs/Faqs';
import FormData from "./FormData.json";
import Button from './Button/Button';

const FormIntro = () => {
  const imageUrl = "./Photouse.png"; // Replace with the path to your image

  return (
    <div className='Intro-container'>
      
      <div className="image-responsive">
        <img
          src={imageUrl}
          alt="Intro Image"
          width="800"
          height="700"
          className="intro-image"
        />
      </div>

      <div className='Why-Course'>
        <div className="button-Register-container">
          <Button to="/page1" className="button-Register">Register Now</Button>
        </div>
        
        <h1 className='WhyHeading'>Event Details</h1>
        <p className='EventDetails'>
          <strong>When:</strong> 20th July, 2024 at 3:00 PM<br/>
          <strong>Duration:</strong> 3 Hours (Live Online Program on Zoom)<br/>
          <strong>Training Fee:</strong> ₹199/-<br/>
          <strong>Program Language:</strong> A mix of English and Hindi for better understanding, ensuring it directly touches your heart and mind.
        </p>
        <h1 className='WhyHeading2'>Program Insight :</h1>
        <p className='WhyTrainer'>Participants will master the art of confidently handling interviews and presenting themselves with impact. They will learn to maintain assertive body language and employ powerful strategies to overcome various interview challenges. This program will also focus on effectively showcasing their skills and knowledge, empowering participants to highlight their strengths compellingly during interviews.</p>
        
        <Faqs data={FormData.faqs}/>
        {/* <a href="https://www.ogcs.co.in/about-us" target="_blank" rel="noopener noreferrer" className='Link-pages'><FontAwesomeIcon icon={faArrowRight} /> About Us</a> */}
      </div>
    </div>
  )
}

export default FormIntro;
