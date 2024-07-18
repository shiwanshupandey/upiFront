import React from 'react';
import './FormIntro.css';
import Faqs from './Faqs/Faqs';
import FormData from "./FormData.json";
import Button from './Button/Button';
import { Helmet } from 'react-helmet';

const FormIntro = () => {
  const imageUrl = "./Photouse.webp"; // Replace with the path to your image

  return (
    <div className='Intro-container'>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Event Details - Interview Skills Training</title>
        <meta name="description" content="Join our live online program on 20th July, 2024 at 3:00 PM to master the art of confidently handling interviews and presenting yourself with impact. Register now for just ₹199/-." />
        <meta name="keywords" content="Interview Skills, Training, Online Program, Interview Confidence, Job Interview, Professional Development" />
        <meta property="og:title" content="Event Details - Interview Skills Training" />
        <meta property="og:description" content="Join our live online program on 20th July, 2024 at 3:00 PM to master the art of confidently handling interviews and presenting yourself with impact. Register now for just ₹199/-." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://upi-front.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Event Details - Interview Skills Training" />
        <meta name="twitter:description" content="Join our live online program on 20th July, 2024 at 3:00 PM to master the art of confidently handling interviews and presenting yourself with impact. Register now for just ₹199/-." />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <header>
        <h1 className='WhyHeading'>Event Details</h1>
      </header>

      <div className="image-responsive">
        <img
          src={imageUrl}
          alt=""
          width="800"
          height="700"
          className="intro-image"
        />
      </div>

      <main className='Why-Course'>
        
          <div className="button-Register-container">
            <Button to="/page1" className="button-Register">Register Now</Button>
          </div>
          
          <section className='EventDetails'>
            <div className='detail-item'>
              <img src='./icon1.webp' alt='Calendar icon' className='icon-FormIntro' />
              <h2 className='DetailsEventHeading'>When:</h2>
              <p className='DetailsEventPara'>20th July, 2024 at 3:00 PM</p>
            </div>
            <div className='detail-item'>
              <img src='./icon3.webp' alt='Money icon' className='icon-FormIntro' />
              <h2 className='DetailsEventHeading'>Training Fee:</h2>
              <p className='DetailsEventPara'>₹199/-</p>
            </div>
            <div className='detail-item'>
              <img src='./icon2.webp' alt='Clock icon' className='icon-FormIntro' />
              <h2 className='DetailsEventHeading'>Duration:</h2>
              <p className='DetailsEventPara'>3 Hours (Live Online Program on Zoom)</p>
            </div>
            <div className='detail-item'>
              <img src='./icon4.webp' alt='Language icon' className='icon-FormIntro' />
              <h2 className='DetailsEventHeading'>Program Language:</h2>
              <p className='DetailsEventPara'>A mix of English and Hindi for better understanding, ensuring it directly touches your heart and mind.</p>
            </div>
          </section>

          <section>
            <h2 className='WhyHeading2'>Program Insight :</h2>
            <p className='WhyPara'>Participants will master the art of confidently handling interviews and presenting themselves with impact. They will learn to maintain assertive body language and employ powerful strategies to overcome various interview challenges. This program will also focus on effectively showcasing their skills and knowledge, empowering participants to highlight their strengths compellingly during interviews.</p>
          </section>
          
          <Faqs data={FormData.faqs}/>
          
          <div className="button-Register-container">
            <Button to="/page1" className="button-Register">Register Now</Button>
          </div>
        
      </main>
    </div>
  );
}

export default FormIntro;
