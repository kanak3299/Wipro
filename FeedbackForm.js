// src/FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css'; // Import your CSS file for styling

const FeedbackForm = () => {
  // State to hold form inputs and feedback list
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (name.trim() === '' || message.trim() === '') {
      alert('Please fill in both fields.');
      return;
    }

    // Create a new feedback object
    const newFeedback = { name, message };
    
    // Update feedback list with the new feedback
    setFeedbackList([...feedbackList, newFeedback]);

    // Clear form fields
    setName('');
    setMessage('');
  };


  return (
   <>
   <div className="feedbackimage">
      <img src="https://t3.ftcdn.net/jpg/03/76/66/16/360_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6.jpg" alt=""  className="feedbackimage"/>
    </div>
    <div className="feedback-container">
        <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
        <div className="feedback-list">
          <h2>Feedback Received</h2>
          {feedbackList.length === 0 ? (
            <p>No feedback yet.</p>
          ) : (
            <ul>
              {feedbackList.map((feedback, index) => (
                <li key={index}>
                  <strong>{feedback.name}:</strong> {feedback.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div></>
  );
};

export default FeedbackForm;
