import React, { useState } from 'react';
import '/src/practice.css'; // Ensure this path is correct
function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);


    // You can add logic to send the form data to an API or email service here
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
         <input
          type="mobile"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
         
          maxLength={10}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit"className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;
