// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HomePage from './HomePage';
import AboutPage from './AboutPage'; // Example of another page
import ContactForm from './ContactForm';
import PricingPage from './PricingPage';
import GalleryPage from './GalleryPage';
import TrainersSection from './TrainersSection';
import FeedbackForm from './FeedbackForm';
import './styles.css';
import BlogPage from './BlogPage';
import RegisterPage from './RegisterPage';
import AdminDashboard from './AdminDasboard';
import Login from './Login';
import User from './User'

import ForgotPassword from './ForgotPassword';
import AuthForm from './AuthForm';




function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
           
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/trainer">Trainer</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Admin</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="trainer" element={<TrainersSection/>} />
          <Route path="feedback" element={<FeedbackForm/>} />
          <Route path="login" element={<Login/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/AuthForm" element={<AuthForm />} />   
          <Route path="/ForgotPassword" element={<ForgotPassword />} />    
          
         
          
          
          
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
