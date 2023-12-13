import React, { useState } from 'react';
import './Authentication.css';
import Login from './Login';
import Register from './Registration';

const Authentication = () => {
  const [isNewUser, setIsNewUser] = useState(true);

  return (
    <div className="authentication-container">
      {isNewUser ? <Register /> : <Login />}
      <p onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser
          ? 'Already have an account? Login'
          : 'New user? Register here'}
      </p>
    </div>
  );
};

export default Authentication;
