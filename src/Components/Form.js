import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the CSS file
import { Parallax } from 'react-parallax';
import formData from './FormData.json'; // Import the JSON file

function FormPage1() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState([]);
  const [formDataState, setFormDataState] = useState({
    // Initial form data state
    name: '',
    birthdate: '',
    mobileNumber: '',
    email: '',
    correspondenceAddress: '',
    permanentAddress: '',
    educationalDetails: '',
    totalJobExperience: '',
    paymentMode: []
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch form data from JSON file on component mount
    setFormFields(formData.sections);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Handle checkbox inputs separately
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      navigate('/page2', { state: { formData: formDataState } });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Parallax strength={800} bgImage="/parallaxeffeect.jpg" className="parallax-section">
      
      <form onSubmit={handleSubmit} noValidate>
      <div className="form-background">
        <div className="form-overlay">
          <h1 className='form-headingtext'>Mastery Interview Success Program</h1>
          <p className='form-description'>Please fill out the form below to complete your application.</p>
        </div>
      </div>
        {formFields.map((section, index) => (
          <div key={index}>
            {section.fields.map((field, idx) => (
              <label key={idx}>
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
        <button type="submit">Next</button>
      </form>
    </Parallax>
  );
}

export default FormPage1;
