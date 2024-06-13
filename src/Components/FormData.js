{
    "sections": [
      {
        "heading": "Applicant Information",
        "fields": [
            {
                "label": "Applicant's Name: (Middle, First, Last)",
                "type": "text",
                "name": "name",
                "placeholder": "Enter your name"
              },              
          {
            "label": "Birthdate:",
            "type": "date",
            "name": "birthdate"
          },
          {
            "label": "Mobile Number:",
            "type": "tel",
            "name": "mobileNumber",
            "placeholder": "Enter your mobile number",
            "pattern": "[0-9]*"
          },
          {
            "label": "Email-ID:",
            "type": "email",
            "name": "email",
            "placeholder": "Enter your email address"
          }
        ]
      },
      {
        "heading": "Address Information",
        "fields": [
          {
            "label": "Correspondence Address:",
            "type": "text",
            "name": "correspondenceAddress",
            "placeholder": "Enter your correspondence address"
          },
          {
            "label": "Permanent Address:",
            "type": "text",
            "name": "permanentAddress",
            "placeholder": "Enter your permanent address"
          }
        ]
      },
      {
        "heading": "Educational and Experience Details",
        "fields": [
          {
            "label": "Educational Details:",
            "type": "select",
            "name": "educationalDetails",
            "options": [
              { "value": "", "text": "Select" },
              { "value": "Elementary School", "text": "Elementary School (1-8)" },
              { "value": "Secondary School", "text": "Secondary School (9-12)" },
              { "value": "Bachelor's Degree", "text": "First University Degree (Bachelor's) (13-15)" },
              { "value": "Engineering Degree", "text": "First University Degree (Engineering & Technology) (13-16)" },
              { "value": "Master's Degree", "text": "Second University Degree (Master's) (16-17)" },
              { "value": "Doctoral Degree", "text": "Doctoral Degree" },
              { "value": "PhD", "text": "PhD" }
            ]
          },
          {
            "label": "Total Job Experience:",
            "type": "select",
            "name": "totalJobExperience",
            "options": [
              { "value": "", "text": "Select" },
              { "value": "Fresher", "text": "Fresher" },
              { "value": "Below 1 Year", "text": "Below 1 Year" },
              { "value": "1-2 years", "text": "1-2 years" },
              { "value": "2-3 years", "text": "2-3 years" },
              { "value": "3-4 years", "text": "3-4 years" },
              { "value": "5+ years", "text": "5+ years" }
            ]
          }
        ]
      },
      {
        "heading": "Payment Mode",
        "fields": [
          {
            "label": "Payment Mode:",
            "type": "checkbox",
            "name": "paymentMode",
            "options": [
              { "value": "Bank Transfer", "text": "Bank Transfer" },
              { "value": "UPI", "text": "UPI" }
            ]
          }
        ]
      }
    ]
  }
  
