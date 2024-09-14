// src/GalleryPage.js
import React from 'react';
import './GalleryPage.css';

// Array of image objects
const images = [
  { src: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600', alt: '' },
  { src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600', alt: '' },
  { src: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600', alt: '' },
  { src: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=600', alt: '' },
  { src: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=600', alt: '' },
  { src: 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=600', alt: '' },
  { src: 'https://media.istockphoto.com/id/531326798/photo/personal-trainer-caring-woman-with-her-workout.jpg?s=612x612&w=0&k=20&c=4tAwP1yZjInYMe_fxJQzCCX7kP0z0RPStKljBoTkJAU=', alt: '' },
  { src: 'https://media.istockphoto.com/id/1470234996/photo/woman-sitting-in-a-fitness-studio-with-her-yoga-class.jpg?s=612x612&w=0&k=20&c=PW0frpWedwpoux9hNCuVuzYYLsRSQxo0FtLtPYOk14c=', alt: '' },
  { src: 'https://media.istockphoto.com/id/1198930471/photo/group-of-multi-ethnics-people-learning-yoga-class-in-fitness-club-female-caucasian-instructor.jpg?s=612x612&w=0&k=20&c=JGKNpLSaaHoLnjlSw2GPacENtgsgJE_0cVWo4QAzNfk=', alt: '' },
  { src: 'https://media.istockphoto.com/id/1138386337/photo/come-on-one-more-push-up.jpg?s=612x612&w=0&k=20&c=wjOxHaY5FU7mLCrvMygxOiBeBMddJjM4fvD6UFr5GOs=', alt: '' },
  { src:'https://media.istockphoto.com/id/845910988/photo/female-fitness-instructor-showing-exercise-progress-on-clipboard-to-young-athletic-woman-at-gym.jpg?s=612x612&w=0&k=20&c=Sr4m0_jeFooRCjygszDCYzioC3Kbm-n7-Gwna0EVsuA=',alt: '' },
  { src:'https://media.istockphoto.com/id/1309886139/photo/asian-woman-doing-barbell-squats-with-the-assistance-of-a-trainer.jpg?s=612x612&w=0&k=20&c=QnLJjnMoBxVwvKjWzGz501A9VZvSsndOmV4d0x4IcjY=',alt: '' },
  { src:'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114193.jpg',alt: '' },
  { src:'https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg',alt: '' },
  { src:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww',alt: '' },
  { src:'https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png',alt: '' },
  { src:'https://images.pond5.com/sports-and-gym-activities-footage-207076334_iconl.jpeg',alt: '' },
  { src:'https://img.freepik.com/premium-photo/female-coach-is-helping-sportswoman-with-lunges-exercises-gym_232070-19474.jpg',alt: '' },

];

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
