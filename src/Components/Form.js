import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './Form.css'; // Import the CSS file
import formData from './FormData.json'; // Import the JSON file

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

  const responseData = await response.json();
  const imageUrl = responseData.imageUrl;
  return imageUrl;
}

function FormPage1() {
  const [formFields, setFormFields] = useState([]);
  const [formDataState, setFormDataState] = useState({
    name: '',
    birthdate: '',
    mobileNumber: '',
    email: '',
    Address: '',
    educationalDetails: '',
    totalJobExperience: '',
    paymentMode: [], // Initialize as an empty array
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormFields(formData.sections);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormDataState({ ...formDataState, [name]: files[0] });
    } else if (type === 'checkbox') {
      const newPaymentMode = [...formDataState.paymentMode];
      if (checked) {
        newPaymentMode.push(value);
      } else {
        const index = newPaymentMode.indexOf(value);
        if (index !== -1) {
          newPaymentMode.splice(index, 1);
        }
      }
      setFormDataState({ ...formDataState, [name]: newPaymentMode });
    } else {
      setFormDataState({ ...formDataState, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    formFields.forEach(section => {
      section.fields.forEach(field => {
        if (!formDataState[field.name]) {
          newErrors[field.name] = 'This field is required';
        }
      });
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      try {
        await sendToGoogleSpreadsheet(formDataState, formDataState.file);
        setSubmitted(true);
        console.log('Data sent to Google Sheets');
      } catch (error) {
        console.error('Error sending data to Google Sheets:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const generateUPIQRCode = () => {
    const { name } = formDataState;
    const pa = 'OGCS971.07@cmsidfc'; // Your UPI ID
    const pn = name || 'Applicant'; // Use the applicant's name or a default
    const am = 199.00; // Amount
    const timestamp = new Date().getTime();
    return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&tr=${timestamp}`;
  };

  // Function to handle redirection to payment app
  const handlePaymentRedirect = () => {
    const upiUrl = generateUPIQRCode();
    window.location.href = upiUrl;
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="confirmation-message">
          <img src="./FormDone.webp" alt="SuccessImage" className="success-image" />
          <h2>Form Submitted Successfully!</h2>
          <Link
            to="/page1"
            className="submit-another-link"
            onClick={() => window.location.reload()}
          >
            Submit Another Form
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className='Form-AbovecontainerImage'>
            <div className="logo-container">
              <img src='./logo.webp' alt='logo' className='ogcs-logo' />
            </div>
            <div className="form-background">
              <img src="/imageForm.jpeg" alt="Background" className="background-image" />
              <div className="form-overlay">
                <h1 className='form-headingtext'>Mastery Interview Success Program</h1>
                <p className='form-description'>Please fill out the form below to complete your application.</p>
              </div>
            </div>
            <div className="logo-container">
              <img src='./logo.webp' alt='logo' className='ogcs-logo' />
            </div>
          </div>

          {formFields.map((section, index) => (
            <div key={index} >
              {section.fields.map((field, idx) => (
                <label key={idx} className='Form-MainCotainer'>
                  <h1 className='Form-headingtext'>{field.label}</h1>
                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formDataState[field.name]}
                      onChange={handleChange}
                    >
                      {field.options.map((option, i) => (
                        <option key={i} value={option.value}>{option.text}</option>
                      ))}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <div className='checkboxform-Contain'>
                      {field.options.map((option, i) => (
                        <label key={i}>
                          <input
                            type="checkbox"
                            name={field.name}
                            value={option.value}
                            checked={formDataState.paymentMode.includes(option.value)}
                            onChange={handleChange}
                          />
                          {option.text}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formDataState[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder || ''}
                      pattern={field.pattern || ''}
                    />
                  )}
                  {errors[field.name] && <span className="error">{errors[field.name]}</span>}
                </label>
              ))}
            </div>
          ))}
          <div className="qr-code-container">
            {/* QR code component */}
            <div className="qr-code" onClick={handlePaymentRedirect}>
              <QRCode value={generateUPIQRCode()}  className='QrCodeIcon'/>
            </div>
          </div>
          <h1 className='Form-qrheadingtext'>Scan QR Code Or Click On It</h1>
          <p className='Form-qrParatext'>(complete payment after uploading the screenshot below)</p>
          <div className='file-upload-container'>
            <input type="file" accept="image/*" onChange={handleChange} name="file" />
          </div>

          <button type="submit">
            {loading ? 'Submitting...Wait For 10 Sec' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
}

export default FormPage1;
