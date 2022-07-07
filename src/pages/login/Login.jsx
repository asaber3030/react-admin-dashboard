import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <div className="login-page">
      <h1>Admin - Access Dashboard</h1>
      <div className="form">
        <div className="field">
          <label>Username or E-mail</label>
          <input type="text"/>
        </div>

        <div className="field">
          <label>Password</label>
          <input type="text"/>
        </div>

        <button>Login</button>

      </div>
    </div>
  );

};

export default Login;