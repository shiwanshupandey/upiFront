import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';
import "./Form.css";
import { Parallax } from 'react-parallax';

async function sendToGoogleSpreadsheet(formData, file) {
  const data = new FormData();
  data.append('formData', JSON.stringify(formData));
  data.append('file', file);

  const response = await fetch('https://upi-test-7ozdnnjww-shiwanshuanooppandeygmailcoms-projects.vercel.app/', {
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
  const { formData } = location.state || {};
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  // const [amount, setAmount] = useState('');

  // amount = 256.00;

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

  // const handleAmountChange = (e) => {
  //   setAmount(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendToGoogleSpreadsheet(formData, file);
      setSubmitted(true);
      console.log('Data sent to Google Sheets');
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
    }
  };

  return (
    <div>
      <Parallax strength={800} bgImage="/parallaxeffeect.jpg" className="parallax-section">
      {submitted ? (
        <div className="confirmation-message">
          <h2>Form Submitted Successfully!</h2>
        </div>
      ) : (
        <>
          <div className="qr-code-container">
              <QRCode value={generateUPIQRCode()} className="qr-code" />
            </div>

          <form onSubmit={handleSubmit}>
            {/* <label>
              Select Amount:
              <select value={amount} onChange={handleAmountChange}>
                <option value="">Select</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label> */}
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      </Parallax>
    </div>
  );
}

export default FormPage2;
