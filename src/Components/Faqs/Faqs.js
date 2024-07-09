import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './Faqs.css'; // Import CSS for styling

const Faqs = ({ data }) => {
  // State to manage visibility of answers
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle visibility of answer
  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <h3 className='heading-Faqs'>FAQ's</h3>
      <div className="faqs-container">
        {/* Map through data to render questions and answers */}
        {data.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="question-icon"
              />
              {faq.question}
              {/* Render down or up icon based on openIndex */}
              <FontAwesomeIcon
                icon={openIndex === index ? faChevronUp : faChevronDown}
                className={`icon-question ${openIndex === index ? 'active' : ''}`}
              />
            </div>
            {openIndex === index && (
              <div className="answer">{faq.answer }</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
