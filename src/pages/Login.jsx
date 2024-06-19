import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any previous error

    try {
      const response = await axios.post('/api/login', values);
      // Handle successful login (e.g., redirect, store token, etc.)
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle error (e.g., display error message)
      setError('Invalid username or password');
    }
  };

  return (
    <div className='auth'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {error && <p className='error-message'>{error}</p>}
        <span className='register-link'>Don't have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  );
}

export default Login;
