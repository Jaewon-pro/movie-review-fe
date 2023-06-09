import React, { useState } from 'react';
import handleLogin from '../../api/handleLogin';

export default function Login() {
  const [inputEmail, setInputId] = useState('');
  const [inputPassword, setInputPw] = useState('');

  const handleInputId = (e) => { setInputId(e.target.value); }
  const handleInputPw = (e) => { setInputPw(e.target.value); }
  const onClickLogin = async () => {
    const resultData = await handleLogin(inputEmail, inputPassword);
    console.log(`Login 성공 여부: ${resultData.isSuccessful}`);
    if (resultData.isSuccessful) {
      window.location.replace("/");
    } else {
      alert(resultData.message);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor='email'>Email : </label>
        <input type='email' name='email' value={inputEmail} onChange={handleInputId} />
      </div>
      <div>
        <label htmlFor='password'>PW : </label>
        <input type='password' name='password' value={inputPassword} onChange={handleInputPw} />
      </div>
      <div>
        <button type='button' onClick={onClickLogin}>Login</button>
      </div>
    </div>
  );
}
