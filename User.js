import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import AuthForm from './AuthForm';

import './Auth.css';

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPasswordClick = () => setShowForgotPassword(true);
  const handleBackToAuthForm = () => setShowForgotPassword(false);

  return (
    
    <div className="App">
        <div className="image-section">
                <img src=" https://t4.ftcdn.net/jpg/03/86/51/03/240_F_386510351_03Qk3je4FGnVLo4vXRdOpoDWfZjtmajd.jpg " alt="   " className="image-section "/>
            </div>
        
      {showForgotPassword ? (
        <ForgotPassword onBack={handleBackToAuthForm} />
      ) : (
        <>
          <h1>Credentials</h1>
          <AuthForm />
          <button onClick={handleForgotPasswordClick}>Forgot Password</button>
        </>
      )}
    </div>
  );
}

export default App;
