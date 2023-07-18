import React from 'react';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        Don't have an account yet? <Link to="/SignupPage">Create one</Link>
      </div>
      <button id="mainbtn"><Link to="/">Back to Main page</Link></button>
    </div>
  );
};

export default LoginPage;
