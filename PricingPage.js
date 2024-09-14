// src/PricingPage.js
import React from 'react';
import './PricingPage.css';

const pricingPlans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '₹2900/month',
    features: [
      'Access to gym equipment',
      '1 free personal training session',
      'Group fitness classes'
    ]
  },
  {
    id: 2,
    name: 'Quartely Plan',
    price: '₹7700/quarterly',
    features: [
      'Access to gym equipment',
      '5 free personal training sessions',
      'Unlimited group fitness classes',
      'Free towel service'
    ]
  },
  {
    id: 3,
    name: 'Half yearly Plan',
    price: '₹14790/halfyearly',
    features: [
      'Access to gym equipment',
      '10 free personal training sessions',
      'Unlimited group fitness classes',
      'Free towel service',
      'Access to exclusive workshops'
    ]
  },
  {
    id: 4,
    name: 'Yearly Plan',
    price: '₹27000/year',
    features: [
      'One more year membership',
      '20 free personal training sessions',
      'Unlimited group fitness classes',
      'Free towel service',
      'vechicle service for women'
      
    ]
  }
];

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <h1>Our Membership Plans</h1>
      <div className="pricing-cards">
        {pricingPlans.map(plan => (
          <div key={plan.id} className="pricing-card">
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="btn">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
