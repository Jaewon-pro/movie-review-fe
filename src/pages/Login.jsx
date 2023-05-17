import React, { useState } from 'react';
import handleLogin from '../api/handleLogin';

function Login() {
  const [inputEmail, setInputId] = useState('');
  const [inputPassword, setInputPw] = useState('');

	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  }

	// login 버튼 클릭 이벤트
  const onClickLogin = () => {
    handleLogin(inputEmail, inputPassword);
  }

  return(
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

export default Login;
