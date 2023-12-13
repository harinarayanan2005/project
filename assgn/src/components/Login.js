import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in user', formData);
    // Implement your login logic here
  };

  return (
    <div className='login-container'>

    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* <label>
        Email: */}
        <input
          type="email"
          name="email"placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      {/* </label> */}
      {/* <label>
        Password: */}
        <input
          type="password"
          name="password"placeholder='Password'
          value={formData.email}
          onChange={handleChange}
          required
        />
      {/* </label> */}
      <p>Don't have a account?<Link to="/Register"> Register</Link></p>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
