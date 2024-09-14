
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_qw2cujv', 'template_7z0nohr', formData, '7N43rsnuE-Nk0J-BQ')
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setStatus('Failed to send message.');
        console.error('Error sending email:', error);
      });
  };

  return (
    <><div className="image">
          <img src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg" alt=" " />
      </div
      ><div className="contact">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label>Name:</label>
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required />
                  </div>
                  <div>
                      <label>Email:</label>
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required />
                  </div>
                  <div>
                      <label>Message:</label>
                      <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                      ></textarea>
                  </div>
                  <button type="submit">Send</button>
              </form>
              {status && <p>{status}</p>}
          </div></>
  );
};

export default ContactForm;
