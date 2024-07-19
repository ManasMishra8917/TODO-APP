import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post data to backend API
      await axios.post('https://todo-app-eraf.onrender.com/api/auth/register', formData);
      alert('User registered successfully');
      // Clear form fields after successful registration
      setFormData({
        username: '',
        password: '',
        email: ''
      });
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
