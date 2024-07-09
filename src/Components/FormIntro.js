import React from 'react';
import './FormIntro.css';
import Faqs from './Faqs/Faqs';
import FormData from "./FormData.json";
import Button from './Button/Button';

const FormIntro = () => {
  const videoUrl = "https://drive.google.com/file/d/1Is6IxeO7Nl2GN7B4yyRnytIwD24nSWmr/preview";

  return (
    <div className='Intro-container'>
      {/* <img src="./logo.webp" alt='logo' className='ogcs-logo'/> */}
      
      <div className="video-responsive">
        <iframe
          src={videoUrl}
          width="1500"
          height="600"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
          title="Intro Video"
        ></iframe>
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

        <h1 className='WhyHeading2'>Know Your Trainer..!!</h1>
        <p className='WhyTrainer'>Baba Ohol – A Civil Engineer turned Corporate Trainer and Motivational Speaker, bringing 31 years of rich experience in the Construction Industry, working with diverse organizations at various levels across India and abroad. Having conducted countless interviews and interacted with numerous individuals, he has designed this program for your success: "Mastery in Interview Success."</p>
        
        <h1 className='WhyHeading2'>Program Insight :</h1>
        <p className='WhyPara'>Participants will master the art of confidently handling interviews and presenting themselves with impact. They will learn to maintain assertive body language and employ powerful strategies to overcome various interview challenges. This program will also focus on effectively showcasing their skills and knowledge, empowering participants to highlight their strengths compellingly during interviews.</p>
        
        <Faqs data={FormData.faqs}/>
        {/* <a href="https://www.ogcs.co.in/about-us" target="_blank" rel="noopener noreferrer" className='Link-pages'><FontAwesomeIcon icon={faArrowRight} /> About Us</a> */}
      </div>
    </div>
  )
}

export default FormIntro;
