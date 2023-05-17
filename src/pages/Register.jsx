import React, { useState } from 'react';
import axiosInstance from '../lib/axios';

function Register() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputEmail, setInputId] = useState('');
  const [inputPassword, setInputPw] = useState('');

	const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  }
  const handleInputId = (e) => {
    setInputId(e.target.value);
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  }

  const onClickSignUp = () => {
    console.log('onClickSignUp');
    axiosInstance.post('/auth/signup',
    {
      username: inputUsername,
      email: inputEmail,
      password: inputPassword
    })
    .then((response) => { console.log(response.data); }) 
    .catch((response) => { console.log(response) });
  }

  return (
    <div className='register-home'>
      <h2>Register</h2>
      <div>
        <label htmlFor='email'>Email : </label>
        <input type='email' name='email' value={inputEmail} onChange={handleInputId} />
      </div>
      <div>
        <label htmlFor='username'>Username : </label>
        <input type='text' name='username' value={inputUsername} onChange={handleInputUsername} />
      </div>
      <div>
        <label htmlFor='password'>PW : </label>
        <input type='password' name='password' value={inputPassword} onChange={handleInputPw} />
      </div>
      <div>
        <button type='button' onClick={onClickSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Register;
