import React from 'react';
import './FormIntro.css';
import Faqs from './Faqs/Faqs';
import FormData from "./FormData.json";
import Button from './Button/Button';

const FormIntro = () => {
  const imageUrl = "./Photouse.webp"; // Replace with the path to your image

  return (
    <div className='Intro-container'>
      {/* <img src="./logo.webp" alt='logo' className='ogcs-logo'/> */}
      
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
        <div className='EventDetails'>
  <div className='detail-item'>
    <img src='./icon1.webp' alt='Calendar icon' className='icon-FormIntro' />
    <h1 className='DetailsEventHeading'>When:</h1>
    <p className='DetailsEventPara'>20th July, 2024 at 3:00 PM</p>
  </div>
  <div className='detail-item'>
    <img src='./icon3.webp' alt='Money icon' className='icon-FormIntro' />
    <h1 className='DetailsEventHeading'>Training Fee:</h1>
    <p className='DetailsEventPara'>₹199/-</p>
  </div>
  <div className='detail-item'>
    <img src='./icon2.webp' alt='Clock icon' className='icon-FormIntro' />
    <h1 className='DetailsEventHeading'>Duration:</h1>
    <p className='DetailsEventPara'> 3 Hours (Live Online Program on Zoom)</p>
  </div>
  <div className='detail-item'>
    <img src='./icon4.webp' alt='Language icon' className='icon-FormIntro' />
    <h1 className='DetailsEventHeading'>Program Language:</h1>
    <p className='DetailsEventPara'> A mix of English and Hindi for better understanding, ensuring it directly touches your heart and mind.</p>
  </div>
</div>

        <h1 className='WhyHeading2'>Program Insight :</h1>
        <p className='WhyPara'>Participants will master the art of confidently handling interviews and presenting themselves with impact. They will learn to maintain assertive body language and employ powerful strategies to overcome various interview challenges. This program will also focus on effectively showcasing their skills and knowledge, empowering participants to highlight their strengths compellingly during interviews.</p>
        
        <Faqs data={FormData.faqs}/>
        {/* <a href="https://www.ogcs.co.in/about-us" target="_blank" rel="noopener noreferrer" className='Link-pages'><FontAwesomeIcon icon={faArrowRight} /> About Us</a> */}
      </div>
    </div>
  )
}

export default FormIntro;
