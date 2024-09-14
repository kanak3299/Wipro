import React, { useState } from 'react';

function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Password reset link sent to ' + email);
    onBack();
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={onBack}>Back to Login/Register</button>
    </div>
  );
}

export default ForgotPassword;
