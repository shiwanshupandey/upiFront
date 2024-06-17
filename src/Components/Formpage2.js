import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import "./Form.css";
import { Parallax } from 'react-parallax';

async function sendToGoogleSpreadsheet(formData, file) {
  const data = new FormData();
  data.append('formData', JSON.stringify(formData));
  data.append('file', file);

  const response = await fetch('https://upi-test.vercel.app/', {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  // Parse the response JSON to get the image URL
  const responseData = await response.json();
  const imageUrl = responseData.imageUrl;
  return imageUrl;
}

function FormPage2() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const { formData } = location.state || {};
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for form submission

  useEffect(() => {
    // Check if formData is not available and redirect to Page 1
    if (!formData) {
      navigate('/'); // Redirect to Page 1
    }
  }, [formData, navigate]);

  const generateUPIQRCode = () => {
    const { name } = formData;
    const pa = '9860617102@axl';
    const pn = name;
    const am = 256.00;
    const timestamp = new Date().getTime(); // Generate a unique timestamp
    return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&tr=${timestamp}`; // Include timestamp in the UPI link
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      await sendToGoogleSpreadsheet(formData, file);
      setSubmitted(true);
      console.log('Data sent to Google Sheets');
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <Parallax strength={800} bgImage="/parallaxeffeect.jpg" className="parallax-section">
        {submitted ? (
          <div className="confirmation-message">
            <img src="./FormDone.jpg" alt="Success Image" className="success-image" />
            <h2>Form Submitted Successfully!</h2>
            <Link to="/" className="submit-another-link">Submit Another Form</Link>
          </div>
        ) : (
          <>
            <div className="qr-code-container">
              <QRCode value={generateUPIQRCode()} className="qr-code" />
            </div>

            <form onSubmit={handleSubmit}>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <button type="submit">
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </Parallax>
    </div>
  );
}

export default FormPage2;
