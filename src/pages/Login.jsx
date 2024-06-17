import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importing a CSS file for component-specific styles

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., validate inputs, authenticate user)
    // You can implement this logic using state management (e.g., useState, useContext) or Redux.
    // Example: console.log('Form submitted');
  };

  return (
    <div className='auth' >
      
      <form className='login-form' onSubmit={handleSubmit}>
      <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p className='error-message'>This is an error message</p>
        <span className='register-link'>Don't have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  );
}

export default Login;
