import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Importing a CSS file for component-specific styles

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., validate inputs, register user)
    // You can implement this logic using state management (e.g., useState, useContext) or Redux.
    // Example: console.log('Form submitted');
  };

  return (
    <div className='auth'>
      
      <form className='register-form' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
        <p className='error-message'>This is an error message</p>
        <span className='login-link'>Already have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  );
}

export default Register;
