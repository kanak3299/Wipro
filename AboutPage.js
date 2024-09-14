// src/AboutPage.js
import React from 'react';
import './AboutPage.css'; // Import your CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1><u>About Us</u></h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Muscle Gym, our mission is to empower individuals to achieve their
            fitness goals and lead a healthier lifestyle. We believe that fitness is
            not just about working out; it's about creating a positive and supportive
            community where everyone can thrive.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Facilities</h2>
          <p>
            Our state-of-the-art facility is equipped with the latest fitness technology,
            including top-of-the-line cardio machines, free weights, and functional training
            areas. We also offer a variety of group classes, personal training sessions,
            and wellness programs designed to cater to all fitness levels.
          </p>
        </div>
        <div className="about-section">
          <h2>Meet Our Team</h2>
          <p>
            Our team of certified trainers and wellness experts are dedicated to helping
            you reach your fitness goals. With years of experience and a passion for
            health and fitness, our trainers are here to provide personalized guidance
            and motivation every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
