import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the CSS file

function FormPage1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    mobileNumber: '',
    email: '',
    correspondenceAddress: '',
    permanentAddress: '',
    educationalDetails: '',
    totalJobExperience: '',
    paymentMode: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      navigate('/page2', { state: { formData: formData } });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <label>
        Applicant's Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label>
        Birthdate:
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <span className="error">{errors.birthdate}</span>}
      </label>
      <label>
        Mobile Number:
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
      </label>
      <label>
        Email-ID:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Correspondence Address:
        <input
          type="text"
          name="correspondenceAddress"
          value={formData.correspondenceAddress}
          onChange={handleChange}
        />
        {errors.correspondenceAddress && <span className="error">{errors.correspondenceAddress}</span>}
      </label>
      <label>
        Permanent Address:
        <input
          type="text"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
        />
        {errors.permanentAddress && <span className="error">{errors.permanentAddress}</span>}
      </label>
      <label>
        Educational Details:
        <select
          name="educationalDetails"
          value={formData.educationalDetails}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="High School">High School</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.educationalDetails && <span className="error">{errors.educationalDetails}</span>}
      </label>
      <label>
        Total Job Experience:
        <select
          name="totalJobExperience"
          value={formData.totalJobExperience}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="0-1 years">0-1 years</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>
        {errors.totalJobExperience && <span className="error">{errors.totalJobExperience}</span>}
      </label>
      <label>
        Payment Mode:
        <select
          name="paymentMode"
          value={formData.paymentMode}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="UPI">UPI</option>
          <option value="Net Banking">Net Banking</option>
        </select>
        {errors.paymentMode && <span className="error">{errors.paymentMode}</span>}
      </label>
      <button type="submit">Next</button>
    </form>
  );
}

export default FormPage1;
