import React, { useState } from 'react';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (isLogin) {
      if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials!');
      }
    } else {
      if (storedUser) {
        alert('User already exists!');
      } else {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Registration successful!');
      }
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
