// src/TrainersSection.js
import React from 'react';
import trainers from './trainersData';
import './TrainersSection.css'; // Import your CSS file for styling

const TrainersSection = () => {
  return (
    <div className="trainers-container">
      <h1>Meet Our Trainers</h1>
      <div className="trainers-list">
        {trainers.map(trainer => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} className="trainer-image" />
            <div className="trainer-info">
              <h2 className="trainer-name">{trainer.name}</h2>
              <h3 className="trainer-specialty">{trainer.specialty}</h3>
              <p className="trainer-bio">{trainer.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainersSection;
