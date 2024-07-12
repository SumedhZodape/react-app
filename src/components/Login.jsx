import '../styles/login.css';
import rsslogo from '../assets/rsslogo-orange.png';
import personinCircle from '../assets/person-circle.png';
import userIcon from '../assets/user.svg';
import passwordIcon from '../assets/password.svg';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const userData = useRef({
    username:"",
    password:""
  })
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userData.current?.username === 'Admin2024' && userData.current?.password === 'Admin@2024') {
      sessionStorage.setItem('isUserLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  const setData = (propName, propValue)=>{
    userData.current[propName] = propValue
  }

  return (
    <div className="login-container">
      <div className="logo">
        <img src={rsslogo} alt="RSS Logo" />
        <span className='loginlogo-text'>राष्ट्रीय स्वयंसेवक संघ</span>
      </div>
      <div className="outer-loginBox">
        <div className="login-box">
          <div className="login-header">
            <img src={personinCircle} alt="img" />
            <h2>User Login</h2>
          </div>
          <div className="login-form">
            <div className="input-group">
              <span>
                <img src={userIcon} alt="" />
              </span>
              <input
                type="text"
                placeholder="User Name"
                onChange={(e) => setData('username', e.target.value)}
              />
            </div>
            <div className="input-group">
              <span>
                <img src={passwordIcon} alt="" />
              </span>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setData('password', e.target.value)}
              />
            </div>
            <div className="loginbtn-container">
              <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
