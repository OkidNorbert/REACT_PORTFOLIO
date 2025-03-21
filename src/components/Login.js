import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email === 'okidinorbert@gmail.com' && credentials.password === 'nobert123') {
      setError('');
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-circle"></div>
            <h1>Welcome Back</h1>
          </div>
          <p>Enter your credentials to continue</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              <svg viewBox="0 0 24 24" className="error-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              {error}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <input
                id="email"
                type="email"
                placeholder="okidinorbert@gmail.com"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              <input
                id="password"
                type="password"
                placeholder="nobert123"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            <span>Sign In</span>
            <svg className="button-icon" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
        </form>

        <div className="login-footer">
          <div className="credentials-card">
            <p className="hint-text">Demo Credentials</p>
            <div className="credentials-details">
              <p className="credentials-hint">Email: okidinorbert@gmail.com</p>
              <p className="credentials-hint">Password: nobert123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 