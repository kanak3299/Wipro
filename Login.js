// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import'./Login.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace this with real authentication logic
    if (username === 'admin' && password === 'password') {
      navigate('/admin-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    
    <><div className="adminimage">
      <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?t=st=1726166588~exp=1726170188~hmac=5e1e026b65fa2e10bfc4f18d261154b2dd7e69fb6fe5d0c786c65a85f58fab26&w=740" alt="" className="adminimage" />
    </div><form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="submit-button" type="submit">Login</button>
      </form></>
  );
};

export default LoginForm;
