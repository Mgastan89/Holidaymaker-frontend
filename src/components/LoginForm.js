import React, { useState } from 'react';
import './LoginForm.css';

const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: ''
  });
  const [registerFormData, setRegisterFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    userType: 'BASIC',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User logged in:', data);
        
        console.log('User Details:', {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          username: data.username,
          address: data.address,
          userType: data.userType
        });
      })
      .catch((error) => console.error('Error logging in:', error));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const userPayload = {
      ...registerFormData,
      address: {
        street: registerFormData.street,
        city: registerFormData.city,
        state: registerFormData.state,
        postalCode: registerFormData.postalCode,
      }
    };

    fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPayload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User registered:', data);
        setShowRegisterForm(false); 
      })
      .catch((error) => console.error('Error registering user:', error));
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={loginFormData.username} onChange={handleLoginChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={loginFormData.password} onChange={handleLoginChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <button className="join-now" onClick={() => setShowRegisterForm(!showRegisterForm)}>
        Join Now!
      </button>

      {showRegisterForm && (
        <div className="dropdown-form">
          <form onSubmit={handleRegister}>
            <div>
              <label>First Name</label>
              <input type="text" name="firstName" value={registerFormData.firstName} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name="lastName" value={registerFormData.lastName} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" value={registerFormData.email} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>Street</label>
              <input type="text" name="street" value={registerFormData.street} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>City</label>
              <input type="text" name="city" value={registerFormData.city} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>State</label>
              <input type="text" name="state" value={registerFormData.state} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>Postal Code</label>
              <input type="text" name="postalCode" value={registerFormData.postalCode} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>User Type</label>
              <select name="userType" value={registerFormData.userType} onChange={handleRegisterChange} required>
                <option value="BASIC">BASIC</option>
                <option value="PREMIUM">PREMIUM</option>
              </select>
            </div>
            <div>
              <label>Username</label>
              <input type="text" name="username" value={registerFormData.username} onChange={handleRegisterChange} required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" value={registerFormData.password} onChange={handleRegisterChange} required />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
