import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleRegister from '../../api/handleRegister';

function Register() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputEmail, setInputId] = useState('');
  const [inputPassword, setInputPw] = useState('');

  const navigate = useNavigate();

	const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  }
  const handleInputId = (e) => {
    setInputId(e.target.value);
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  }

  const onClickSignUp = async () => {
    const resultData = await handleRegister(inputUsername, inputEmail, inputPassword);
    console.log(`회원가입 성공 여부: ${resultData.isSuccessful}`);
    if (resultData.isSuccessful) {
      navigate('/');
    } else {
      alert(resultData.message);
    }
  }

  return (
    <div className='register'>
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
