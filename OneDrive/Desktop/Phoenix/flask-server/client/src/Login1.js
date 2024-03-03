// Login1.js

import React from 'react';

const Login1 = () => {
  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
      <div className="container">
        <h2>Login</h2>
        <form action="login.php" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <a href="C:\Users\HP\Desktop\TransitEase\registration.html">Create account</a>
        </form>
      </div>
    </div>
  );
};

export default Login1;
