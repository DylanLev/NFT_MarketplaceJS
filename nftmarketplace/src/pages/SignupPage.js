import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
    } else if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setErrorMessage('Password must contain at least one digit and one symbol');
    } else {
      // Logic to handle signup
      setErrorMessage('');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit">Sign Up</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
        <div className="login-link">
          Already have an account? <Link to="/LoginPage">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
