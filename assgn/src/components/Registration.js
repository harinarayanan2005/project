import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Registration.css"
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user', formData);
  };
  return (
    <div className='authentication-container'>
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {/* <label>
        Username: */}
        <input
          type="text"
          name="username" placeholder='UserName'
          value={formData.username}
          onChange={handleChange}
          required
        />
      {/* </label> */}
       {/* <label>
       Email: */}
        <input
          type="email"
          name="email" placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      {/* </label> */}
      {/* <label>
      Password: */}
        <input
          type="password"
          name="password" placeholder='Password'
          value={formData.email}
          onChange={handleChange}
          required
        />
       {/* </label> */}
      {/* <label>
      Confirm Password: */}
        <input
          type="password"
          name="confirmPassword" placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      {/* </label> */}
      <button type="submit">Register</button>
      <p>Already have a account? <Link to="/"> Login</Link></p>
    </form>
    </div>
  );
};
export default Register;